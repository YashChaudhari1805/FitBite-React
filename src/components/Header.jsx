import React from 'react'
import Logo from '../assets/logo.jpeg'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { canAccess } from '../utils/subscriptionAccess'

const NAV_ITEMS = [
  { to: '/',        label: 'Home',          end: true  },
  { to: '/profile', label: 'Profile',       end: false },
  { to: '/recipes', label: 'Recipes',       end: false },
  { to: '/workouts',label: 'Workout',       end: false },
  { to: '/diet',    label: 'Diet Tracking', end: false },
  { to: '/about',   label: 'About Us',      end: false },
]

// Minimum plan badge shown in tooltip
const ROUTE_PLAN_LABEL = {
  '/profile':  'Login required',
  '/recipes':  'Login required',
  '/workouts': 'Login required',
  '/diet':     'Pro plan required',
}

function Header() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const plan = user?.subscription ?? 'guest'

  const handleLogout = async () => {
    await logout()
    navigate('/')
  }

  return (
    <div className="font-['Candara'] w-full">
      {/* ── Top banner ───────────────────────────────────── */}
      <header className="w-full bg-blue-200 text-black py-1.5 shadow-md">
        <h1 className="text-center tracking-wide text-sm font-medium">Embrace Serene Life!</h1>
      </header>

      {/* ── Sticky navbar ────────────────────────────────── */}
      <div className="sticky top-0 z-50 w-full bg-base-100 shadow-md">
        <div className="navbar px-6 py-2">

          {/* Logo */}
          <div className="navbar-start items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <img src={Logo} alt="FitBite Logo" className="w-9 h-9 rounded-md shadow-md" />
              <span className="text-2xl font-bold cursor-pointer tracking-wide">FitBite</span>
            </Link>
          </div>

          {/* Nav links */}
          <div className="navbar-center">
            <ul className="menu menu-horizontal gap-1 text-base font-semibold">
              {NAV_ITEMS.map(({ to, label, end }) => {
                const accessible = canAccess(plan, to)
                const lockLabel  = ROUTE_PLAN_LABEL[to]

                if (!accessible) {
                  // Locked item — show greyed out with tooltip
                  return (
                    <li key={to}>
                      <div
                        className="tooltip tooltip-bottom"
                        data-tip={lockLabel}
                      >
                        <span className="rounded-lg px-4 py-2 text-stone-400 cursor-not-allowed flex items-center gap-1 select-none">
                          {label}
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m0 0v2m0-2h2m-2 0H10m2-6V9a4 4 0 10-8 0v2m8 0H6m6 0a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4a2 2 0 012-2h6z" />
                          </svg>
                        </span>
                      </div>
                    </li>
                  )
                }

                return (
                  <li key={to}>
                    <NavLink
                      to={to}
                      end={end}
                      className={({ isActive }) =>
                        `rounded-lg px-4 py-2 ${isActive ? 'bg-blue-200' : 'hover:bg-blue-100'}`
                      }
                    >
                      {label}
                    </NavLink>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Auth buttons */}
          <div className="navbar-end gap-2">
            {user ? (
              <>
                <span className="text-sm font-medium text-stone-600 mr-1 hidden sm:block">
                  Hi, {user.userName}
                </span>
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
