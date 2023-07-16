import React from 'react'
import solDeMayo from '../../images/sol-de-mayo.png'

const Hero = () => {
  const years = new Date().getFullYear() - 1958;

  return (
    <section className="hero is-medium is-info">
      <div className="container is-flex is-flex-direction-row is-align-items-center">
        <div className="p-4">
          <p className="title">
            Música típica y folklórica, 24 horas al día, todo el año.
          </p>
          <p className="subtitle">
            {years} años - AM 580
          </p>
        </div>

        <img className="p-4" src={solDeMayo} alt="Sol de Mayo" width="400" height="400" />
      </div>
    </section>
  )
}

export default Hero;
