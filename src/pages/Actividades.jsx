import { useState } from 'react'
import './Actividades.css'

const imagenesActividades = import.meta.glob(
  '../assets/actividades/**/*.{jpg,jpeg,png}',
  {
    eager: true,
    import: 'default',
  },
)

const actividades = [
  {
    folder: 'navidad-2025',
    date: '29-12-2025',
    title: 'Fiesta de Navidad',
    category: 'Celebración escolar',
    description:
      'Celebramos una hermosa fiesta de Navidad junto a nuestros niños y niñas, compartiendo regalos, alegría y la especial visita del Viejito Pascuero.',
  },
  {
    folder: 'dia-autismo-2026',
    date: '02-04-2026',
    title: 'Día de la Concienciación sobre el Autismo',
    category: 'Inclusión y diversidad',
    description:
      'Conmemoramos este día promoviendo la inclusión, el respeto, la empatía y la valoración de las distintas formas de aprender, sentir y comunicarse.',
  },
  {
    folder: 'semana-santa-2026',
    date: 'Semana Santa 2026',
    title: 'Semana Santa',
    category: 'Valores y comunidad',
    description:
      'Compartimos una jornada significativa junto a nuestros niños y niñas, fortaleciendo valores como el respeto, la reflexión, la unión y el compartir.',
  },
  {
    folder: 'dia-deporte-2026',
    date: '07-04-2026',
    title: 'Día del Deporte',
    category: 'Movimiento y participación',
    description:
      'Celebramos el Día del Deporte con actividades recreativas que promovieron el movimiento, la participación y el trabajo en equipo.',
  },
  {
    folder: 'dia-libro-2026',
    date: '24-04-2026',
    title: 'Día del Libro',
    category: 'Lenguaje e imaginación',
    description:
      'Vivimos una aventura llena de imaginación, historias y aprendizajes, invitando a nuestros niños y niñas a descubrir el maravilloso mundo de la lectura.',
  },
  {
    folder: 'visita-carabineros-2026',
    date: '30-04-2026',
    title: 'Visita de Carabineros de Chile',
    category: 'Comunidad educativa',
    description:
      'Recibimos la visita de Carabineros de Chile, instancia en que nuestros estudiantes conocieron y valoraron su importante labor al servicio de la comunidad.',
  },
  {
    folder: 'semana-artistica-2026',
    date: '15-05-2026',
    title: 'Semana Artística',
    category: 'Arte y expresión',
    description:
      'Nuestros niños y niñas participaron en una jornada llena de música, canto, creatividad e imaginación, expresándose a través de distintas manifestaciones artísticas.',
  },
  {
    folder: 'mes-del-mar-2026',
    date: '12-06-2026',
    title: 'Inicio del Mes del Mar',
    category: 'Salida educativa',
    description:
      'Dimos inicio al Mes del Mar con una visita educativa al museo de la Universidad Arturo Prat, aprendiendo sobre historia marítima, patrimonio y cultura.',
  },
]

function obtenerFotosActividad(folder) {
  return Object.entries(imagenesActividades)
    .filter(([path]) => path.includes(`/actividades/${folder}/`))
    .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
    .map(([, image]) => image)
}

function Actividades() {
  const [actividadSeleccionada, setActividadSeleccionada] = useState(null)

  return (
    <main className="activities-page">
      <section className="activities-hero">
        <div className="activities-hero-content">
          <span className="activities-badge">
            Vida escolar
          </span>

          <h1>
            Actividades que fortalecen
            <span> lenguaje y participación</span>
          </h1>

          <p>
            En la Escuela de Lenguaje Pucará desarrollamos experiencias
            pedagógicas, recreativas y comunitarias que favorecen la
            comunicación, la autonomía, la creatividad y la participación
            de nuestros niños y niñas.
          </p>
        </div>

        <div className="activities-decoration">
          <div className="activities-bubble bubble-activity-one">📸</div>
          <div className="activities-bubble bubble-activity-two">💬</div>
          <div className="activities-bubble bubble-activity-three">🎨</div>
        </div>
      </section>

      <section className="activities-gallery-section">
        <div className="activities-container">
          <div className="activities-heading">
            <span>Galería de actividades</span>

            <h2>
              Momentos que reflejan
              <strong> nuestra comunidad educativa</strong>
            </h2>

            <p>
              Cada actividad es una oportunidad para aprender, comunicarse,
              compartir y fortalecer el desarrollo integral de los niños y niñas.
            </p>
          </div>

          <div className="activities-grid">
            {actividades.map((actividad) => {
              const fotos = obtenerFotosActividad(actividad.folder)
              const fotoPrincipal = fotos[0]

              return (
                <article
                  className="activity-card"
                  key={actividad.folder}
                  onClick={() =>
                    setActividadSeleccionada({
                      ...actividad,
                      fotos,
                    })
                  }
                >
                  <img
                    src={fotoPrincipal}
                    alt={actividad.title}
                  />

                  <div className="activity-overlay">
                    <span>{actividad.category}</span>

                    <h3>{actividad.title}</h3>

                    <p>{actividad.description}</p>

                    <small>{actividad.date}</small>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {actividadSeleccionada && (
        <div
          className="activity-modal"
          onClick={() => setActividadSeleccionada(null)}
        >
          <div
            className="activity-modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="activity-modal-close"
              onClick={() => setActividadSeleccionada(null)}
            >
              ×
            </button>

            <div className="activity-modal-header">
              <span>{actividadSeleccionada.category}</span>

              <h2>{actividadSeleccionada.title}</h2>

              <p>{actividadSeleccionada.description}</p>

              <small>{actividadSeleccionada.date}</small>
            </div>

            <div className="activity-modal-gallery">
              {actividadSeleccionada.fotos.map((foto, index) => (
                <img
                  src={foto}
                  alt={`${actividadSeleccionada.title} ${index + 1}`}
                  key={foto}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default Actividades