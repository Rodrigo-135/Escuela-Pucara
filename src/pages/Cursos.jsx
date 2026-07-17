import './Cursos.css'

const cursos = [
  {
    age: '3 años a 3 años 11 meses',
    number: '03',
    title: 'Nivel Medio Mayor',
    description:
      'Primer nivel de atención para niños y niñas que requieren apoyo especializado en el desarrollo del lenguaje oral y la comunicación.',
    objectives: [
      'Estimulación inicial del lenguaje oral',
      'Desarrollo de autonomía y rutinas',
      'Primeras habilidades comunicativas y sociales',
    ],
    className: 'course-yellow',
  },
  {
    age: '4 años a 4 años 11 meses',
    number: '04',
    title: 'Primer Nivel de Transición',
    description:
      'Nivel orientado a fortalecer la comprensión, expresión verbal, participación y habilidades necesarias para avanzar en su proceso educativo.',
    objectives: [
      'Comprensión y expresión del lenguaje',
      'Participación en experiencias pedagógicas',
      'Fortalecimiento de habilidades sociales',
    ],
    className: 'course-purple',
  },
  {
    age: '5 años a 5 años 11 meses',
    number: '05',
    title: 'Segundo Nivel de Transición',
    description:
      'Nivel que acompaña la consolidación de habilidades comunicativas, pedagógicas y sociales para favorecer la continuidad educativa.',
    objectives: [
      'Comunicación oral más autónoma',
      'Preparación para nuevos aprendizajes',
      'Desarrollo de seguridad y participación',
    ],
    className: 'course-green',
  },
]

function Cursos() {
  return (
    <main className="courses-page">
      <section className="courses-hero">
        <div className="courses-hero-content">
          <span className="courses-badge">
            Nuestros niveles educativos
          </span>

          <h1>
            Niveles educativos para
          <span> cada etapa del lenguaje</span>
          </h1>

          <p>
            Atendemos a niños y niñas de 3 a 5 años 11 meses que presentan
            Trastorno del Lenguaje, entregando apoyo pedagógico y fonoaudiológico
            según su nivel educativo y necesidades comunicativas.
          </p>
        </div>

        <div className="courses-hero-decoration">
          <div className="course-age-bubble bubble-one">
            3
          </div>

          <div className="course-age-bubble bubble-two">
            4
          </div>

          <div className="course-age-bubble bubble-three">
            5
          </div>
        </div>
      </section>

      <section className="courses-section">
        <div className="courses-container">
          <div className="courses-heading">
            <span>Nuestros cursos</span>

            <h2>
              Organización por niveles
              <strong> según edad y desarrollo</strong>
            </h2>

            <p>
              Cada curso considera experiencias pedagógicas y apoyos específicos
              orientados al desarrollo del lenguaje, la autonomía, la participación
              y la preparación para nuevos aprendizajes.
            </p>
          </div>

          <div className="courses-grid">
            {cursos.map((curso) => (
              <article
                className={`course-card ${curso.className}`}
                key={curso.title}
              >
                <div className="course-card-top">
                  <span className="course-age">
                    {curso.age}
                  </span>

                  <span className="course-number">
                    {curso.number}
                  </span>
                </div>

                <h3>{curso.title}</h3>

                <p className="course-description">
                  {curso.description}
                </p>

                <div className="course-divider"></div>

                <div className="course-objectives">
                  <span>En este nivel trabajamos:</span>

                  <ul>
                    {curso.objectives.map((objective) => (
                      <li key={objective}>
                        <span>✓</span>
                        {objective}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="courses-message">
        <div className="courses-message-content">
          <span className="courses-message-icon">
            💛
          </span>

          <div>
            <span className="courses-message-label">
              Aprender respetando cada proceso
            </span>

            <h2>
              Cada avance en el lenguaje
              fortalece la confianza para aprender
            </h2>

            <p>
              Nuestro acompañamiento busca que cada niño y niña desarrolle
              sus habilidades comunicativas en un ambiente seguro, cercano
              y respetuoso de su ritmo de aprendizaje.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Cursos