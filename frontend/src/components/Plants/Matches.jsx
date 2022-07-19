import { useLocation } from 'react-router-dom'
import MatchCard from './MatchCard'
import Carousel from 'react-material-ui-carousel'

export default function Matches() {
    const location = useLocation()

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
