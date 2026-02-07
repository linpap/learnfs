import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

const ADMIN_EMAILS = ['linpap@gmail.com']

async function verifyAdmin(supabase: Awaited<ReturnType<typeof createClient>>) {
  const { data: { user }, error: authError } = await supabase.auth.getUser()

  if (authError || !user) {
    return { error: 'Unauthorized', status: 401 }
  }

  const userEmail = user.email?.toLowerCase() || ''
  if (!ADMIN_EMAILS.includes(userEmail)) {
    return { error: 'Forbidden', status: 403 }
  }

  return { user }
}

export async function GET() {
  const supabase = await createClient()
  const auth = await verifyAdmin(supabase)

  if ('error' in auth) {
    return NextResponse.json({ error: auth.error }, { status: auth.status })
  }

  try {
    // Get all premium users with their profile info
    const { data: premiumUsers, error } = await supabase
      .from('user_premium')
      .select(`
        user_id,
        is_active,
        created_at,
        profiles!inner(email)
      `)
      .eq('is_active', true)
      .order('created_at', { ascending: false })

    if (error) throw error

    interface PremiumRow {
      user_id: string
      is_active: boolean
      created_at: string
      profiles: { email: string }
    }

    const formattedUsers = (premiumUsers as PremiumRow[] | null)?.map((p) => ({
      userId: p.user_id,
      email: p.profiles.email,
      isActive: p.is_active,
      since: p.created_at,
    })) || []

    return NextResponse.json({ premiumUsers: formattedUsers })
  } catch (error) {
    console.error('Admin premium GET error:', error)
    return NextResponse.json({ error: 'Failed to fetch premium users' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  const supabase = await createClient()
  const auth = await verifyAdmin(supabase)

  if ('error' in auth) {
    return NextResponse.json({ error: auth.error }, { status: auth.status })
  }

  try {
    const body = await request.json()
    const { userId, action } = body

    if (!userId || !action) {
      return NextResponse.json({ error: 'Missing userId or action' }, { status: 400 })
    }

    if (action === 'grant') {
      // Grant premium access
      const { error } = await supabase
        .from('user_premium')
        .upsert({
          user_id: userId,
          is_active: true,
          created_at: new Date().toISOString(),
        }, {
          onConflict: 'user_id',
        })

      if (error) throw error

      return NextResponse.json({ success: true, message: 'Premium access granted' })
    } else if (action === 'revoke') {
      // Revoke premium access
      const { error } = await supabase
        .from('user_premium')
        .update({ is_active: false })
        .eq('user_id', userId)

      if (error) throw error

      return NextResponse.json({ success: true, message: 'Premium access revoked' })
    } else {
      return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
    }
  } catch (error) {
    console.error('Admin premium POST error:', error)
    return NextResponse.json({ error: 'Failed to update premium status' }, { status: 500 })
  }
}
