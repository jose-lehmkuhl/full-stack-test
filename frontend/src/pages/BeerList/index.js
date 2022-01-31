import React, { useEffect, useContext, useState } from 'react'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import CircularProgress from '@mui/material/CircularProgress'
import Pagination from '@mui/material/Pagination'

import { AuthContext } from '../../context/AuthContext'
import api from '../../services/api'

import Beer from './Beer'

const BeerList = () => {
  const { token } = useContext(AuthContext)
  const [beers, setBeers] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)

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

  const totalPages = Math.ceil(beers.length / 12)
  return (
          <Container component="main">
              <Grid container spacing={2} justifyContent='center' >
              {loading
                ? <CircularProgress size={14} />
                : beers.slice((page - 1) * 12, ((page - 1) * 12) + 12).map(beer => <Beer beer={beer} key={beer.id}/>)
              }
               <Grid item xs={12}>
                    <Grid container spacing={2} justifyContent='center' >
                        {!loading && <Pagination size='large' count={totalPages} color="primary" page={page} onChange={(event, page) => setPage(page)} />}
                    </Grid>
                </Grid>
              </Grid>
          </Container>
  )
}
export default BeerList
