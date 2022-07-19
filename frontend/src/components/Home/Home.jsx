import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { uploadToS3 } from '../../api/amazon-s3'
import { plantIdentification } from '../../api/plantNet'

import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import PhotoCamera from '@mui/icons-material/PhotoCamera'
import Button from '../Button'
import Typography from '@mui/material/Typography'
import style from './Home.module.css'


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
  }

  return (
    <>
      <Box className={style.image}>
        <Box sx={{ position: 'absolute', bottom: '15px', color: 'white' }}>
          <Typography>Looking for a plant to match yours? </Typography>
          <Typography>Take a photo and find a match!</Typography>
        </Box>
      </Box>
      <Stack
        component='form'
        sx={{ width: '320px', marginX: 'auto', marginTop: 2 }}
        spacing={2}
        onSubmit={handleSubmit}
        
      >
        <Box sx={{ border: '1px dashed black', textAlign: 'center'}}>
          <IconButton component='label' >
            <input hidden type='file' name='photo' onChange={(e) => setImage(e.target.files[0])} />
            <PhotoCamera />
          </IconButton>
        </Box>
        <Button variant='contained' label='Send' />
      </Stack>
    </>
  )
}
