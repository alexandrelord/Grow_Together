import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function PlantMatch(props) {
    const location = useLocation()

  
  return (
    <div>
<h1>Best Match: {location.state.plant}</h1>
<h3>Score: {location.state.bestScore}</h3>
<img src={location.state.plantimg}></img>



    </div>
  )
}
