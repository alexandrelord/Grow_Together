import './App.css';
import { createTheme, ThemeProvider  } from '@mui/material'
import Layout from './components/Layout'
import AuthPage from './pages/AuthPage/AuthPage'
import RequireAuth from './components/Auth/RequireAuth'
import Home from './components/Home/Home'
import MyPlants from './components/Plants/MyPlants'
import Matches from './components/Plants/Matches'
import BestMatch from './components/Plants/BestMatch'
import Missing from './components/Missing/Missing'
import PersistLogin from './components/PersistLogin'


import { Routes, Route } from 'react-router-dom'

const theme = createTheme({
  palette: {
    custom: {
      light: '#e9f0e8',
      medium: '#67a16e',
      mediumDark: '#507654',
      dark: '#053f0c'
    } 
  },
  typography: {
    fontFamily: 'Open Sans'
  }
})


export default function App() {
 
  return (
    <ThemeProvider theme={theme}>
      <Routes>
          {/* public routes */}
          <Route path='login' element={<AuthPage />} />

        <Route path='/' element={<Layout />}>
            <Route element={<PersistLogin />}>
            {/* private routes */}
              <Route element={<RequireAuth />}>
                <Route path='/' element={<Home />} />
                <Route path='myplants' element={<MyPlants />} />
                <Route path='bestmatch' element={<BestMatch />}/>
                <Route path='matches' element={<Matches />}/>
              </Route>
            </Route>
          {/* catch all */}
          <Route path='*' element={<Missing />} />
          {/* <Route path='*' element={<Navigate to='/' replace />} /> */}
        </Route>
      </Routes>
    </ThemeProvider>
    )
  

}

