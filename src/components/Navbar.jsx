// Importing the required modules here

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

// On the place of NavLink we can also use on the place of Link
// as NavLink

export default function Navbar(props) {
  return (

    // Getting the Data passed here with the help of props
    // {props.title} and {props.aboutUs} both of these are used here with the help of props

    // Adding more logic in order to make the navbar dark
    <nav className={`navbar navbar-expand-lg bg-body-tertiary m-2 rounded-3 border border-${props.mode === 'light' ? 'primary' : 'light'}`} data-bs-theme={`${props.mode}`} style = {{transition : "0.5s"}}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"> {props.title} </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/"> {props.homeVal} </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about"> {props.aboutUs} </Link>
              </li>
            </ul>
            <div className="form-check form-switch mx-4">
              <input className="form-check-input" type="checkbox" role="switch" onClick = {props.toggleMode} id="flexSwitchCheckDefault"/>
              <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault"> {props.describe} Dark Mode </label>
            </div>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
    </nav>
  )
}

// Using the Proptypes here in order to set their data
Navbar.prototype = {
    title : PropTypes.string.isRequired,
    homeVal : PropTypes.string.isRequired,
    aboutUs : PropTypes.string.isRequired
}

// Setting up the default props values in order to get the error regarding particular values fixed automatically
Navbar.defaultProps = {
    title : "textEditor",
    homeVal : "gotoHome",
    aboutUs : "About Us"
}