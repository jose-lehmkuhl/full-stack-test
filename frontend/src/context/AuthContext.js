import React, { createContext, useCallback, useState } from 'react'
import api from '../services/api'

export const AuthContext = createContext({})
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null)
  const [err, setErr] = useState(null)
  const signIn = useCallback(async ({ login, password }, setLoading) => {
    setLoading(true)
    const response = await api.post('login', { login, password })
    setLoading(false)
    if (response.data.err) return setErr(response.data.err)
    setToken(response.data.token)
    setErr(null)
  }, [])

  return (
        <AuthContext.Provider value={{ token, err, signIn }}>
            {children}
        </AuthContext.Provider>
  )
}

export default AuthContext
