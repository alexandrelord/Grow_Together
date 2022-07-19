import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../api/authentication'
import useAuth from '../hooks/useAuth'


const drawerWidth = 240

export default function NavBar(props) {
  const { window } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const { setAuth } = useAuth()
  const navigate = useNavigate()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleClick = async (e) => {
    e.preventDefault()

    try {
      const response = await logout()
      if (response === 'success') {
        setAuth({})
        navigate('/login')
      }
    } catch (error) {
      console.error(error)
    } 
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }} >
      <Typography variant="h6" sx={{ my: 2 }}>
        Grow Together
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding sx={{ display: "flex", flexDirection: "column" }}>
        <ListItemButton  component={Link} to='/'>
            <ListItemText> Home </ListItemText>
        </ListItemButton>
        <ListItemButton  component={Link} to='/myplants'>
            <ListItemText> My Plants </ListItemText>
        </ListItemButton>
        <ListItemButton  component={Link} to='/login'>
            <ListItemText> Logout </ListItemText>
        </ListItemButton>
        </ListItem> 
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" sx={{ bgcolor: 'custom.medium'  }}>
        <Toolbar>
          <IconButton
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color: 'white' }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', color: 'white' } }}
          >
            Grow Together
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            
              <Button sx={{ color: 'white' }} component={Link} to='/' disableRipple>
                Home
              </Button>
              <Button sx={{ color: 'white' }} component={Link} to='/myplants' disableRipple>
                MyPlants
              </Button>
              <Button sx={{ color: 'white' }} component={Link} to='/login' onClick={handleClick} disableRipple>
                Logout
              </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
