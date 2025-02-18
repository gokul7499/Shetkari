import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css"; // Your custom styling

function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleNavItemClick = () => {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    if (navbarToggler && navbarCollapse.classList.contains("show")) {
      navbarToggler.click(); // Collapse the navbar
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top">
        <Link to="/">
          <img
            className="navbar-brand ml-4 logo"
            src={`${process.env.PUBLIC_URL}/img/final_logo-removebg-preview.png`} // Corrected path
            alt="Logo"
          />
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active mx-2">
              <Link className="nav-link" to="/" onClick={handleNavItemClick}>
                {t("navbar.home")}
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link
                className="nav-link"
                to="/about"
                onClick={handleNavItemClick}
              >
                {t("navbar.about")}
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link
                className="nav-link"
                to="/internship"
                onClick={handleNavItemClick}
              >
                {t("navbar.internship")}
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link
                className="nav-link"
                to="/farming"
                onClick={handleNavItemClick}
              >
                {t("navbar.farming")}
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link
                className="nav-link"
                to="/services"
                onClick={handleNavItemClick}
              >
                {t("navbar.services")}
              </Link>
            </li>
          </ul>

          <div className="d-flex justify-content-center mt-2 mt-lg-1 mr-2">
            <Link to="/contact">
              <button
                type="button"
                className="btn btn-primary px-4 py-2 mx-2 w-60 rounded shadow-sm amd"
                onClick={handleNavItemClick}
              >
                {t("navbar.contact")}
              </button>
            </Link>
          </div>

          <div className="language-switcher ml-3">
            <button
              onClick={() => changeLanguage("en")}
              className="btn btn-outline-primary mr-2"
            >
              EN
            </button>
            <button
              onClick={() => changeLanguage("hi")}
              className="btn btn-outline-primary mr-2"
            >
              HI
            </button>
            <button
              onClick={() => changeLanguage("mr")}
              className="btn btn-outline-primary"
            >
              MR
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
