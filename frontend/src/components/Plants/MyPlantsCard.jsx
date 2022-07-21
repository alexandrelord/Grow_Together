import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Card from '@mui/material/Card'
import Paper from '@mui/material/Paper'
import IconButton from '@mui/material/IconButton'
import Avatar from '@mui/material/Avatar'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import InvertColorsOutlinedIcon from '@mui/icons-material/InvertColorsOutlined'
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined'
import CoronavirusOutlinedIcon from '@mui/icons-material/CoronavirusOutlined'
import ClearIcon from '@mui/icons-material/Clear'

export default function MyPlantsCard({ myPlant, handleDelete }) {
  return (
    <>
        <Paper sx={{height: 375, p: 2.5, bgcolor: 'custom.light', marginX: 'auto', maxWidth: 335 }}>
            <Stack spacing={2}>
                <Card sx={{ height: 160 }}>
                    <Grid container >
                        <Grid item xs={3}>
                            <Box sx={{ height: 150, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Avatar src={myPlant.user_plant.image} sx={{ width: 56, height: 56 }}></Avatar>
                            </Box>
                        </Grid>
                        <Grid item xs={7}>
                            <Box sx={{ height: 150, display: 'flex', alignItems: 'center' }}>  
                                <Stack spacing={0.5}>
                                    <Typography variant='body1' sx={{ fontWeight: 'bold' }}>{myPlant.user_plant.scientific_name}</Typography>
                                <Stack direction='row' spacing={1}>
                                    <InvertColorsOutlinedIcon fontSize='small' />
                                    <Typography variant='body2'>{myPlant.user_plant.water_use}</Typography>
                                </Stack>
                                <Stack direction='row' spacing={1}>
                                    <LightModeOutlinedIcon fontSize='small' />
                                    <Typography variant='body2'>{myPlant.user_plant.light}</Typography>
                                </Stack>
                                <Stack direction='row' spacing={1}>
                                    <BugReportOutlinedIcon fontSize='small' />
                                    <Typography variant='body2'>{myPlant.user_plant.insects}</Typography>
                                </Stack>
                                <Stack direction='row' spacing={1}>
                                    <CoronavirusOutlinedIcon fontSize='small' />
                                    <Typography variant='body2'>{myPlant.user_plant.disease}</Typography>
                                </Stack>                      
                                </Stack>
                            </Box>
                        </Grid>
                        <Grid item xs={2}>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}> 
                            <IconButton sx={{ cursor: 'pointer' }} matchid={myPlant.match_id} onClick={handleDelete}>
                                <ClearIcon />
                            </IconButton>
                        </Box>
                        </Grid>
                    </Grid>
                </Card>
                <Card sx={{ height: 160 }}>
                    <Grid container >
                        <Grid item xs={3}>
                            <Box sx={{ height: 150, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Avatar src={myPlant.matched_plant.image} sx={{ width: 56, height: 56 }}></Avatar>
                            </Box>
                        </Grid>
                        <Grid item xs={7}>
                            <Box sx={{ height: 150, display: 'flex', alignItems: 'center' }}>  
                                <Stack spacing={0.5}>
                                    <Typography variant='body1' sx={{ fontWeight: 'bold' }}>{myPlant.matched_plant.scientific_name}</Typography>
                                <Stack direction='row' spacing={1}>
                                    <InvertColorsOutlinedIcon fontSize='small' />
                                    <Typography variant='body2'>{myPlant.matched_plant.water_use}</Typography>
                                </Stack>
                                <Stack direction='row' spacing={1}>
                                    <LightModeOutlinedIcon fontSize='small' />
                                    <Typography variant='body2'>{myPlant.matched_plant.light}</Typography>
                                </Stack>
                                <Stack direction='row' spacing={1}>
                                    <BugReportOutlinedIcon fontSize='small' />
                                    <Typography variant='body2'>{myPlant.matched_plant.insects}</Typography>
                                </Stack>
                                <Stack direction='row' spacing={1}>
                                    <CoronavirusOutlinedIcon fontSize='small' />
                                    <Typography variant='body2'>{myPlant.matched_plant.disease}</Typography>
                                </Stack>                      
                                </Stack>
                            </Box>
                        </Grid>
                        <Grid item xs={2}></Grid>
                    </Grid>
                </Card>
            </Stack>  
        </Paper> 
    </>
  )
}
