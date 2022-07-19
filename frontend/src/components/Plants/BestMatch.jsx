import Box from '@mui/material/Box'
import BestMatchCard from './BestMatchCard'

import { useLocation } from 'react-router-dom'

export default function BestMatch() {
    const location = useLocation()

    return (
    <Box sx={{ marginTop: 7 }}>
        <BestMatchCard location={location} />
    </Box>
  )
}
