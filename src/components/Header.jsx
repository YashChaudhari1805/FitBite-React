import React from 'react'
import Logo from '../assets/logo.jpeg'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Header() {
    const { user, logout } = useAuth()
    const navigate = useNavigate()

    const handleLogout = async () => {
        await logout()
        navigate('/')
    }

    return (
        <div className="font-['Candara'] w-full">
            <header className="w-full bg-blue-200 text-black py-1.5 shadow-md">
                <h1 className="text-center tracking-wide text-sm font-medium">Embrace Serene Life!</h1>
            </header>

            <div className="sticky top-0 z-50 w-full bg-base-100 shadow-md">
                <div className="navbar px-6 py-2">
                    <div className="navbar-start items-center gap-2">
                        <Link to="/" className="flex items-center gap-2">
                            <img src={Logo} alt="FitBite Logo" className="w-9 h-9 rounded-md shadow-md" />
                            <span className="text-2xl font-bold cursor-pointer tracking-wide">FitBite</span>
                        </Link>
                    </div>

                    <div className="navbar-center">
                        <ul className="menu menu-horizontal gap-1 text-base font-semibold">
                            {[
                                { to: '/', label: 'Home', end: true },
                                { to: 'profile', label: 'Profile' },
                                { to: 'recipes', label: 'Recipes' },
                                { to: 'workouts', label: 'Workout' },
                                { to: 'diet', label: 'Diet Tracking' },
                                { to: 'about', label: 'About Us' },
                            ].map(({ to, label }) => (
                                <li key={to}>
                                    <NavLink to={to} end={to === '/'}
                                        className={({ isActive }) =>
                                            `rounded-lg px-4 py-2 ${isActive ? 'bg-blue-200' : 'hover:bg-blue-100'}`
                                        }>
                                        {label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="navbar-end gap-2">
                        {user ? (
                            <>
                                <span className="text-sm font-medium text-stone-600 mr-1">Hi, {user.userName}</span>
                                <button onClick={handleLogout} className="btn btn-neutral btn-dash">
                                    Log Out
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to="/auth">
                                    <button className="btn btn-neutral btn-dash">Log In</button>
                                </Link>
                                <Link to="/auth">
                                    <button className="btn btn-neutral btn-outline">Sign Up</button>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
