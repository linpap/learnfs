import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { createAdminClient } from '@/lib/supabase/admin';
import { getPaymentRequest } from '@/lib/instamojo/client';
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
    const { payment_request_id, payment_id } = body;

    if (!payment_request_id) {
      return NextResponse.json(
        { error: 'Missing payment_request_id' },
        { status: 400 }
      );
    }

    // Verify payment with Instamojo API
    const paymentData = await getPaymentRequest(payment_request_id);

    if (!paymentData.success) {
      return NextResponse.json(
        { error: 'Payment not found' },
        { status: 404 }
      );
    }

    // Check if payment is completed
    const paymentRequest = paymentData.payment_request;
    if (paymentRequest.status !== 'Completed') {
      return NextResponse.json({
        success: false,
        status: paymentRequest.status,
        message: 'Payment not completed',
      });
    }

    const adminSupabase = createAdminClient();

    // Get the payment record
    const { data: payment, error: fetchError } = await adminSupabase
      .from('payments')
      .select('*')
      .eq('payment_request_id', payment_request_id)
      .eq('user_id', user.id)
      .single();

    if (fetchError || !payment) {
      return NextResponse.json(
        { error: 'Payment record not found' },
        { status: 404 }
      );
    }

    // Already processed
    if (payment.status === 'completed') {
      return NextResponse.json({
        success: true,
        status: 'completed',
        message: 'Payment already verified',
      });
    }

    const planType = payment.plan_type as PlanType;
    const plan = PAYMENT_PLANS[planType];
    const now = new Date();
    const subscriptionEnd = new Date(now);
    subscriptionEnd.setDate(subscriptionEnd.getDate() + plan.duration_days);

    // Update payment record
    await adminSupabase
      .from('payments')
      .update({
        payment_id: payment_id || null,
        status: 'completed',
        completed_at: now.toISOString(),
        subscription_start: now.toISOString(),
        subscription_end: subscriptionEnd.toISOString(),
      })
      .eq('id', payment.id);

    // Activate user premium status
    const { error: upsertError } = await adminSupabase
      .from('user_premium')
      .upsert({
        user_id: user.id,
        is_active: true,
        plan_type: planType,
        subscription_end: subscriptionEnd.toISOString(),
      }, {
        onConflict: 'user_id',
      });

    if (upsertError) {
      console.error('Error activating premium:', upsertError);
      return NextResponse.json(
        { error: 'Failed to activate premium' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      status: 'completed',
      message: 'Payment verified and premium activated',
    });
  } catch (error) {
    console.error('Verification error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
