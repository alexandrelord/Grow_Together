import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import Carousel from 'react-material-ui-carousel'
import Box from '@mui/material/Box'
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

    try {
      let response = await axiosPrivate.post('api/myplants/', {'matchId': Number(e.currentTarget.getAttribute('matchid'))})

      if (response.status === 200) {
        response = await axiosPrivate.get('/api/myplants/')
        setMyPlants(response.data)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const matches = myPlants.map((myPlant, id) => (
    <MyPlantsCard key={id} myPlant={myPlant} handleDelete={handleDelete} />
  ))
  
  return (
    <Box sx={{ marginTop: 15, marginY: 12 }}>
      <Carousel autoPlay={false}>
           { myPlants.length !== 0 ? matches : null }     
      </Carousel>
    </Box>
  )
}

