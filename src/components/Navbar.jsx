import { useState } from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'
import logoPucara from '../assets/logo-pucara.png'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <div className="logo-icon">
            <img src={logoPucara} alt="Logo Escuela Pucará" />
          </div>

          <div className="logo-text">
            <span className="logo-title">Escuela Pucará</span>
            <span className="logo-subtitle">Lenguaje y comunicación</span>
          </div>
        </Link>

        <button
          type="button"
          className={`navbar-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={closeMenu}>
            Inicio
          </Link>

          <div className="navbar-dropdown">
            <Link
              to="/nosotros"
              className="navbar-dropdown-button"
              onClick={closeMenu}
            >
              Nosotros
              <span>▾</span>
            </Link>

            <div className="navbar-dropdown-menu">
              <Link to="/nosotros" onClick={closeMenu}>
                Nuestro proyecto educativo
              </Link>

              <a
                href="/documentos/reglamento-interno-2026.pdf"
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
              >
                Reglamento Interno
              </a>

              <a
                href="/documentos/reglamento-orden-higiene.pdf"
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
              >
                Reglamento de Orden e Higiene
              </a>
            </div>
          </div>

          <Link to="/especialidades" onClick={closeMenu}>
            Especialidades
          </Link>

          <Link to="/cursos" onClick={closeMenu}>
            Cursos
          </Link>

          <Link to="/modalidad-trabajo" onClick={closeMenu}>
            Modalidad
          </Link>

          <Link to="/actividades" onClick={closeMenu}>
            Actividades
          </Link>

          <Link to="/contacto" onClick={closeMenu}>
            Contacto
          </Link>

          <Link
            to="/contactanos"
            className="navbar-button navbar-button-mobile"
            onClick={closeMenu}
          >
            Contáctanos
          </Link>
        </nav>

        <Link
          to="/contactanos"
          className="navbar-button navbar-button-desktop"
        >
          Contáctanos
        </Link>
      </div>
    </header>
  )
}

export default Navbar