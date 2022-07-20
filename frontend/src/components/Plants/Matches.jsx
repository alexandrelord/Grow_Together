import { useLocation, useNavigate } from 'react-router-dom'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'

// styles
import MatchCard from './MatchCard'
import Carousel from 'react-material-ui-carousel'


export default function Matches() {
  const axiosPrivate = useAxiosPrivate()
  const location = useLocation()
  const navigate = useNavigate()
  const matches = location.state.matches
  const mainPlantId = location.state.plant
  
  async function handleClick(e) {
    e.preventDefault()

    try {
      const matchedPlantId = e.currentTarget.getAttribute('plantid')
      // console.log(matchedPlantId, mainPlantId)
      const response = axiosPrivate.post('api/matchmaker/', { plants: {mainPlantId, matchedPlantId} })
      console.log(response)
      if(response === 'success') navigate('/myplants')
      else console.error('Matched Failed')
    } catch (error) {
      console.error(error)
    }

  }

  const plants = matches.map((match, id) => (
    <MatchCard key={id} match={match} handleClick={handleClick} />
  ))

  return (
      <Carousel autoPlay={false}>
        {plants}
      </Carousel>    
  )
}
