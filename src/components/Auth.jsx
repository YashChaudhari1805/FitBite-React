import React, { useState } from 'react';
import logo from '../assets/logo.jpeg'

function Auth() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="min-h-screen bg-stone-300 flex justify-center items-center p-4 sm:p-8 font-['Candara']">

            <div className="flex w-full max-w-5xl bg-stone-100 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh]">

                <div className="w-1/2 hidden lg:block">
                    <img
                        src={logo}
                        alt="FitBite Fitness"
                        className="object-cover w-full h-full"
                    />
                </div>

                <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center overflow-y-auto">

                    <h1 className="text-4xl font-bold mb-6 text-black">
                        {isLogin ? 'Login' : 'Sign Up'}
                    </h1>

                    <form action="#" method="POST" onSubmit={(e) => e.preventDefault()}>

                        {!isLogin && (
                            <div className="mb-4">
                                <label htmlFor="fullname" className="block text-gray-700 font-medium mb-1 text-sm">Full Name</label>
                                <input type="text" id="fullname" name="fullname" className="w-full border border-gray-300 rounded-xl py-2.5 px-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" autoComplete="off" />
                            </div>
                        )}

                        <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-700 font-medium mb-1 text-sm">Username / Email</label>
                            <input type="text" id="username" name="username" className="w-full border border-gray-300 rounded-xl py-2.5 px-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" autoComplete="off" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 font-medium mb-1 text-sm">Password</label>
                            <input type="password" id="password" name="password" className="w-full border border-gray-300 rounded-xl py-2.5 px-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" autoComplete="off" />
                        </div>

                        {isLogin && (
                            <div className="mb-6 flex justify-between items-center text-sm mt-2">
                                <div className="flex items-center">
                                    <input type="checkbox" id="remember" name="remember" className="text-stone-600 rounded border-gray-300" />
                                    <label htmlFor="remember" className="text-gray-600 ml-2">Remember Me</label>
                                </div>
                                <div className="text-stone-600 font-medium">
                                    <a href="#" className="hover:underline">Forgot Password?</a>
                                </div>
                            </div>
                        )}

                        <button type="submit" className="bg-stone-800 hover:bg-black text-white font-semibold rounded-xl py-3 px-4 w-full transition-all duration-300 mt-4 text-lg shadow-md">
                            {isLogin ? 'Login' : 'Create Account'}
                        </button>

                    </form>

                    <div className="mt-6 text-gray-600 text-center text-sm">
                        {isLogin ? "Don't have an account? " : "Already have an account? "}
                        <button
                            onClick={() => setIsLogin(!isLogin)}
                            className="text-stone-600 font-bold hover:underline"
                        >
                            {isLogin ? 'Sign up Here' : 'Login Here'}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Auth;