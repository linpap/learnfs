import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { createPaymentRequest } from '@/lib/instamojo/client';
import { PAYMENT_PLANS, PlanType } from '@/lib/instamojo/types';

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const planType = body.plan_type as PlanType;

    if (!planType || !PAYMENT_PLANS[planType]) {
      return NextResponse.json(
        { error: 'Invalid plan type' },
        { status: 400 }
      );
    }

    const plan = PAYMENT_PLANS[planType];
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

    // Create Instamojo payment request
    const paymentResponse = await createPaymentRequest({
      amount: plan.amount,
      purpose: `LearnFS ${plan.label} Subscription`,
      buyer_name: user.user_metadata?.full_name || user.email?.split('@')[0] || 'User',
      email: user.email!,
      redirect_url: `${appUrl}/payment/success`,
      webhook: `${appUrl}/api/payments/webhook`,
      allow_repeated_payments: false,
    });

    if (!paymentResponse.success) {
      return NextResponse.json(
        { error: 'Failed to create payment request' },
        { status: 500 }
      );
    }

    // Store payment record in database
    const { error: insertError } = await supabase.from('payments').insert({
      user_id: user.id,
      payment_request_id: paymentResponse.payment_request.id,
      plan_type: planType,
      amount: plan.amount,
      status: 'pending',
      instamojo_response: paymentResponse.payment_request,
    });

    if (insertError) {
      console.error('Error storing payment record:', insertError);
      // Continue anyway - payment can still be verified via webhook
    }

    return NextResponse.json({
      success: true,
      payment_url: paymentResponse.payment_request.longurl,
      payment_request_id: paymentResponse.payment_request.id,
    });
  } catch (error) {
    console.error('Payment creation error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
