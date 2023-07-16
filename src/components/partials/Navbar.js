import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar py-5" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="#">
          <h1 className="title">RADIO CLARIN</h1>
        </a>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a href="#radio-container" className="navbar-item">
            La Radio
          </a>
          <a href="#schedule-container" className="navbar-item">
            Programación
          </a>
          <a className="navbar-item">
            Gardel
          </a>
          <a className="navbar-item">
            Contacto
          </a>
        </div>

        <div className="navbar-end mr-4">
          <audio controls preload="preload" type="audio/mpeg" style={{ border: '10px solid #3e8ed0', borderRadius: '50px'}}>
            <source src="http://streaming.radioclarin.com:8000/clarin.mp3" />
          </audio>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
