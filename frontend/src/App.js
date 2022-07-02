import './App.css';
import Layout from './components/Layout/Layout'
import AuthPage from './pages/AuthPage/AuthPage'
import Home from './components/Home/Home'
// import PlantPage from './pages/PlantPage/PlantPage'
import RequireAuth from './components/Auth/RequireAuth/RequireAuth'
import { Routes, Route } from 'react-router-dom'


export default function App() {
 
  return (
      <Routes>
        <Route path='/' element={<Layout />}>
          {/* public routes */}
          <Route path='login' element={<AuthPage />} />

          {/* private routes */}
          {/* <Route element={<RequireAuth />}> */}
            <Route path='/' element={<Home />} />
            {/* <Route path='myplants' element={<PlantPage />} /> */}
          {/* </Route> */}
          {/* catch all */}
          {/* <Route path='*' element={<Navigate to='/' replace />} /> */}
        </Route>
      </Routes>
    )
  

}

