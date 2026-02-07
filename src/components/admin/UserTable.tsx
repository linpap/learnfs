'use client'

import { useState } from 'react'

interface User {
  id: string
  email: string
  created_at: string
  isPremium: boolean
  premiumSince: string | null
}

interface UserTableProps {
  users: User[]
  onTogglePremium: (userId: string, grant: boolean) => Promise<void>
  loading?: boolean
}

export default function UserTable({ users, onTogglePremium, loading }: UserTableProps) {
  const [loadingUserId, setLoadingUserId] = useState<string | null>(null)

  const handleToggle = async (userId: string, grant: boolean) => {
    setLoadingUserId(userId)
    try {
      await onTogglePremium(userId, grant)
    } finally {
      setLoadingUserId(null)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  if (loading) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="ml-3 text-gray-500 dark:text-gray-400">Loading users...</span>
        </div>
      </div>
    )
  }

  if (users.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
        <p className="text-center text-gray-500 dark:text-gray-400">No users found</p>
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50 dark:bg-gray-700/50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Joined
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Premium
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {user.email}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {formatDate(user.created_at)}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                  Active
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {user.isPremium ? (
                  <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">
                    Premium
                  </span>
                ) : (
                  <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
                    Free
                  </span>
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right">
                <button
                  onClick={() => handleToggle(user.id, !user.isPremium)}
                  disabled={loadingUserId === user.id}
                  className={`text-sm font-medium transition-colors disabled:opacity-50 ${
                    user.isPremium
                      ? 'text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300'
                      : 'text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300'
                  }`}
                >
                  {loadingUserId === user.id ? (
                    <span className="flex items-center gap-1">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                    </span>
                  ) : user.isPremium ? (
                    'Revoke'
                  ) : (
                    'Grant Premium'
                  )}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
