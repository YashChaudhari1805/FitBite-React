import React, { createContext, useContext, useState, useEffect } from 'react'
import { getMeAPI, logoutAPI } from '../api/auth.api'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // On mount, try to restore session from stored token / cookie
    useEffect(() => {
        getMeAPI()
            .then((res) => setUser(res.data.data))
            .catch(() => setUser(null))
            .finally(() => setLoading(false))
    }, [])

    const login = (userData, accessToken, refreshToken) => {
        localStorage.setItem('accessToken', accessToken)
        localStorage.setItem('refreshToken', refreshToken)
        setUser(userData)
    }

    const logout = async () => {
        try { await logoutAPI() } catch { /* ignore */ }
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
