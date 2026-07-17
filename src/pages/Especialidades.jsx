import './Especialidades.css'

const especialidades = [
  {
    icon: '🧑‍⚕️',
    title: 'Evaluación fonoaudiológica',
    description:
      'Realizamos evaluaciones para identificar las necesidades comunicativas de cada niño o niña y orientar su proceso de apoyo especializado.',
    className: 'specialty-yellow',
  },
  {
    icon: '💬',
    title: 'Plan específico de lenguaje',
    description:
      'Trabajamos las dificultades del lenguaje de forma personalizada, considerando las necesidades individuales de cada estudiante.',
    className: 'specialty-purple',
  },
  {
    icon: '🗣️',
    title: 'Desarrollo del lenguaje oral',
    description:
      'Fortalecemos la comprensión, expresión, vocabulario, articulación y uso funcional del lenguaje en contextos cotidianos.',
    className: 'specialty-red',
  },
  {
    icon: '📚',
    title: 'Apoyo pedagógico especializado',
    description:
      'Complementamos el trabajo de lenguaje con experiencias pedagógicas propias de Educación Parvularia, favoreciendo el aprendizaje integral.',
    className: 'specialty-green',
  },
  {
    icon: '👨‍👩‍👧',
    title: 'Orientación a familias',
    description:
      'Acompañamos a madres, padres y apoderados con información y orientación para apoyar el desarrollo comunicativo desde el hogar.',
    className: 'specialty-blue',
  },
]

function Especialidades() {
  return (
    <main className="specialties-page">
      <section className="specialties-hero">
        <div className="specialties-hero-content">
          <span className="specialties-badge">
            Nuestro acompañamiento
          </span>

          <h1>
            Apoyo especializado para
            <span> desarrollar el lenguaje</span>
          </h1>

          <p>
            Acompañamos a niños y niñas con Trastorno del Lenguaje
            mediante un trabajo pedagógico y fonoaudiológico cercano,
            respetuoso y adaptado a sus necesidades comunicativas.
          </p>
        </div>

        <div className="specialties-decoration">
          <div className="decoration-circle decoration-yellow">
            🗣️
          </div>

          <div className="decoration-circle decoration-purple">
            💬
          </div>

          <div className="decoration-circle decoration-green">
            💚
          </div>
        </div>
      </section>

      <section className="specialties-list">
        <div className="specialties-container">
          <div className="specialties-heading">
            <span>Áreas de trabajo</span>

            <h2>
              Intervención enfocada en
              <strong> lenguaje y comunicación</strong>
            </h2>
          </div>

          <div className="specialties-grid">
            {especialidades.map((especialidad) => (
              <article
                className={`specialty-card ${especialidad.className}`}
                key={especialidad.title}
              >
                <div className="specialty-icon">
                  {especialidad.icon}
                </div>

                <h3>{especialidad.title}</h3>

                <p>{especialidad.description}</p>

                <div className="specialty-line"></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="specialties-message">
        <div className="specialties-message-content">
          <span>💛 Cada proceso es diferente</span>

          <h2>
            Intervención enfocada en
            <strong> lenguaje y comunicación</strong>
          </h2>

          <p>
            Nuestro objetivo es brindar un espacio donde cada niño
            se sienta seguro, comprendido y acompañado durante su
            desarrollo comunicativo, social y emocional.
          </p>
        </div>
      </section>
    </main>
  )
}

export default Especialidades