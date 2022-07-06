import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { uploadToS3 } from '../../api/amazon-s3'
import { plantIdentification } from '../../api/plantNet'

import style from './Home.module.css'
import Button from '../Reusables/Button/Button'

export default function Home() {
  const [image, setImage] = useState('')
  const [plant, setPlant] = useState('')
  const [plantImg, setPlantImg] = useState(null)
  const [bestScore, setBestScore] = useState(null)

  const navigate =useNavigate()

  useEffect(() => {
    if (plant) 
      navigate('/matches', {state: {plant, plantImg, bestScore}})
  }, [plant])

  async function handleSubmit(e) {
    e.preventDefault()

    const s3URL = await uploadToS3(image)
    setPlantImg(s3URL)

    const plantId = await plantIdentification(s3URL)
    console.log(plantId)

    setBestScore((plantId.results[0].score * 100).toFixed(2)) 
    setPlant(plantId.bestMatch)
   
    //   if (score > 50) {
    //     setBestScore(score);
    //   } else {
    //     setBestScore("Sorry, please upload another Image");
    //   }

  }

  return (
    <section className={style.card}>
      <div className={style.image}>
        <p>Looking for a plant to match yours?</p>
        <p>Take a photo and find a match!</p>
      </div>
      <div className={style.addPhoto}>
        <form onSubmit={handleSubmit}>
          <input type='file' name='photo' onChange={(e) => setImage(e.target.files[0])} />
          <Button label='Upload' />
        </form>
      </div>
    </section>
  )
}
