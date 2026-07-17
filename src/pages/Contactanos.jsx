import { useState } from 'react'
import './Contactanos.css'

function Contactanos() {
  const [enviado, setEnviado] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()

    setEnviado(true)
  }

  return (
    <main className="form-page">

      <section className="form-section">

        <div className="form-intro">
          <span className="form-badge">
            Escríbenos
          </span>

          <h1>
            Estamos aquí para
            <span> escucharte</span>
          </h1>

          <p>
            Completa el formulario y cuéntanos cómo podemos ayudarte.
            Nuestro equipo se pondrá en contacto contigo.
          </p>

          <div className="form-benefits">
            <span>✓ Consultas sobre matrícula</span>
            <span>✓ Información de nuestros niveles</span>
            <span>✓ Orientación para familias</span>
          </div>
        </div>

        <div className="form-card">

          {enviado ? (
            <div className="form-success">
              <span>💛</span>

              <h2>¡Mensaje recibido!</h2>

              <p>
                Gracias por comunicarte con la Escuela Pucará.
                Pronto nuestro equipo se pondrá en contacto contigo.
              </p>

              <button
                type="button"
                onClick={() => setEnviado(false)}
              >
                Enviar otra consulta
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>

              <div className="form-group">
                <label htmlFor="nombre">
                  Nombre y apellido
                </label>

                <input
                  type="text"
                  id="nombre"
                  placeholder="Escribe tu nombre"
                  required
                />
              </div>

              <div className="form-row">

                <div className="form-group">
                  <label htmlFor="telefono">
                    Teléfono
                  </label>

                  <input
                    type="tel"
                    id="telefono"
                    placeholder="+56 9..."
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="correo">
                    Correo electrónico
                  </label>

                  <input
                    type="email"
                    id="correo"
                    placeholder="correo@ejemplo.cl"
                    required
                  />
                </div>

              </div>

              <div className="form-group">
                <label htmlFor="motivo">
                  Motivo de la consulta
                </label>

                <select id="motivo" required>
                  <option value="">
                    Selecciona una opción
                  </option>

                  <option value="matricula">
                    Matrícula
                  </option>

                  <option value="cursos">
                    Información sobre cursos
                  </option>

                  <option value="especialidades">
                    Especialidades
                  </option>

                  <option value="otro">
                    Otra consulta
                  </option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="mensaje">
                  Mensaje
                </label>

                <textarea
                  id="mensaje"
                  rows="6"
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="form-submit"
              >
                Enviar mensaje
              </button>

            </form>
          )}

        </div>

      </section>

    </main>
  )
}

export default Contactanos