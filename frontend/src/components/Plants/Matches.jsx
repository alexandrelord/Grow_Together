import { useLocation } from 'react-router-dom'
import MatchCard from './MatchCard'
import Carousel from 'react-material-ui-carousel'

export default function Matches() {
  const location = useLocation()
  const matches = location.state.matches
  console.log(matches)
  const plants = matches.map((match, id) => (
    <MatchCard key={id} match={match} />
  ))

  return (
      <Carousel autoPlay={false}>
        {plants}
      </Carousel>    
  )
}
