import './Hero.css'
import heroImage from '../assets/hero.png'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-container">

        <div className="hero-content">

          <span className="hero-badge">
            💛 Escuela especializada en Trastorno del Lenguaje
          </span>

          <h1>
            Desarrollamos el lenguaje,
          <span> fortalecemos la comunicación</span>
          </h1>

          <p className="hero-description">
            Acompañamos a niños y niñas de 3 a 5 años que presentan
            Trastorno del Lenguaje, mediante un trabajo especializado,
            cercano e integral, orientado al desarrollo del lenguaje oral,
            la comunicación y sus habilidades sociales.
          </p>

          <div className="hero-buttons">
            <Link
              to="/nosotros"
              className="hero-button-primary"
            >
              Conoce nuestra escuela
            </Link>

            <Link to="/contactanos" className="hero-button-secondary">
              Solicitar información
            </Link>
          </div>

          <div className="hero-features">
            <span>✓ Apoyo Fonoaudilógico</span>
            <span>✓ Desarrollo del lenguaje oral</span>
          </div>

        </div>

        <div className="hero-image">
          <div className="hero-image-card">
            <img
              src={heroImage}
              alt="Castillo de la Escuela Pucará y elementos de comunicación"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero