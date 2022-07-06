import { useLocation } from 'react-router-dom'

export default function PlantMatch() {
    const location = useLocation()

  return (
    <section>
      <br />
      <h3>Best Match: {location.state.plant}</h3>
      <br />
      <h3>Matching Score: {location.state.bestScore} %</h3>
      <br />
      <img src={location.state.plantImg} style={{height: 200, width: 200}}></img>
    </section>
  )
}
