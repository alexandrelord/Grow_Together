import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Card from '@mui/material/Card'
import IconButton from '@mui/material/IconButton'
import Avatar from '@mui/material/Avatar'

// MUI Icons
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import InvertColorsOutlinedIcon from '@mui/icons-material/InvertColorsOutlined'
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined'
import CoronavirusOutlinedIcon from '@mui/icons-material/CoronavirusOutlined'
import ClearIcon from '@mui/icons-material/Clear'

export default function MyPlantsCard(props) {
  return (
    <Card sx={{ height: 160 }}>
        <Grid container >
            <Grid item xs={3}>
            <Box sx={{ height: 150, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Avatar sx={{ width: 56, height: 56 }}></Avatar>
            </Box>
            </Grid>
            <Grid item xs={7}>
            <Box sx={{ height: 150, display: 'flex', alignItems: 'center' }}>  
                <Stack spacing={0.5}>
                <Typography variant='h6'>Monster Deliciosa</Typography>
                <Stack direction='row' spacing={1}>
                    <InvertColorsOutlinedIcon fontSize='small' />
                    <Typography variant='body2'>Water</Typography>
                </Stack>
                <Stack direction='row' spacing={1}>
                    <LightModeOutlinedIcon fontSize='small' />
                    <Typography variant='body2'>Light</Typography>
                </Stack>
                <Stack direction='row' spacing={1}>
                    <BugReportOutlinedIcon fontSize='small' />
                    <Typography variant='body2'>Bugs</Typography>
                </Stack>
                <Stack direction='row' spacing={1}>
                    <CoronavirusOutlinedIcon fontSize='small' />
                    <Typography variant='body2'>Diseases</Typography>
                </Stack>                      
                </Stack>
            </Box>
            </Grid>
            <Grid item xs={2}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}> 
                <IconButton onClick={props.delete}>
                <ClearIcon />
                </IconButton>
            </Box>
            </Grid>
        
        </Grid>
    </Card>
  )
}
