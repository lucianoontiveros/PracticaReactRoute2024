import { useState } from 'react'
import './App.css'
import Nav_bar from './components/Nav_bar'
import { Routes, Route} from 'react-router-dom'
import Inicio from './paginas/Inicio'
import Contacto from './paginas/Contacto'
import Blogs from './paginas/Blogs'
import Nosotros from './paginas/Nosotros'
import FooterNav from './components/FooterNav'
import Layout from './components/Layout'
import Blog from './paginas/Blog'

function App() {

  // Deberiamos mejorar como se estructura la pagina para diferentes dispotivos. 
  return (
    <>
      <Nav_bar/>
        <Routes>
          <Route  path='/' element={ <Layout /> }>
            <Route element={ <Inicio/>    } path='/'>Inicio</Route>
            <Route element={ <Nosotros /> } path='/Nosotros'>Nosotros</Route>
            <Route element={ <Contacto/>  } path='/Contacto'>Contacto</Route>
            <Route element={ <Blogs/>     } path='/Blogs'>Blogs</Route>
            <Route element={ <Blog/>      } path='/Blog/:id'>Blogs</Route>
          </Route>
        </Routes>
      <FooterNav />
    </>
  )
}

export default App
