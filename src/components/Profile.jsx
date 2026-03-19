import React from 'react'
import { Navigate } from 'react-router-dom'
import Pro from '../assets/Pro.png'
import { useAuth } from '../context/AuthContext'

function Profile() {
    const { user, loading } = useAuth()

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[60vh]">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        )
    }

    if (!user) {
        return <Navigate to="/auth" replace />
    }

    return (
        <div className="font-['Candara'] px-6 py-10 w-full flex flex-col items-center justify-center min-h-[60vh]">
            <div className="card card-side bg-white shadow-2xl max-w-2xl border border-stone-200 overflow-hidden">
                <figure className="w-1/3 bg-stone-200">
                    <img src={Pro} alt="User Subscription" className="object-cover h-full" />
                </figure>

                <div className="card-body p-8 bg-white">
                    <div className="flex justify-between items-start">
                        <h2 className="card-title text-3xl font-bold text-stone-900">{user.userName}</h2>
                        <div className="badge badge-neutral p-3">{user.subscription}</div>
                    </div>

                    <p className="text-stone-400 text-sm mt-1">{user.email}</p>

                    <div className="grid grid-cols-2 gap-6 mt-6 text-stone-700">
                        <div>
                            <p className="text-sm text-stone-400 uppercase tracking-wider">Age</p>
                            <p className="text-xl font-semibold">{user.age} Years</p>
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
