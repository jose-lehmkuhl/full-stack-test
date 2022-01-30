import React from 'react'

import SignIn from './pages/SingIn'
import { AuthProvider } from './context/AuthContext'

const App = () => (
  <AuthProvider>
    <SignIn />
  </AuthProvider>
)

export default App
