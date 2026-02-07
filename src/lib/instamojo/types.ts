export type PlanType = 'monthly' | 'yearly';

export interface PaymentPlan {
  type: PlanType;
  amount: number;
  label: string;
  duration_days: number;
}

export const PAYMENT_PLANS: Record<PlanType, PaymentPlan> = {
  monthly: {
    type: 'monthly',
    amount: 599,
    label: 'Monthly Premium',
    duration_days: 30,
  },
  yearly: {
    type: 'yearly',
    amount: 5500,
    label: 'Yearly Premium',
    duration_days: 365,
  },
};

export interface CreatePaymentRequestParams {
  amount: number;
  purpose: string;
  buyer_name: string;
  email: string;
  phone?: string;
  redirect_url: string;
  webhook?: string;
  allow_repeated_payments: boolean;
}

export interface InstamojoPaymentRequest {
  id: string;
  phone: string | null;
  email: string;
  buyer_name: string;
  amount: string;
  purpose: string;
  status: string;
  send_sms: boolean;
  send_email: boolean;
  sms_status: string | null;
  email_status: string | null;
  shorturl: string | null;
  longurl: string;
  redirect_url: string;
  webhook: string | null;
  allow_repeated_payments: boolean;
  created_at: string;
  modified_at: string;
}

export interface CreatePaymentResponse {
  success: boolean;
  payment_request: InstamojoPaymentRequest;
}

export interface InstamojoWebhookPayload {
  payment_id: string;
  status: string;
  shorturl: string;
  longurl: string;
  purpose: string;
  amount: string;
  fees: string;
  currency: string;
  buyer: string;
  buyer_name: string;
  buyer_phone: string;
  payment_request_id: string;
  mac: string;
}

export interface PaymentRecord {
  id: string;
  user_id: string;
  payment_request_id: string;
  payment_id: string | null;
  plan_type: PlanType;
  amount: number;
  status: 'pending' | 'completed' | 'failed';
  instamojo_response: InstamojoPaymentRequest | null;
  webhook_data: InstamojoWebhookPayload | null;
  created_at: string;
  completed_at: string | null;
  subscription_start: string | null;
  subscription_end: string | null;
}
