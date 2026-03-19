import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

import BasicImg    from '../assets/Basic.png'
import ProImg      from '../assets/Pro.png'
import UltimateImg from '../assets/Ultimate.png'

const PLAN_IMAGES = { Basic: BasicImg, Pro: ProImg, Ultimate: UltimateImg }
const PLAN_BADGE  = { Basic: 'badge-neutral', Pro: 'badge-primary', Ultimate: 'badge-warning' }

function Profile() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    )
  }

  if (!user) return <Navigate to="/auth" replace />

  const planImage  = PLAN_IMAGES[user.subscription] ?? ProImg
  const badgeClass = PLAN_BADGE[user.subscription]  ?? 'badge-neutral'

  return (
    <div className="font-['Candara'] px-6 py-10 w-full flex flex-col items-center justify-center min-h-[60vh]">
      <div className="card card-side bg-white shadow-2xl max-w-2xl w-full border border-stone-200 overflow-hidden">

        <figure className="w-1/3 bg-stone-100 shrink-0">
          <img src={planImage} alt={`${user.subscription} plan`} className="object-cover h-full w-full" />
        </figure>

        <div className="card-body p-8 bg-white">
          <div className="flex justify-between items-start flex-wrap gap-2">
            <h2 className="card-title text-3xl font-bold text-stone-900">{user.userName}</h2>
            <div className={`badge ${badgeClass} p-3 text-sm font-semibold`}>{user.subscription}</div>
          </div>

          <p className="text-stone-400 text-sm mt-1">{user.email}</p>

          <div className="grid grid-cols-2 gap-6 mt-6 text-stone-700">
            <div>
              <p className="text-sm text-stone-400 uppercase tracking-wider">Age</p>
              <p className="text-xl font-semibold">{user.age} yrs</p>
            </div>
            <div>
              <p className="text-sm text-stone-400 uppercase tracking-wider">Height</p>
              <p className="text-xl font-semibold">{user.height} cm</p>
            </div>
            <div>
              <p className="text-sm text-stone-400 uppercase tracking-wider">Weight</p>
              <p className="text-xl font-semibold">{user.weight} kg</p>
            </div>
            <div>
              <p className="text-sm text-stone-400 uppercase tracking-wider">Goal</p>
              <p className="text-xl font-semibold text-green-600">{user.goal}</p>
            </div>
          </div>

          <div className="card-actions justify-start mt-8">
            <button className="btn btn-sm btn-outline">Edit Profile</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
