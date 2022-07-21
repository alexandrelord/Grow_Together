import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Avatar from '@mui/material/Avatar'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Button from '../Button'

import InvertColorsOutlinedIcon from '@mui/icons-material/InvertColorsOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined'
import CoronavirusOutlinedIcon from '@mui/icons-material/CoronavirusOutlined'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function BestMatchCard({ location, handleClick }) {
  return (
    <Card variant='outlined' sx={{ width: 375, borderRadius: '0' }}>
            <CardMedia
            component="img"
            height="375"
            image={location.state.imageX}
            />
            <CardContent>
                <Stack direction='row' spacing={3} sx={{ display: 'flex', alignItems: 'baseline' }}>
                    <Typography variant='h6' sx={{ fontWeight: 'bold' }}>{location.state.plant['scientific_name']}</Typography>
                    <Typography variant='body2' sx={{ color: 'custom.mediumDark' }}>({location.state.bestScore}% match)</Typography>
                </Stack>
                <Typography variant='body1'>Care & Conditions</Typography>

                <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-around' }}>
                    <Stack spacing={1} sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar sx={{ bgcolor: 'custom.light' }}>
                            <InvertColorsOutlinedIcon sx={{ color: 'custom.mediumDark' }} />
                        </Avatar>
                        <Typography variant='body2'>{location.state.plant['water_use']}</Typography>
                    </Stack>
                    <Stack spacing={1} sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar sx={{ bgcolor: 'custom.light' }}>
                            <LightModeOutlinedIcon sx={{ color: 'custom.mediumDark' }} />
                        </Avatar>
                        <Typography variant='body2'>{location.state.plant['light']}</Typography>
                    </Stack>
                </Box>
                
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Accordion elevation={0} sx={{ mt: 1 }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon fontSize='small'/>} >
                            <Typography variant='caption'>Learn More</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Stack direction='row'>
                                <Stack spacing={1} sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Avatar sx={{ bgcolor: 'custom.light' }}>
                                    <BugReportOutlinedIcon sx={{ color: 'custom.mediumDark' }} />
                                    </Avatar>
                                    <Typography variant='body2'>{location.state.plant['insects']}</Typography>
                                </Stack>
                                <Stack spacing={1} sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Avatar sx={{ bgcolor: 'custom.light' }}>
                                    <CoronavirusOutlinedIcon sx={{ color: 'custom.mediumDark' }} />
                                    </Avatar>
                                    <Typography variant='body2'>{location.state.plant['disease']}</Typography>
                                </Stack>
                            </Stack>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </CardContent>
            <Box sx={{ width: 335, margin: 'auto', marginBottom: 1}}>
                <Stack onClick={handleClick}>
                    <Button label='See all matches...' />
                </Stack>
            </Box>
    </Card>
  )
}
