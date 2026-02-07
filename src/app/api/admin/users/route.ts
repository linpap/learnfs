import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

const ADMIN_EMAILS = ['linpap@gmail.com']

interface ProfileRow {
  id: string
  email: string
  created_at: string
}

interface PremiumRow {
  user_id: string
  is_active: boolean
  created_at: string
}

export async function GET(request: NextRequest) {
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
    const searchParams = request.nextUrl.searchParams
    const search = searchParams.get('search') || ''
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '20')
    const offset = (page - 1) * limit

    // Get users with optional search
    let query = supabase
      .from('profiles')
      .select('id, email, created_at', { count: 'exact' })
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1)

    if (search) {
      query = query.ilike('email', `%${search}%`)
    }

    const { data: users, count } = await query

    // Get premium status for these users
    const typedUsers = users as ProfileRow[] | null
    const userIds = typedUsers?.map((u) => u.id) || []
    const { data: premiumData } = await supabase
      .from('user_premium')
      .select('user_id, is_active, created_at')
      .in('user_id', userIds)
      .eq('is_active', true)

    const typedPremiumData = premiumData as PremiumRow[] | null
    const premiumMap = new Map(
      typedPremiumData?.map((p) => [p.user_id, { isActive: p.is_active, since: p.created_at }]) || []
    )

    // Combine user data with premium status
    const usersWithPremium = typedUsers?.map((u) => ({
      ...u,
      isPremium: premiumMap.has(u.id),
      premiumSince: premiumMap.get(u.id)?.since || null,
    })) || []

    return NextResponse.json({
      users: usersWithPremium,
      total: count || 0,
      page,
      limit,
      totalPages: Math.ceil((count || 0) / limit),
    })
  } catch (error) {
    console.error('Admin users error:', error)
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 })
  }
}
