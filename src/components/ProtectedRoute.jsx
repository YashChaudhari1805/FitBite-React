import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { canAccess, requiredPlanLabel } from '../utils/subscriptionAccess'

/**
 * Wraps any route that needs auth or subscription gating.
 *
 * Usage in main.jsx:
 *   <Route path="diet" element={<ProtectedRoute><Diet /></ProtectedRoute>} />
 */
function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()
  const location = useLocation()

  // While restoring session, show a centered spinner
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    )
  }

  const plan = user?.subscription ?? 'guest'
  const path = location.pathname

  // Not logged in → send to /auth, remember where they came from
  if (!user) {
    return <Navigate to="/auth" state={{ from: location }} replace />
  }

  // Logged in but plan too low → show upgrade wall
  if (!canAccess(plan, path)) {
    const needed = requiredPlanLabel(path)
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 font-['Candara'] text-center">
        <div className="text-6xl mb-4">🔒</div>
        <h2 className="text-3xl font-bold text-stone-800 mb-3">
          {needed} Plan Required
        </h2>
        <p className="text-stone-500 max-w-md mb-8">
          This feature is available on the <strong>{needed}</strong> plan and above.
          Upgrade to unlock it.
        </p>
        <a href="/#pricing" className="btn btn-neutral px-8 rounded-full">
          View Plans
        </a>
      </div>
    )
  }

  return children
}

export default ProtectedRoute
