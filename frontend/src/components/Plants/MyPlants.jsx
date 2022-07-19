import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import MyPlantsCard from './MyPlantsCard'


export default function MyPlants() {
  const [plants, setPlants] = useState()
  const axiosPrivate = useAxiosPrivate()
  const navigate = useNavigate()
  const location = useLocation()
  

  useEffect(() => {

    const getPlants = async () => {
      try {
        const response = await axiosPrivate.get('/api/plants/')
        // console.log(response)
        setPlants(response.data)
      } catch (error) {
        console.error(error)
        navigate('/login', { state: { from: location }, replace: true })
      }
    }

    getPlants()

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

  // const plantList = plants.map((plant, id) => (
  //   <MyPlantsCard>

  //   </MyPlantsCard>
  // ))

  return (

      <Container maxWidth='xs' >
        <Box sx={{ marginTop: 15 }}>
          <Paper sx={{ height: 375, p: 2.5, bgcolor: 'custom.medium' }}>
            <Stack spacing={2}>
              <MyPlantsCard delete={handleDelete}/>
              <MyPlantsCard delete={handleDelete}/>  
            </Stack>  
          </Paper>   
        </Box>
      </Container>
    

    // <Box sx={{ marginY: 20 }}>
    //   {plants?.length
    //   ? (
    //     <ul>
    //       {plants.map((plant, id) => 
    //       <li key={id}>
    //         {plant?.scientific_name}
    //         <button id={plant.id} onClick={handleDelete}>Delete</button>
    //       </li>)}
    //     </ul>
    //   ) : <p>No plants</p>
    //   }
    // </Box>
  )
}

