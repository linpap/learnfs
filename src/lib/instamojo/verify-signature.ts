import crypto from 'crypto';

const INSTAMOJO_SALT = process.env.INSTAMOJO_SALT;

/**
 * Verifies the MAC signature from Instamojo webhook
 *
 * Instamojo generates MAC by:
 * 1. Sorting all POST parameters alphabetically (excluding 'mac')
 * 2. Joining values with '|'
 * 3. Computing HMAC-SHA1 with the salt
 */
export function verifyWebhookSignature(
  payload: Record<string, string>,
  receivedMac: string
): boolean {
  if (!INSTAMOJO_SALT) {
    console.error('Instamojo salt not configured');
    return false;
  }

  // Get all keys except 'mac', sort alphabetically
  const sortedKeys = Object.keys(payload)
    .filter((key) => key !== 'mac')
    .sort();

  // Join values with '|'
  const message = sortedKeys.map((key) => payload[key]).join('|');

  // Compute HMAC-SHA1
  const computedMac = crypto
    .createHmac('sha1', INSTAMOJO_SALT)
    .update(message)
    .digest('hex');

  return computedMac === receivedMac;
}
