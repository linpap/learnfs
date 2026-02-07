'use client'

import { useEffect, useState, useCallback } from 'react'

interface PremiumUser {
  userId: string
  email: string
  isActive: boolean
  since: string
}

export default function AdminPremiumPage() {
  const [premiumUsers, setPremiumUsers] = useState<PremiumUser[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [addEmail, setAddEmail] = useState('')
  const [adding, setAdding] = useState(false)

  const fetchPremiumUsers = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/premium')
      if (!res.ok) throw new Error('Failed to fetch premium users')
      const data = await res.json()
      setPremiumUsers(data.premiumUsers)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchPremiumUsers()
  }, [fetchPremiumUsers])

  const handleRevoke = async (userId: string) => {
    if (!confirm('Are you sure you want to revoke premium access for this user?')) {
      return
    }

    try {
      const res = await fetch('/api/admin/premium', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, action: 'revoke' }),
      })

      if (!res.ok) throw new Error('Failed to revoke premium')

      await fetchPremiumUsers()
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to revoke premium')
    }
  }

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!addEmail.trim()) return

    setAdding(true)
    try {
      // First, we need to find the user by email
      const searchRes = await fetch(`/api/admin/users?search=${encodeURIComponent(addEmail)}`)
      if (!searchRes.ok) throw new Error('Failed to search users')

      const searchData = await searchRes.json()
      const user = searchData.users?.find((u: { email: string }) =>
        u.email.toLowerCase() === addEmail.toLowerCase()
      )

      if (!user) {
        throw new Error('User not found')
      }

      const res = await fetch('/api/admin/premium', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id, action: 'grant' }),
      })

      if (!res.ok) throw new Error('Failed to grant premium')

      setAddEmail('')
      await fetchPremiumUsers()
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to add premium user')
    } finally {
      setAdding(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Premium Management</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Manage premium subscribers and grant access
        </p>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg">
          {error}
        </div>
      )}

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Add Premium User
        </h2>
        <form onSubmit={handleAdd} className="flex gap-4">
          <div className="flex-1">
            <input
              type="email"
              value={addEmail}
              onChange={(e) => setAddEmail(e.target.value)}
              placeholder="Enter user email..."
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            disabled={adding || !addEmail.trim()}
            className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {adding ? (
              <>
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Adding...
              </>
            ) : (
              'Grant Premium'
            )}
          </button>
        </form>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Premium Subscribers ({premiumUsers.length})
          </h2>
        </div>

        {loading ? (
          <div className="p-8 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
            <span className="ml-3 text-gray-500 dark:text-gray-400">Loading...</span>
          </div>
        ) : premiumUsers.length === 0 ? (
          <div className="p-8 text-center text-gray-500 dark:text-gray-400">
            No premium subscribers yet
          </div>
        ) : (
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Premium Since
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {premiumUsers.map((user) => (
                <tr key={user.userId} className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                        <span className="text-emerald-600 dark:text-emerald-400 font-medium text-sm">
                          {user.email.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {user.email}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {formatDate(user.since)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <button
                      onClick={() => handleRevoke(user.userId)}
                      className="text-sm font-medium text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                    >
                      Revoke
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
