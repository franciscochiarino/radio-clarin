import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar p-5" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a href="https://radioclarin.com" className="navbar-item">
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
          <Link to="/" className="navbar-item">
            Inicio
          </Link>
          <Link to="/" className="navbar-item">
            La Radio
          </Link>
          <Link to="/" className="navbar-item">
            Programación
          </Link>
          <Link to="/gardel" className="navbar-item">
            Gardel
          </Link>
          <Link to="/" className="navbar-item">
            Contacto
          </Link>
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
