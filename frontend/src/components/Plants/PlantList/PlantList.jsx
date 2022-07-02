import { useState, useEffect } from 'react'
import * as plantsAPI from '../../../utilities/plants-api'

export default function PlantList(props) {
  const [plants, setPlants] = useState([])

  useEffect(function () {
        async function fetchPlants() {
          const plants = await plantsAPI.getPlants();
          // console.log(plants)
          setPlants(plants);
        }
        fetchPlants();
      }, []);

      // const plantList = plants.map(plant => (
      //       <PlantList key={plant.id} plant={plant}/>
      //     ))
  
  return (
    <div>
        <h1>PlantList</h1>
        {/* <p>{props.plant.id}</p>
        <p>{props.plant.scientific_name}</p>
        <p>{props.plant.common_name}</p> */}
    </div>
  )
}

// return (
  //     <div className="App">
  //       <h1>Grow Together</h1>
  //       {plantList}
  //     </div>
  //   );
