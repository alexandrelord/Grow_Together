import { useState, useEffect } from 'react'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'

export default function MyPlants() {
  const [plants, setPlants]  = useState()
  const axiosPrivate = useAxiosPrivate()
  

  useEffect(() => {
    let isMounted = true
    const controller = new AbortController()

    const getPlants = async () => {
      try {
        const response = await axiosPrivate.get('/authentication/user/')
        console.log(response.data)
        isMounted && setPlants(response.data)
      } catch (error) {
        console.error(error)
      }
    }

    getPlants()

    return () => {
      isMounted = false
      controller.abort()
    }

  }, [])

  return (
    <section>
      {plants?.length
      ? (
        <ul>
          {plants.map((plant, id) => <li key={id}>{plant?.username}</li>)}
        </ul>
      ) : <p>No plants</p>
      }
    </section>
  )
}

