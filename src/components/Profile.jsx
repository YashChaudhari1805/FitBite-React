import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { updateProfileAPI } from '../api/user.api'

import BasicImg    from '../assets/Basic.png'
import ProImg      from '../assets/Pro.png'
import UltimateImg from '../assets/Ultimate.png'

const PLAN_IMAGES = { Basic: BasicImg, Pro: ProImg, Ultimate: UltimateImg }
const PLAN_BADGE  = { Basic: 'badge-neutral', Pro: 'badge-primary', Ultimate: 'badge-warning' }
const GOALS       = ['Weight Loss', 'Muscle Gain', 'Maintenance']

function Profile() {
  const { user, login } = useAuth()

  // ── Edit modal state ──────────────────────────────────────
  const [isEditing, setIsEditing] = useState(false)
  const [form, setForm] = useState({})
  const [saving, setSaving] = useState(false)
  const [error, setError]   = useState('')
  const [success, setSuccess] = useState('')

  const openModal = () => {
    setForm({
      age:    user.age,
      height: user.height,
      weight: user.weight,
      goal:   user.goal,
    })
    setError('')
    setSuccess('')
    setIsEditing(true)
  }

  const closeModal = () => setIsEditing(false)

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSave = async (e) => {
    e.preventDefault()
    setSaving(true)
    setError('')
    setSuccess('')
    try {
      const res = await updateProfileAPI(form)
      // refresh user in context
      login(res.data.data, localStorage.getItem('accessToken'), localStorage.getItem('refreshToken'))
      setSuccess('Profile updated!')
      setTimeout(() => { setSuccess(''); setIsEditing(false) }, 1200)
    } catch (err) {
      setError(err.response?.data?.message || 'Could not save changes.')
    } finally {
      setSaving(false)
    }
  }

  if (!user) return null   // ProtectedRoute handles the redirect

  const planImage  = PLAN_IMAGES[user.subscription] ?? ProImg
  const badgeClass = PLAN_BADGE[user.subscription]  ?? 'badge-neutral'

  return (
    <div className="font-['Candara'] px-6 py-10 w-full flex flex-col items-center justify-center min-h-[60vh]">

      {/* ── Profile card ───────────────────────────────────── */}
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
            <button onClick={openModal} className="btn btn-sm btn-outline">Edit Profile</button>
          </div>
        </div>
      </div>

      {/* ── Edit modal ─────────────────────────────────────── */}
      {isEditing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 font-['Candara']">
            <h3 className="text-2xl font-bold text-stone-800 mb-6">Edit Profile</h3>

            {error   && <div className="mb-4 p-3 rounded-xl bg-red-100 text-red-700 text-sm">{error}</div>}
            {success && <div className="mb-4 p-3 rounded-xl bg-green-100 text-green-700 text-sm">{success}</div>}

            <form onSubmit={handleSave} className="space-y-4">
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: 'Age',        name: 'age',    unit: 'yrs' },
                  { label: 'Height',     name: 'height', unit: 'cm'  },
                  { label: 'Weight',     name: 'weight', unit: 'kg'  },
                ].map(({ label, name, unit }) => (
                  <div key={name}>
                    <label className="block text-sm text-stone-500 mb-1">{label} ({unit})</label>
                    <input
                      type="number"
                      name={name}
                      min="1"
                      value={form[name] ?? ''}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-xl py-2 px-3 focus:outline-none focus:border-blue-400"
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-sm text-stone-500 mb-1">Goal</label>
                <select
                  name="goal"
                  value={form.goal ?? ''}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-xl py-2 px-3 bg-white focus:outline-none focus:border-blue-400"
                >
                  {GOALS.map(g => <option key={g} value={g}>{g}</option>)}
                </select>
              </div>

              <p className="text-xs text-stone-400">
                Username and email cannot be changed here. Contact support if needed.
              </p>

              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  disabled={saving}
                  className="btn btn-neutral flex-1 disabled:opacity-60"
                >
                  {saving ? 'Saving…' : 'Save Changes'}
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="btn btn-outline flex-1"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  )
}

export default Profile
