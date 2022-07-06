import './App.css';

import Layout from './components/Layout/Layout'
import AuthPage from './pages/AuthPage/AuthPage'
import RequireAuth from './components/Auth/RequireAuth'
import Home from './components/Home/Home'
import MyPlants from './components/Plants/MyPlants'
import PlantMatch from './components/Plants/PlantMatch'
import Missing from './components/Missing/Missing'

import { Routes, Route } from 'react-router-dom'


export default function App() {
 
  return (
      <Routes>
        {/* public routes */}
        <Route path='login' element={<AuthPage />} />

        <Route path='/' element={<Layout />}>
          {/* private routes */}
          <Route element={<RequireAuth />}>
            <Route path='/' element={<Home />} />
            <Route path='myplants' element={<MyPlants />} />
            <Route path='matches' element={<PlantMatch />}/>
          </Route>
          {/* catch all */}
          <Route path='*' element={<Missing />} />
          {/* <Route path='*' element={<Navigate to='/' replace />} /> */}
        </Route>
      </Routes>
    )
  

}

