import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

function Navbar() {
  const handleNavItemClick = () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    if (navbarToggler && navbarCollapse.classList.contains('show')) {
      navbarToggler.click(); // Programmatically clicks the toggler to close the navbar
    }
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top">
        <Link to="/">
          <img className="navbar-brand ml-4 logo" src="\img\final_logo-removebg-preview.png" alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active mx-2">
              <Link className="nav-link" to="/" onClick={handleNavItemClick}>Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/about" onClick={handleNavItemClick}>About</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/farming" onClick={handleNavItemClick}>Farming</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/intership" onClick={handleNavItemClick}>Internship</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/services" onClick={handleNavItemClick}>Services</Link>
            </li>
          </ul>
          <div className="d-flex justify-content-center mt-2 mt-lg-1 mr-2">
            <Link to="/contact">
              <button
                type="button"
                className="btn btn-primary px-4 py-2 mx-2 w-60 rounded shadow-sm"
                style={{
                  backgroundColor: "#007bff",
                  border: "none",
                  fontSize: "0.9rem",
                  fontWeight: "bold",
                  transition: "background-color 0.3s ease",
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#007bff")}
                aria-pressed="false"
                onClick={handleNavItemClick} >
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
