import React from 'react'
import gardel from '../../images/gardel.jpg'

const Intro = () => {
  return (
    <div className="section is-flex is-justify-content-space-around is-flex-direction-row mx-6">
      <section className="is-flex-shrink-4 mr-6" style={{ maxWidth: '700px' }}>
        <div className="container">
          <h1 className="title">
            Carlos Gardel
          </h1>
          <p className="subtitle mt-1">
            Carlos Gardel fue uno de los intérpretes más notables de la canción rioplatense y latino-americana. En su
            repertorio prevalecieron tangos, milongas y valses del Río de la Plata pero también, gracias a sus vivencias
            en
            Europa y EEUU, hubo en dicho repertorio un lugar para los ritmos de moda de entonces, fox-trot, pasodoble,
            shimmy y otros.

            <a href="#" className="has-text-info">Seguir leyendo</a>
          </p>
          <figure className="image">
            <img src={gardel} />
          </figure>
        </div>
      </section>

      <section>
        <div className="container">
          <h1 className="title">
            Poesía Oriental
          </h1>
          <p className="subtitle mt-1">
            Los versos insertados en la emisión son de:
          </p>
        </div>

        <div>
          <figure className="image">
            <img src="https://bulma.io/images/placeholders/128x128.png" width="109" height="153" />
          </figure>
        </div>
      </section>
    </div>
  )
}

export default Intro
