import React, { useEffect, useContext, useState } from 'react'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import CircularProgress from '@mui/material/CircularProgress'

import { AuthContext } from '../../context/AuthContext'
import api from '../../services/api'

const BeerList = () => {
  const { token } = useContext(AuthContext)
  const [beers, setBeers] = useState([])
  const [loading, setLoading] = useState(true)

  const getAllBeers = async () => {
    const getBeers = async (page = 1, beers = []) => {
      const response = await api.get(`beers?perPage=80&page=${page}`, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      })

      if (response.data.length >= 80) return await getBeers(page + 1, [...beers, ...response.data])
      return [...beers, ...response.data]
    }

    const beers = await getBeers()

    setBeers(beers)
    setLoading(false)
  }

  useEffect(() => {
    getAllBeers()
  }, [])

  return (
          <Container component="main">
              <Grid container spacing={2} justifyContent='center' >
              {loading
                ? <CircularProgress size={14} />
                : console.log(beers)
              }
              </Grid>
          </Container>
  )
}
export default BeerList
