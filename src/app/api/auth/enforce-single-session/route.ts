import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'

export async function POST() {
  try {
    const supabase = await createClient()
    const { data: { session }, error: sessionError } = await supabase.auth.getSession()

    if (sessionError || !session) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }

    const adminClient = createAdminClient()

    // Revoke all other sessions for this user, keeping only the current one
    const { error: signOutError } = await adminClient.auth.admin.signOut(
      session.access_token,
      'others'
    )

    if (signOutError) {
      console.error('Error enforcing single session:', signOutError)
      return NextResponse.json({ error: 'Failed to enforce single session' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Enforce single session error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
