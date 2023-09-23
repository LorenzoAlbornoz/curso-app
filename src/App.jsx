import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navigation from './components/Navigation'
import RegistroView from './pages/RegistroView'
import LoginPage from './pages/LoginPage'
import Cursos from './pages/Cursos'
import Curso from './pages/Curso'
import Admin from './pages/Admin'
import PrivateRoutes from './Routes/PrivateRoutes'

function App() {

  return (
    <>
    <Navigation/>
    <Routes>
     <Route path='/home' element={<Home />} />
     <Route path='/login' element={<LoginPage />} />
     <Route path='/registro' element={<RegistroView />} />
     <Route path='*' element={<h1>Not Found</h1>}/>

     <Route element={<PrivateRoutes/>}>
     <Route path='/cursos' element={<Cursos/>}/>
     <Route path='/curso/:id' element={<Curso/>}/>
     <Route path='/admin' element={<Admin/>}/>
     </Route>
    </Routes>
    </>
  )
}

export default App
