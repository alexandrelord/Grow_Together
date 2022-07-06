import './App.css';
import Layout from './components/Layout/Layout'
import AuthPage from './pages/AuthPage/AuthPage'
import Home from './components/Home/Home'
import Missing from './components/Missing/Missing'
import RequireAuth from './components/Auth/RequireAuth/RequireAuth'
import { Routes, Route } from 'react-router-dom'
import PlantMatch from './pages/PlantMatch/PlantMatch';


export default function App() {
 
  return (
      <Routes>
        <Route path='/' element={<Layout />}>
          {/* public routes */}
          <Route path='login' element={<AuthPage />} />

          {/* private routes */}
          <Route element={<RequireAuth />}>
            <Route path='/' element={<Home />} />
            {/* <Route path='myplants' element={<PlantPage />} /> */}
          </Route>
          <Route path='/matches' element={<PlantMatch/>}/>
          {/* catch all */}
          <Route path='*' element={<Missing />} />
          {/* <Route path='*' element={<Navigate to='/' replace />} /> */}
        </Route>
      </Routes>
    )
  

}

