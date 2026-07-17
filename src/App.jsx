import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Nosotros from './pages/Nosotros'
import Especialidades from './pages/Especialidades'
import Cursos from './pages/Cursos'
import Contacto from './pages/Contacto'
import Contactanos from './pages/Contactanos'
import Modalidad from './pages/Modalidad'
import Actividades from './pages/Actividades'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route
          path="/especialidades"
          element={<Especialidades />}
        />
        <Route
          path="/cursos"
          element={<Cursos />}
        />

        <Route
          path="/modalidad-trabajo"
          element={<Modalidad />}
        />

        <Route
          path="/actividades"
          element={<Actividades />}
        />

        <Route
          path="/contacto"
          element={<Contacto />}
        />

        <Route
          path="/contactanos"
          element={<Contactanos />}
        />

      </Routes>
      <Footer />
    </>
  )
}

export default App