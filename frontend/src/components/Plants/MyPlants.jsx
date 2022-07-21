import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import MyPlantsCard from './MyPlantsCard'

export default function MyPlants() {
  const [myPlants, setMyPlants] = useState([])
  const axiosPrivate = useAxiosPrivate()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {

    const getMyPlants = async () => {
      try {
        const response = await axiosPrivate.get('/api/myplants/')
        console.log(response.data)
        setMyPlants(response.data)
      } catch (error) {
        console.error(error)
        navigate('/login', { state: { from: location }, replace: true })
      }
    }
    getMyPlants()
  }, [])

  const handleDelete = async (e) => {
    e.preventDefault()
    console.log('Delete')
    // console.log(e.target.id)
    // try {
    //   const response = await axiosPrivate.post('api/plants/delete/', {'plantId': e.target.id})
    //   console.log(response)
    // } catch (error) {
      
    // }
  }

  // const match = myPlants.map((myPlant, id) => (
  //   <MyPlantsCard key={id} myPlant={myPlant} handleDelete={handleDelete} />
  // ))

  return (

      <Container maxWidth='xs' >
        <Box sx={{ marginTop: 15 }}>
          <Paper sx={{ height: 375, p: 2.5, bgcolor: 'custom.light' }}>
            <Stack spacing={2}>
              {myPlants.length === 0 
                ? 'No Plants in your Database'
                : 
                myPlants.map((myPlant, id) => (
                  console.log(myPlant)
                  // <MyPlantsCard key={id} myPlant={myPlant} handleDelete={handleDelete} />
                ))
               }
            </Stack>  
          </Paper>   
        </Box>
      </Container>
  )
}

