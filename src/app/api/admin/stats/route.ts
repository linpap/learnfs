import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

const ADMIN_EMAILS = ['linpap@gmail.com']

export async function GET() {
  const supabase = await createClient()

  // Verify user is authenticated
  const { data: { user }, error: authError } = await supabase.auth.getUser()

  if (authError || !user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Verify user is admin
  const userEmail = user.email?.toLowerCase() || ''
  if (!ADMIN_EMAILS.includes(userEmail)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  try {
    // Get total users count
    const { count: totalUsers } = await supabase
      .from('profiles')
      .select('*', { count: 'exact', head: true })

    // Get premium users count
    const { count: premiumUsers } = await supabase
      .from('user_premium')
      .select('*', { count: 'exact', head: true })
      .eq('is_active', true)

    // Get users who signed up this month
    const startOfMonth = new Date()
    startOfMonth.setDate(1)
    startOfMonth.setHours(0, 0, 0, 0)

    const { count: thisMonthSignups } = await supabase
      .from('profiles')
      .select('*', { count: 'exact', head: true })
      .gte('created_at', startOfMonth.toISOString())

    // Get recent signups (last 5)
    const { data: recentUsers } = await supabase
      .from('profiles')
      .select('id, email, created_at')
      .order('created_at', { ascending: false })
      .limit(5)

    return NextResponse.json({
      totalUsers: totalUsers || 0,
      premiumUsers: premiumUsers || 0,
      freeUsers: (totalUsers || 0) - (premiumUsers || 0),
      thisMonthSignups: thisMonthSignups || 0,
      recentUsers: recentUsers || [],
    })
  } catch (error) {
    console.error('Admin stats error:', error)
    return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 })
  }
}
