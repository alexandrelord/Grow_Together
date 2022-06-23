import './App.css';
import PlantList from './components/PlantList/PlantList'
import * as plantsAPI from './utilities/plants-api'
import { useState, useEffect} from 'react'


export default function App() {
  
  const [plants, setPlants] = useState([])

  useEffect(function () {
    async function fetchPlants() {
      const plants = await plantsAPI.getPlants();
      setPlants(plants);
    }
    fetchPlants();
  }, []);
  
  const plantList = plants.map(plant => (
    <PlantList key={plant.id} plant={plant}/>
  ))

  return (
    <div className="App">
      <h1>Grow Together</h1>
      {plantList}
    </div>
  );
}

