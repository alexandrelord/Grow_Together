import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'

export default function MyPlants() {
  const [plants, setPlants] = useState()
  const axiosPrivate = useAxiosPrivate()
  const navigate = useNavigate()
  const location = useLocation()
  

  useEffect(() => {

    const getPlants = async () => {
      try {
        const response = await axiosPrivate.get('/api/plants/')
        // console.log(response)
        setPlants(response.data)
      } catch (error) {
        console.error(error)
        navigate('/login', { state: { from: location }, replace: true })
      }
    }

    getPlants()

  }, [])

  const handleDelete = async (e) => {
    e.preventDefault()
    console.log(e.target.id)
    try {
      const response = await axiosPrivate.post('api/plants/delete/', {'plantId': e.target.id})
      console.log(response)
    } catch (error) {
      
    }
  }

  return (
    <section>
      {plants?.length
      ? (
        <ul>
          {plants.map((plant, id) => 
          <li key={id}>
            {plant?.scientific_name}
            <button id={plant.id} onClick={handleDelete}>Delete</button>
          </li>)}
        </ul>
      ) : <p>No plants</p>
      }
    </section>
  )
}

