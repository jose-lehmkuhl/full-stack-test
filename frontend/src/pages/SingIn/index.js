import React, { useState, useContext } from 'react'
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import CircularProgress from '@mui/material/CircularProgress'

import { AuthContext } from '../../context/AuthContext'

const SignIn = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const { signIn, err } = useContext(AuthContext)

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = { login, password }
    signIn(data, setLoading)
  }

  return (
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                name="login"
                label="Login"
                onChange={ e => setLogin(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                onChange={e => setPassword(e.target.value)}
                type="password"
              />
              {err && <Alert severity="error">{err}</Alert>}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 4, mb: 4 }}
                disabled={loading}
              >
                {!loading ? 'Sign In' : <CircularProgress size={24}/>}
              </Button>
            </Box>
          </Box>
        </Container>
  )
}

export default SignIn
