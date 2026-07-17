import './Contacto.css'

function Contacto() {
  return (
    <main className="contact-page">

      <section className="contact-hero">
        <div className="contact-hero-content">
          <span className="contact-badge">
            Estamos para ayudarte
          </span>

          <h1>
            Conversemos sobre
            <span> el futuro de tu hijo</span>
          </h1>

          <p>
            Estamos disponibles para resolver tus dudas sobre nuestra escuela,
            niveles educativos, especialidades y proceso de admisión.
          </p>
        </div>

        <div className="contact-decoration">
          <div className="contact-bubble bubble-phone">📞</div>
          <div className="contact-bubble bubble-message">💬</div>
          <div className="contact-bubble bubble-location">📍</div>
        </div>
      </section>

      <section className="contact-info-section">
        <div className="contact-container">

          <div className="contact-heading">
            <span>Información de contacto</span>

            <h2>
              Siempre cerca de
              <strong> nuestras familias</strong>
            </h2>
          </div>

          <div className="contact-cards">

            <article className="contact-card contact-yellow">
              <div className="contact-card-icon">📍</div>

              <h3>Dirección</h3>

              <p>
                Visítanos en nuestra escuela ubicada en la comuna de Alto Hospicio.
              </p>

              <span className="contact-card-detail">
                México 4212
              </span>

              <span className="contact-card-detail">
                Alto Hospicio, Región de Tarapacá
              </span>

              <a
                href="https://maps.app.goo.gl/Scqmk7LyFpMbie576"
                target="_blank"
                rel="noreferrer"
              >
                Ver ubicación en Google Maps →
              </a>
            </article>

            <article className="contact-card contact-purple">
              <div className="contact-card-icon">📞</div>

              <h3>Teléfono</h3>

              <p>
                Comunícate directamente con nuestra escuela para consultas,
                matrículas e información general.
              </p>

              <a href="tel:+56572492389">
                (57) 249 2389
              </a>
            </article>

            <article className="contact-card contact-green">
              <div className="contact-card-icon">✉️</div>

              <h3>Correo electrónico</h3>

              <p>
                Escríbenos y nuestro equipo responderá tus consultas.
              </p>

              <a href="mailto:directora.pucara@gmail.com">
                directora.pucara@gmail.com
              </a>
            </article>

            <article className="contact-card contact-red">
              <div className="contact-card-icon">🕒</div>

              <h3>Horario de atención</h3>

              <p>
                Nuestro equipo está disponible para atender a las familias.
            </p>

            <span className="contact-card-detail">
              Lunes a viernes
            </span>

            <span className="contact-card-detail">
              08:00 a 18:00 hrs.
            </span>
          </article>

        </div>
        </div>
      </section>

      <section className="contact-admission">
        <div className="contact-admission-content">

        <div className="admission-icon">
          💛
        </div>

        <div className="admission-text">
        <span>Consultas y matrículas</span>

        <h2>
          Estamos disponibles para orientar a tu familia
        </h2>

        <p>
          Para consultas sobre matrículas, niveles educativos
          o funcionamiento de la escuela, puedes comunicarte
          directamente con nosotros.
        </p>
      </div>

      <div className="admission-actions">
        <a
          href="tel:+56572492389"
          className="admission-button admission-phone"
        >
          📞 Llamar a la escuela
        </a>

        <a
          href="mailto:directora.pucara@gmail.com"
          className="admission-button admission-email"
        >
          ✉️ Enviar correo
        </a>
    </div>

  </div>
</section>

      <section className="contact-map-section">
        <div className="contact-container">

          <div className="contact-map-heading">
            <span>Encuéntranos</span>

            <h2>Visita nuestra escuela</h2>

            <p>
              Estamos ubicados en México 4212, Alto Hospicio.
              Presiona el mapa para abrir nuestra ubicación.
            </p> 
          <div className="contact-social">
            <div>
              <span>Síguenos en redes sociales</span>

              <h3>
                Conoce más sobre nuestra comunidad educativa
              </h3>
            </div>

            <a
              href="https://www.facebook.com/profile.php?id=100042580735371"
              target="_blank"
              rel="noreferrer"
              className="facebook-button"
            >
              Facebook de Escuela Pucará
            </a>
          </div>
          </div>

          <a
            href="https://maps.app.goo.gl/Scqmk7LyFpMbie576"
            target="_blank"
            rel="noreferrer"
            className="contact-map-placeholder"
          >
            <span>📍</span>

          <h3>Escuela de Lenguaje Pucará</h3>

          <p>
            México 4212, Alto Hospicio, Región de Tarapacá
          </p>

          <strong>
            Abrir ubicación en Google Maps →
          </strong>
          </a>

        </div>
      </section>

    </main>
  )
}

export default Contacto