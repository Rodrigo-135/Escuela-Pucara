import './About.css'

function About() {
  return (
    <section className="about" id="nosotros">
      <div className="about-container">

        <div className="about-heading">
          <span className="about-badge">
            Nuestro proyecto educativo
          </span>

          <h2>
            Una escuela especializada en
            <span> lenguaje y comunicación</span>
          </h2>

          <p>
            La Escuela de Lenguaje Pucará acompaña a niños y niñas
            de la comuna de Alto Hospicio que presentan Necesidades
            Educativas Transitorias asociadas a Trastorno del Lenguaje.
            Nuestro propósito es fortalecer sus habilidades comunicativas,
            pedagógicas y sociales en un ambiente cercano, respetuoso
            e inclusivo.
          </p>
        </div>

        <div className="about-cards">

          <article className="about-card about-card-yellow">
            <div className="about-icon">
              🧑‍⚕️
            </div>

            <h3>Evaluación fonoaudiológica</h3>

            <p>
              Realizamos procesos de evaluación que permiten identificar
              las necesidades comunicativas de cada niño o niña y orientar
              su apoyo especializado.
            </p>

            <a href="/especialidades">
              Conocer más
              <span>→</span>
            </a>
          </article>

          <article className="about-card about-card-purple">
            <div className="about-icon">
              💬
            </div>

            <h3>Plan específico de lenguaje</h3>

            <p>
              Trabajamos las dificultades del lenguaje considerando
              las necesidades individuales de cada estudiante, mediante
              apoyo pedagógico y fonoaudiológico.
            </p>

            <a href="/especialidades">
              Conocer más
              <span>→</span>
            </a>
          </article>

          <article className="about-card about-card-green">
            <div className="about-icon">
              🌱
            </div>

            <h3>Apoyo pedagógico integral</h3>

            <p>
              Favorecemos el desarrollo del lenguaje oral, la autonomía,
              la participación y las habilidades sociales, preparando
              a los niños y niñas para nuevos aprendizajes.
            </p>

            <a href="/cursos">
              Ver niveles
              <span>→</span>
            </a>
          </article>

        </div>

      </div>
    </section>
  )
}

export default About