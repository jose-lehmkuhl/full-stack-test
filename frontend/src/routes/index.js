import React, { useContext } from 'react'

import SignIn from '../pages/SingIn'
import BeerList from '../pages/BeerList'

import { AuthContext } from '../context/AuthContext'

const Router = () => {
  const { token } = useContext(AuthContext)

  return (
      <>
      {token ? <BeerList /> : <SignIn />}
      </>
  )
}

export default Router
