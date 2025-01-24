import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Navbar from './Components/Navbars/Navbar';
import About from './Components/Pages/About/About';
import Contact from './Components/Pages/Contact/Contact';
import Services from './Components/Pages/Services/Services';
import Farming from './Components/Pages/Farming/Farming';
import Internship from './Components/Pages/Internship/Internship';
import Footer from './Components/Navbars/Footer/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Components/i18n/i18n';

// Scroll to Top Component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page whenever the route changes
  }, [pathname]);

  return null; // This component has no visible UI
};

// Main App Component
const App = () => {
  return (
    <Router>
      {/* Navbar */}
      <Navbar />

      {/* Scroll to Top */}
      <ScrollToTop />

      {/* Page Content */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/farming" element={<Farming />} />
          <Route path="/internship" element={<Internship />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </Router>
  );
};

export default App;
