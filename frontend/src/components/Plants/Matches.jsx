import { useLocation } from 'react-router-dom'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ClearIcon from '@mui/icons-material/Clear'
// import Carousel from 'react-material-ui-carousel'

import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import InvertColorsOutlinedIcon from '@mui/icons-material/InvertColorsOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import axios, { axiosPrivate } from '../../utilities/axios'

export default function PlantMatch() {
    const location = useLocation()

    const userPlant = async () => {
      try {
        const response = await axiosPrivate.get('/api/userplants/')
        console.log(response)
      } catch (err) {
        console.error(err)
      }
    }

  return (
      <Box>
        <Box sx={{ marginTop: 8, marginBottom: 1, marginLeft: 1.5 }}>
          <Typography variant='h6' >Bird of Paradise</Typography>
        </Box>
        <Card  elevation={0} sx={{ width: 375, borderRadius: '0' }}>
          <CardMedia
            component="img"
            height="375"
            image="https://m.media-amazon.com/images/I/51wYWuPCK-L._AC_SL1000_.jpg"
          />
        </Card>
        <Box sx={{ border: '1px solid green', maxWidth: 375, height: 40, p: 1 }}>
            <Stack direction='row' spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box>
                  <Typography variant='body2'>93% Match</Typography>
              </Box>
              <Divider orientation="vertical" flexItem sx={{ bgcolor: 'custom.medium' }} />
              <Box>
                <Stack direction='row' spacing={0.5}>
                  <InvertColorsOutlinedIcon fontSize='small' />
                  <Typography variant='body2'>Water</Typography>
                </Stack>
              </Box>
              <Divider orientation="vertical" flexItem sx={{ bgcolor: 'custom.medium' }} />

              <Box>
                <Stack direction='row' spacing={1}>
                  <LightModeOutlinedIcon fontSize='small' />
                  <Typography variant='body2'>Light</Typography>
                </Stack>
              </Box> 
            </Stack>
            <Box sx={{ mt: 6, display: 'flex', justifyContent: 'space-around' }}>
              <IconButton sx={{ bgcolor: 'custom.medium' }}>
                <ClearIcon fontSize='large' style={{ color: 'white' }} />
              </IconButton>
              <IconButton onClick={userPlant} sx={{ bgcolor: 'custom.medium' }}>
                <FavoriteBorderOutlinedIcon fontSize='large' style={{ color: 'white' }} />
              </IconButton>
            </Box>    
        </Box>
      </Box>
  )
}

{/* <br />
      <h3>Best Match: {location.state.plant}</h3>
      <br />
      <h3>Matching Score: {location.state.bestScore} %</h3>
      <br />
      <img src={location.state.plantImg} style={{height: 200, width: 200}}></img> */}
