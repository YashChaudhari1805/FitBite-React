import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.jpeg'
import { registerAPI, loginAPI } from '../api/auth.api'
import { useAuth } from '../context/AuthContext'

function Auth() {
    const [isLogin, setIsLogin] = useState(true)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const { login } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setLoading(true)

        const form = e.target
        const data = {
            email: form.username.value.includes('@') ? form.username.value : undefined,
            userName: !form.username.value.includes('@') ? form.username.value : undefined,
            password: form.password.value,
        }

        if (!isLogin) {
            data.userName = form.username.value          // always use as userName on register
            data.email = form.email?.value
            data.age = form.age?.value
            data.height = form.height?.value
            data.weight = form.weight?.value
            data.goal = form.goal?.value
        }

        try {
            if (isLogin) {
                const res = await loginAPI(data)
                const { user, accessToken, refreshToken } = res.data.data
                login(user, accessToken, refreshToken)
                navigate('/')
            } else {
                await registerAPI(data)
                // auto-login after register
                const res = await loginAPI({ userName: data.userName, password: data.password })
                const { user, accessToken, refreshToken } = res.data.data
                login(user, accessToken, refreshToken)
                navigate('/')
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-stone-300 flex justify-center items-center p-4 sm:p-8 font-['Candara']">
            <div className="flex w-full max-w-5xl bg-stone-100 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh]">

                <div className="w-1/2 hidden lg:block">
                    <img src={logo} alt="FitBite" className="object-cover w-full h-full" />
                </div>

                <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center overflow-y-auto">
                    <h1 className="text-4xl font-bold mb-6 text-black">
                        {isLogin ? 'Login' : 'Sign Up'}
                    </h1>

                    {error && (
                        <div className="mb-4 p-3 rounded-xl bg-red-100 text-red-700 text-sm">{error}</div>
                    )}

                    <form onSubmit={handleSubmit}>
                        {!isLogin && (
                            <>
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-medium mb-1 text-sm">Email</label>
                                    <input name="email" type="email" required className="w-full border border-gray-300 rounded-xl py-2.5 px-3 focus:outline-none focus:border-blue-500" />
                                </div>
                                <div className="grid grid-cols-3 gap-2 mb-4">
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-1 text-sm">Age</label>
                                        <input name="age" type="number" min="1" required className="w-full border border-gray-300 rounded-xl py-2.5 px-3 focus:outline-none focus:border-blue-500" />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-1 text-sm">Height (cm)</label>
                                        <input name="height" type="number" min="1" required className="w-full border border-gray-300 rounded-xl py-2.5 px-3 focus:outline-none focus:border-blue-500" />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-1 text-sm">Weight (kg)</label>
                                        <input name="weight" type="number" min="1" required className="w-full border border-gray-300 rounded-xl py-2.5 px-3 focus:outline-none focus:border-blue-500" />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-medium mb-1 text-sm">Goal</label>
                                    <select name="goal" required className="w-full border border-gray-300 rounded-xl py-2.5 px-3 focus:outline-none focus:border-blue-500 bg-white">
                                        <option value="">Select a goal</option>
                                        <option value="Weight Loss">Weight Loss</option>
                                        <option value="Muscle Gain">Muscle Gain</option>
                                        <option value="Maintenance">Maintenance</option>
                                    </select>
                                </div>
                            </>
                        )}

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

                        <button type="submit" disabled={loading}
                            className="bg-stone-800 hover:bg-black disabled:opacity-60 text-white font-semibold rounded-xl py-3 px-4 w-full transition-all duration-300 mt-4 text-lg shadow-md">
                            {loading ? 'Please wait…' : isLogin ? 'Login' : 'Create Account'}
                        </button>
                    </form>

                    <div className="mt-6 text-gray-600 text-center text-sm">
                        {isLogin ? "Don't have an account? " : "Already have an account? "}
                        <button onClick={() => { setIsLogin(!isLogin); setError('') }}
                            className="text-stone-600 font-bold hover:underline">
                            {isLogin ? 'Sign up Here' : 'Login Here'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth
