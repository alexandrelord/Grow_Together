import React from 'react'

export default function PlantList(props) {
  return (
    <div>
        <h1>PlantList</h1>
        <p>{props.plant.id}</p>
        <p>{props.plant.scientific_name}</p>
        <p>{props.plant.common_name}</p>
    </div>
  )
}
