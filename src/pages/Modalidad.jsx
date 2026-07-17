import './Modalidad.css'

const modalidades = [
  {
    icon: '📚',
    title: 'Plan General',
    description:
      'Trabajamos el área pedagógica según el nivel educativo de cada niño o niña, favoreciendo aprendizajes propios de Educación Parvularia.',
    color: 'modality-yellow',
  },
  {
    icon: '💬',
    title: 'Plan Específico de Lenguaje',
    description:
      'Intervenimos las dificultades del lenguaje de forma personalizada, considerando las necesidades comunicativas individuales de cada estudiante.',
    color: 'modality-purple',
  },
  {
    icon: '🧑‍⚕️',
    title: 'Atención fonoaudiológica',
    description:
      'Acompañamos el desarrollo del lenguaje oral mediante sesiones especializadas orientadas a fortalecer la comunicación.',
    color: 'modality-green',
  },
  {
    icon: '📋',
    title: 'Evaluación y seguimiento',
    description:
      'Realizamos seguimiento del progreso pedagógico y fonoaudiológico para orientar los apoyos necesarios durante el año escolar.',
    color: 'modality-red',
  },
]

const pasos = [
  {
    number: '01',
    title: 'Evaluamos',
    text: 'Identificamos las necesidades comunicativas y pedagógicas de cada niño o niña.',
  },
  {
    number: '02',
    title: 'Planificamos',
    text: 'Organizamos apoyos según nivel, edad y características del Trastorno del Lenguaje.',
  },
  {
    number: '03',
    title: 'Intervenimos',
    text: 'Trabajamos mediante experiencias pedagógicas y fonoaudiológicas significativas.',
  },
  {
    number: '04',
    title: 'Acompañamos',
    text: 'Orientamos el avance de cada estudiante junto a su familia y equipo educativo.',
  },
]

function Modalidad() {
  return (
    <main className="modality-page">
      <section className="modality-hero">
        <div className="modality-hero-content">
          <span className="modality-badge">
            Nuestra forma de trabajo
          </span>

          <h1>
            Acompañamiento pedagógico
            <span> y fonoaudiológico</span>
          </h1>

          <p>
            Nuestra modalidad de trabajo integra experiencias educativas,
            apoyo especializado en lenguaje y seguimiento permanente,
            con el objetivo de favorecer el desarrollo comunicativo,
            social y pedagógico de cada niño y niña.
          </p>
        </div>

        <div className="modality-decoration">
          <div className="modality-bubble bubble-a">💬</div>
          <div className="modality-bubble bubble-b">📚</div>
          <div className="modality-bubble bubble-c">🌱</div>
        </div>
      </section>

      <section className="modality-section">
        <div className="modality-container">
          <div className="modality-heading">
            <span>Modalidad educativa</span>

            <h2>
              Un trabajo coordinado para
              <strong> fortalecer el lenguaje</strong>
            </h2>

            <p>
              La intervención se desarrolla mediante un Plan General,
              orientado al aprendizaje pedagógico, y un Plan Específico,
              enfocado en superar las dificultades del lenguaje.
            </p>
          </div>

          <div className="modality-grid">
            {modalidades.map((item) => (
              <article
                className={`modality-card ${item.color}`}
                key={item.title}
              >
                <div className="modality-icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="modality-container">
          <div className="process-heading">
            <span>Proceso de acompañamiento</span>

            <h2>
              Cada avance se construye
              <strong> paso a paso</strong>
            </h2>
          </div>

          <div className="process-grid">
            {pasos.map((paso) => (
              <article className="process-card" key={paso.number}>
                <span className="process-number">
                  {paso.number}
                </span>

                <h3>{paso.title}</h3>

                <p>{paso.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="modality-message">
        <div className="modality-message-content">
          <span>💛 Trabajo colaborativo</span>

          <h2>
            Familia, escuela y especialistas trabajando por el desarrollo del lenguaje
          </h2>

          <p>
            Creemos que el acompañamiento de las familias es fundamental
            para fortalecer los avances comunicativos de los niños y niñas,
            tanto en la escuela como en el hogar.
          </p>
        </div>
      </section>
    </main>
  )
}

export default Modalidad