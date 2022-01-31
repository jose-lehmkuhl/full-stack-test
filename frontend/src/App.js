import React from 'react'

import Router from './routes'
import { AuthProvider } from './context/AuthContext'

const App = () => (
  <AuthProvider>
    <Router />
  </AuthProvider>
)

export default App
