import './App.css';
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
  
  return (
    <div className="App">
      <h1>Grow Togther</h1>
    </div>
  );
}

