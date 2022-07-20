import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ClearIcon from '@mui/icons-material/Clear'
import { axiosPrivate } from '../../utilities/axios'


import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import InvertColorsOutlinedIcon from '@mui/icons-material/InvertColorsOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'

export default function MatchCard({ match, handleClick }) {
  return (
    <>
        <Card  variant='outlined' sx={{ width: 375, borderRadius: '0', height: 650 }}>
            <Box sx={{ marginTop: 8, marginBottom: 1, marginLeft: 1.5 }}>
                <Typography variant='h6' >{match['scientific_name']}</Typography>
            </Box>
            <CardMedia
            component="img"
            height="375"
            image={match['image']}
            />
            <Box sx={{ border: '1px solid green', maxWidth: 375, height: 40, p: 1 }}>
                <Stack direction='row' spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box>
                        <Stack direction='row' spacing={0.5}>
                        <InvertColorsOutlinedIcon fontSize='small' />
                        <Typography variant='body2'>{match['water_use']}</Typography>
                        </Stack>
                    </Box>
                    <Divider orientation="vertical" flexItem sx={{ bgcolor: 'custom.medium' }} />
                    <Box>
                        <Stack direction='row' spacing={1}>
                            <LightModeOutlinedIcon fontSize='small' />
                            <Typography variant='body2'>{match['light']}</Typography>
                        </Stack>
                    </Box> 
                </Stack>
            </Box>
            <Box sx={{ mt: 6, display: 'flex', justifyContent: 'space-around' }} >
                <IconButton sx={{ bgcolor: 'custom.medium' }} disableRipple>
                    <ClearIcon fontSize='large' style={{ color: 'white' }} />
                </IconButton>
                <IconButton sx={{ bgcolor: 'custom.medium' }} disableRipple plantid={match['id']} onClick={handleClick}>
                    <FavoriteBorderOutlinedIcon fontSize='large' style={{ color: 'white' }} />
                </IconButton>
            </Box> 
        </Card>

    </>
  )
}
