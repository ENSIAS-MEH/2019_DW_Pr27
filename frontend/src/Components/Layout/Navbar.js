import React from 'react';
import logo from './logo1.png'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light blue lighten-3">
      <a className="navbar-brand ml-5" href="#">
        <img src={logo} alt="logo" style={{ width: '300px' }} />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span>
          <i className="fas fa-bars" style={{ color: '#fff' }} />
        </span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto">
        <li className="nav-item active">
            <Link className="nav-a text-white text-uppercase ml-5" to="/firstpage">
              ACCEUIL
              <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-a text-white text-uppercase ml-5" to="/species">
              ESPECES&nbsp;
              <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <a
              className="nav-a text-white text-uppercase ml-5"
              to="/contacts"
            >
              À PROPOS
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-light  my-2 my-sm-0"
            type="submit"
          >
            RECHERCHE
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
