import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css"; // Custom styles here

function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleNavItemClick = () => {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");
    
    if (navbarToggler && navbarCollapse.classList.contains("show")) {
      navbarToggler.click(); // Close menu on item click (mobile only)
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
      <div className="container-fluid px-3 px-sm-4">
        {/* Brand/Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={`${process.env.PUBLIC_URL}/img/final_logo-removebg-preview.png`}
            alt="Logo"
            className="logo me-2"
            style={{ height: "50px", objectFit: "contain" }}
          />
        </Link>

        {/* Mobile Toggle Button */}
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

        {/* Navbar Content */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Navigation Links - centered on desktop */}
          <ul className="navbar-nav mx-auto text-center">
            <li className="nav-item mx-1 mx-lg-2">
              <Link className="nav-link" to="/" onClick={handleNavItemClick}>
                {t("navbar.home")}
              </Link>
            </li>
            <li className="nav-item mx-1 mx-lg-2">
              <Link className="nav-link" to="/about" onClick={handleNavItemClick}>
                {t("navbar.about")}
              </Link>
            </li>
            <li className="nav-item mx-1 mx-lg-2">
              <Link className="nav-link" to="/internship" onClick={handleNavItemClick}>
                {t("navbar.internship")}
              </Link>
            </li>
            <li className="nav-item mx-1 mx-lg-2">
              <Link className="nav-link" to="/crops" onClick={handleNavItemClick}>
                Crops
              </Link>
            </li>
            <li className="nav-item mx-1 mx-lg-2">
              <Link className="nav-link" to="/farming" onClick={handleNavItemClick}>
                {t("navbar.farming")}
              </Link>
            </li>
            <li className="nav-item mx-1 mx-lg-2">
              <Link className="nav-link" to="/services" onClick={handleNavItemClick}>
                {t("navbar.services")}
              </Link>
            </li>
          </ul>

          {/* Right-side elements (Contact + Language) */}
          <div className="d-flex flex-column flex-lg-row align-items-center gap-2 ms-lg-3 mt-3 mt-lg-0">
            {/* Contact Button - full width on mobile, auto on desktop */}
            <Link to="/contact" className="w-100 w-lg-auto">
              <button
                type="button"
                className="btn btn-primary px-3 px-lg-4 py-2 w-100"
                onClick={handleNavItemClick}
              >
                {t("navbar.contact")}
              </button>
            </Link>

            {/* Language Selector */}
            <div className="btn-group mt-2 mt-lg-0" role="group">
              <button
                onClick={() => changeLanguage("en")}
                className={`btn btn-outline-primary btn-sm ${i18n.language === "en" ? "active" : ""}`}
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage("hi")}
                className={`btn btn-outline-primary btn-sm ${i18n.language === "hi" ? "active" : ""}`}
              >
                HI
              </button>
              <button
                onClick={() => changeLanguage("mr")}
                className={`btn btn-outline-primary btn-sm ${i18n.language === "mr" ? "active" : ""}`}
              >
                MR
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;