import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';
import { verifyWebhookSignature } from '@/lib/instamojo/verify-signature';
import { PAYMENT_PLANS, PlanType } from '@/lib/instamojo/types';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const payload: Record<string, string> = {};

    formData.forEach((value, key) => {
      payload[key] = value.toString();
    });

    const {
      payment_id,
      payment_request_id,
      status,
      mac,
    } = payload;

    // Verify MAC signature
    if (!verifyWebhookSignature(payload, mac)) {
      console.error('Invalid MAC signature');
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 400 }
      );
    }

    // Only process successful payments
    if (status !== 'Credit') {
      console.log(`Payment ${payment_id} status: ${status} - skipping`);
      return NextResponse.json({ success: true });
    }

    const supabase = createAdminClient();

    // Get the payment record
    const { data: payment, error: fetchError } = await supabase
      .from('payments')
      .select('*')
      .eq('payment_request_id', payment_request_id)
      .single();

    if (fetchError || !payment) {
      console.error('Payment record not found:', fetchError);
      return NextResponse.json(
        { error: 'Payment record not found' },
        { status: 404 }
      );
    }

    // Already processed
    if (payment.status === 'completed') {
      return NextResponse.json({ success: true });
    }

    const planType = payment.plan_type as PlanType;
    const plan = PAYMENT_PLANS[planType];
    const now = new Date();
    const subscriptionEnd = new Date(now);
    subscriptionEnd.setDate(subscriptionEnd.getDate() + plan.duration_days);

    // Update payment record
    const { error: updatePaymentError } = await supabase
      .from('payments')
      .update({
        payment_id,
        status: 'completed',
        webhook_data: payload,
        completed_at: now.toISOString(),
        subscription_start: now.toISOString(),
        subscription_end: subscriptionEnd.toISOString(),
      })
      .eq('id', payment.id);

    if (updatePaymentError) {
      console.error('Error updating payment:', updatePaymentError);
    }

    // Activate user premium status
    const { error: upsertError } = await supabase
      .from('user_premium')
      .upsert({
        user_id: payment.user_id,
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

    console.log(`Premium activated for user ${payment.user_id} until ${subscriptionEnd.toISOString()}`);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
