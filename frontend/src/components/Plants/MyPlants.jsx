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
        setPlants(response.data)
      } catch (error) {
        console.error(error)
        navigate('/login', { state: { from: location }, replace: true })
      }
    }

    getPlants()

  }, [])

  return (
    <section>
      {plants?.length
      ? (
        <ul>
          {plants.map((plant, id) => <li key={id}>{plant?.scientific_name}</li>)}
        </ul>
      ) : <p>No plants</p>
      }
    </section>
  )
}

