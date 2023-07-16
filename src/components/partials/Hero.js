import React from 'react'
import solDeMayo from '../../images/sol-de-mayo.png'

const Hero = () => {
  return (
    <section className="hero is-medium is-info is-relative is-flex is-flex-direction-row is-justify-content-space-around is-align-items-center px-5">
      <div>
        <p className="title">
          Música típica y folklórica, 24 horas al día, todo el año.
        </p>
        <p className="subtitle">
          65 años - AM 580
        </p>
      </div>

      <img className="p-4 mr-6" src={solDeMayo} alt="Sol de Mayo" width="400" height="400" />
    </section>
  )
}

export default Hero;
