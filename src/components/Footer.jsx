import { Link } from 'react-router-dom'

import './Footer.css'
import logoPucara from '../assets/logo-pucara.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src={logoPucara} alt="Logo Escuela de Lenguaje Pucará" />

            <div>
              <h3>Escuela de Lenguaje Pucará</h3>
              <span>Lenguaje y comunicación</span>
            </div>
          </Link>

          <p>
            Acompañamos a niños y niñas de 3 a 5 años en el desarrollo
            del lenguaje oral, la comunicación y sus habilidades sociales,
            mediante un trabajo pedagógico y fonoaudiológico cercano.
          </p>

          <div className="footer-social">
            <a
              href="https://www.facebook.com/profile.php?id=100042580735371"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h4>Enlaces rápidos</h4>

          <nav>
            <Link to="/">Inicio</Link>
            <Link to="/nosotros">Nosotros</Link>
            <Link to="/especialidades">Especialidades</Link>
            <Link to="/cursos">Cursos</Link>
            <Link to="/modalidad-trabajo">Modalidad</Link>
            <Link to="/actividades">Actividades</Link>
          </nav>
        </div>

        <div className="footer-column">
          <h4>Contacto</h4>

          <ul>
            <li>
              <span>📍</span>
              México 4212, Alto Hospicio
            </li>

            <li>
              <span>📞</span>
              <a href="tel:+56572492389">
                (57) 249 2389
              </a>
            </li>

            <li>
              <span>✉️</span>
              <a href="mailto:directora.pucara@gmail.com">
                directora.pucara@gmail.com
              </a>
            </li>

            <li>
              <span>🕒</span>
              Lunes a viernes, 08:00 a 18:00 hrs.
            </li>
          </ul>
        </div>

        <div className="footer-cta">
          <h4>¿Necesitas información?</h4>

          <p>
            Escríbenos para resolver tus dudas sobre cursos,
            matrículas o funcionamiento de la escuela.
          </p>

          <Link to="/contactanos" className="footer-button">
            Solicitar información
          </Link>

          <Link to="/contacto" className="footer-link">
            Ver datos de contacto
          </Link>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Escuela de Lenguaje Pucará. Todos los derechos reservados.
        </p>

        <span>
          Alto Hospicio, Región de Tarapacá
        </span>
      </div>
    </footer>
  )
}

export default Footer