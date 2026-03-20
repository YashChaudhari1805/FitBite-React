import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { updateSubscriptionAPI } from '../api/user.api'

function Card({ title, price, features, buttonText, isPopular, planKey }) {
  const { user, login } = useAuth()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    if (!user) { navigate('/auth'); return }
    if (user.subscription === planKey) return   // already on this plan
    setLoading(true)
    try {
      const res = await updateSubscriptionAPI(planKey)
      // update context with new user data (re-use login helper to refresh user state)
      login(res.data.data, localStorage.getItem('accessToken'), localStorage.getItem('refreshToken'))
      alert(`Subscription updated to ${planKey}!`)
    } catch {
      alert('Could not update subscription. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const isCurrent = user?.subscription === planKey

  return (
    <div className={`w-full md:w-80 lg:w-96 bg-white shadow-md rounded-2xl border-2 flex flex-col h-full relative ${isPopular ? 'border-stone-700' : 'border-gray-100'}`}>

      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-stone-700 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
          Most Popular
        </div>
      )}

      <div className="p-8 flex flex-col grow">
        <div className="text-center mb-8 mt-2">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <div className="mt-3">
            <span className="text-4xl font-extrabold text-stone-700">{price}</span>
            <span className="text-gray-500 font-medium">/month</span>
          </div>
        </div>

        <ul className="flex flex-col gap-4 grow text-sm mb-8">
          {features.map((feature, index) => (
            <li key={index} className={`flex items-center gap-3 ${feature.included ? 'text-gray-700 font-medium' : 'text-gray-400 opacity-60'}`}>
              <svg className={`w-5 h-5 shrink-0 ${feature.included ? 'text-stone-700' : 'text-gray-300'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {feature.included
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />}
              </svg>
              <span className={feature.included ? '' : 'line-through'}>{feature.name}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          <button
            onClick={handleClick}
            disabled={loading || isCurrent}
            className={`w-full py-3 rounded-xl font-bold transition-all duration-200 disabled:opacity-60 ${isPopular ? 'bg-stone-700 text-white hover:bg-black' : 'bg-gray-100 text-black hover:bg-gray-200'}`}
          >
            {loading ? 'Updating…' : isCurrent ? '✓ Current Plan' : buttonText}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
