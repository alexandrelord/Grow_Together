import { useLocation } from 'react-router-dom'
import MatchCard from './MatchCard'
import Carousel from 'react-material-ui-carousel'
import { axiosPrivate } from '../../utilities/axios'

export default function Matches() {
    const location = useLocation()

    const userPlant = async () => {
      try {
        const response = await axiosPrivate.get('/api/userplants/')
        console.log(response)
      } catch (err) {
        console.error(err)
      }
    }

  return (
      <Carousel autoPlay={false}>
        <MatchCard />
        <MatchCard />
        <MatchCard />
      </Carousel>
     
      
    
  )
}

{/* <br />
      <h3>Best Match: {location.state.plant}</h3>
      <br />
      <h3>Matching Score: {location.state.bestScore} %</h3>
      <br />
      <img src={location.state.plantImg} style={{height: 200, width: 200}}></img> */}
