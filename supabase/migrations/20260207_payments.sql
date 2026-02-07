-- Instamojo Payment Integration Migration
-- Run this in your Supabase SQL Editor

-- Create payments table
CREATE TABLE IF NOT EXISTS payments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  payment_request_id VARCHAR(255) NOT NULL UNIQUE,
  payment_id VARCHAR(255),
  plan_type VARCHAR(20) NOT NULL CHECK (plan_type IN ('monthly', 'yearly')),
  amount DECIMAL(10, 2) NOT NULL,
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'failed')),
  instamojo_response JSONB,
  webhook_data JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  completed_at TIMESTAMPTZ,
  subscription_start TIMESTAMPTZ,
  subscription_end TIMESTAMPTZ
);

-- Create indexes for faster lookups
CREATE INDEX IF NOT EXISTS idx_payments_user_id ON payments(user_id);
CREATE INDEX IF NOT EXISTS idx_payments_payment_request_id ON payments(payment_request_id);
CREATE INDEX IF NOT EXISTS idx_payments_status ON payments(status);

-- Add subscription columns to user_premium table
ALTER TABLE user_premium ADD COLUMN IF NOT EXISTS subscription_end TIMESTAMPTZ;
ALTER TABLE user_premium ADD COLUMN IF NOT EXISTS plan_type VARCHAR(20);

-- Enable Row Level Security on payments table
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;

-- Policy: Users can view their own payments
CREATE POLICY "Users can view own payments" ON payments
  FOR SELECT
  USING (auth.uid() = user_id);

-- Policy: Service role can do everything (for webhooks)
CREATE POLICY "Service role full access" ON payments
  FOR ALL
  USING (auth.role() = 'service_role');
