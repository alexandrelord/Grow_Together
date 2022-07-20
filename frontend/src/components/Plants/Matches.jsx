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
  const mainPlant = location.state.mainPlant
  mainPlant.image = location.state.imageX
  
  async function handleClick(e) {
    e.preventDefault()

    try {
      const matchedPlantId = Number(e.currentTarget.getAttribute('plantid'))
      // const response = await axiosPrivate.post('api/matchmaker/', { matchedPlantId, mainPlant: {id: mainPlant.id, image: 'weird.com'} })
      const response = await axiosPrivate.get('api/matchmaker/')
      // const response = await axiosPrivate.post('authentication/user/', {anything: 'aything'})
      // const response = await axiosPrivate.get('api/plants/')
      // const response = await axiosPrivate.post('api/plants/delete/')
      console.log(response)
      // if(response.data === 'success') navigate('/myplants')
      // else console.error('Matched Failed')
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
