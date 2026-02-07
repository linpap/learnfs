import {
  CreatePaymentRequestParams,
  CreatePaymentResponse,
} from './types';

const INSTAMOJO_API_KEY = process.env.INSTAMOJO_API_KEY;
const INSTAMOJO_AUTH_TOKEN = process.env.INSTAMOJO_AUTH_TOKEN;
const INSTAMOJO_ENDPOINT = process.env.INSTAMOJO_ENDPOINT || 'https://www.instamojo.com/api/1.1';

function getHeaders(): HeadersInit {
  if (!INSTAMOJO_API_KEY || !INSTAMOJO_AUTH_TOKEN) {
    throw new Error('Instamojo credentials not configured');
  }

  return {
    'X-Api-Key': INSTAMOJO_API_KEY,
    'X-Auth-Token': INSTAMOJO_AUTH_TOKEN,
    'Content-Type': 'application/x-www-form-urlencoded',
  };
}

export async function createPaymentRequest(
  params: CreatePaymentRequestParams
): Promise<CreatePaymentResponse> {
  const formData = new URLSearchParams();
  formData.append('amount', params.amount.toString());
  formData.append('purpose', params.purpose);
  formData.append('buyer_name', params.buyer_name);
  formData.append('email', params.email);
  formData.append('redirect_url', params.redirect_url);
  formData.append('allow_repeated_payments', params.allow_repeated_payments ? 'true' : 'false');

  if (params.phone) {
    formData.append('phone', params.phone);
  }

  if (params.webhook) {
    formData.append('webhook', params.webhook);
  }

  const response = await fetch(`${INSTAMOJO_ENDPOINT}/payment-requests/`, {
    method: 'POST',
    headers: getHeaders(),
    body: formData.toString(),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Instamojo API error: ${response.status} - ${errorText}`);
  }

  const data = await response.json();
  return data as CreatePaymentResponse;
}

export async function getPaymentRequest(paymentRequestId: string): Promise<CreatePaymentResponse> {
  const response = await fetch(
    `${INSTAMOJO_ENDPOINT}/payment-requests/${paymentRequestId}/`,
    {
      method: 'GET',
      headers: getHeaders(),
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Instamojo API error: ${response.status} - ${errorText}`);
  }

  const data = await response.json();
  return data as CreatePaymentResponse;
}
