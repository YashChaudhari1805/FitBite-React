import React, { useState } from 'react'
import { useNavigate, useLocation, Navigate } from 'react-router-dom'
import logo from '../assets/logo.jpeg'
import { registerAPI, loginAPI } from '../api/auth.api'
import { useAuth } from '../context/AuthContext'

function Auth() {
  const [isLogin, setIsLogin] = useState(true)
  const [error, setError]     = useState('')
  const [loading, setLoading] = useState(false)

  const { user, login } = useAuth()
  const navigate  = useNavigate()
  const location  = useLocation()

  // Where to go after successful auth — default to home
  const from = location.state?.from?.pathname || '/'

  // Already logged in — bounce them away
  if (user) return <Navigate to={from} replace />

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const form = e.target

    try {
      if (isLogin) {
        const identifier = form.username.value
        const data = {
          password: form.password.value,
          ...(identifier.includes('@')
            ? { email: identifier }
            : { userName: identifier }),
        }
        const res = await loginAPI(data)
        const { user: userData, accessToken, refreshToken } = res.data.data
        login(userData, accessToken, refreshToken)
        navigate(from, { replace: true })

      } else {
        const registerData = {
          userName: form.username.value,
          email:    form.email.value,
          password: form.password.value,
          age:      form.age.value,
          height:   form.height.value,
          weight:   form.weight.value,
          goal:     form.goal.value,
        }
        await registerAPI(registerData)
        // Auto-login after register
        const res = await loginAPI({
          userName: registerData.userName,
          password: registerData.password,
        })
        const { user: userData, accessToken, refreshToken } = res.data.data
        login(userData, accessToken, refreshToken)
        navigate(from, { replace: true })
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-stone-300 flex justify-center items-center p-4 sm:p-8 font-['Candara']">
      <div className="flex w-full max-w-5xl bg-stone-100 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh]">

        {/* Left image */}
        <div className="w-1/2 hidden lg:block">
          <img src={logo} alt="FitBite" className="object-cover w-full h-full" />
        </div>

        {/* Form panel */}
        <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center overflow-y-auto">
          <h1 className="text-4xl font-bold mb-6 text-black">
            {isLogin ? 'Login' : 'Sign Up'}
          </h1>

          {error && (
            <div className="mb-4 p-3 rounded-xl bg-red-100 text-red-700 text-sm">{error}</div>
          )}

          <form onSubmit={handleSubmit}>

            {/* ── Sign-up only fields ─────────────────────── */}
            {!isLogin && (
              <>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-1 text-sm">Email</label>
                  <input name="email" type="email" required autoComplete="off"
                    className="w-full border border-gray-300 rounded-xl py-2.5 px-3 focus:outline-none focus:border-blue-500" />
                </div>

                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[
                    { name: 'age',    label: 'Age',        unit: 'yrs' },
                    { name: 'height', label: 'Height',     unit: 'cm'  },
                    { name: 'weight', label: 'Weight',     unit: 'kg'  },
                  ].map(({ name, label, unit }) => (
                    <div key={name}>
                      <label className="block text-gray-700 font-medium mb-1 text-sm">{label} ({unit})</label>
                      <input name={name} type="number" min="1" required
                        className="w-full border border-gray-300 rounded-xl py-2.5 px-3 focus:outline-none focus:border-blue-500" />
                    </div>
                  ))}
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-1 text-sm">Goal</label>
                  <select name="goal" required
                    className="w-full border border-gray-300 rounded-xl py-2.5 px-3 bg-white focus:outline-none focus:border-blue-500">
                    <option value="">Select a goal</option>
                    <option value="Weight Loss">Weight Loss</option>
                    <option value="Muscle Gain">Muscle Gain</option>
                    <option value="Maintenance">Maintenance</option>
                  </select>
                </div>
              </>
            )}

            {/* ── Shared fields ───────────────────────────── */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1 text-sm">
                {isLogin ? 'Username / Email' : 'Username'}
              </label>
              <input name="username" type="text" required autoComplete="off"
                className="w-full border border-gray-300 rounded-xl py-2.5 px-3 focus:outline-none focus:border-blue-500" />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1 text-sm">Password</label>
              <input name="password" type="password" required autoComplete="off"
                className="w-full border border-gray-300 rounded-xl py-2.5 px-3 focus:outline-none focus:border-blue-500" />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-stone-800 hover:bg-black disabled:opacity-60 text-white font-semibold rounded-xl py-3 px-4 w-full transition-all duration-300 mt-4 text-lg shadow-md"
            >
              {loading ? 'Please wait…' : isLogin ? 'Login' : 'Create Account'}
            </button>
          </form>

          <div className="mt-6 text-gray-600 text-center text-sm">
            {isLogin ? "Don't have an account? " : 'Already have an account? '}
            <button
              onClick={() => { setIsLogin(!isLogin); setError('') }}
              className="text-stone-600 font-bold hover:underline"
            >
              {isLogin ? 'Sign up Here' : 'Login Here'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth
