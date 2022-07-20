import { useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'

// styles
import Box from '@mui/material/Box'
import BestMatchCard from './BestMatchCard'


export default function BestMatch() {
    const [matches, setMatches] = useState()
    const axiosPrivate = useAxiosPrivate()
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
      if (matches) navigate('/matches', {state: matches})
    }, [matches])
    
    async function handleClick(e) {
      e.preventDefault()

      try {
        const response = await axiosPrivate.post('api/matches/', { light: location.state.plant['light'] })
        setMatches(response.data)
      } catch (error) {
        console.error(error)
      }

    }

    return (
    <Box sx={{ marginTop: 7 }}>
        <BestMatchCard location={location} handleClick={handleClick} />
    </Box>
  )
}
