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
            src="data:image/jpeg;base64,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"
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
         <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
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
                className="btn btn-primary px-4 py-2 mx-2 w-60 rounded shadow-sm"
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
