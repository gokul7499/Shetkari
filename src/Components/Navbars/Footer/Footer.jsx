import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios for API requests
import './Footer.css'; // Import the CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  // Function to get the current visitor count from the API
  const getVisitorCount = async () => {
    try {
      const response = await axios.get('http://192.168.221.191:3000/api/visitor');
      setVisitorCount(response.data.visitorCount); // Assuming the API response is in the form { visitorCount: number }
    } catch (error) {
      console.error('Error fetching visitor count:', error);
    }
  };

  // Function to increment the visitor count via API
  const incrementVisitorCount = async () => {
    try {
      const response = await axios.post('http://192.168.221.191:3000/api/visitor/count');
      setVisitorCount(response.data.visitorCount); // Update visitor count with the new value
    } catch (error) {
      console.error('Error incrementing visitor count:', error);
    }
  };

  useEffect(() => {
    getVisitorCount(); // Fetch the current visitor count when the component mounts
    incrementVisitorCount(); // Increment the visitor count on page load
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section logo-section">
          <img src="/img/final_logo-removebg-preview.png" alt="Royal Shetkari IT Company Logo" className="footer-logo" />
          <p className='text-light'>Your trusted partner in technology.</p>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul>
            <li>Email: mailto:info@royalshetkari.com</li>
            <li>Phone: +91 12345 67890</li>
            <li>Address: Sangamner, Maharashtra, India</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-media">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Subscribe to our Newsletter</h4>
          <form className="subscribe-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        
        <div className="footer-section visitor-count">
          <h4>Visitor Count</h4>
          <p className="text-light">{visitorCount} visitors</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p className='text-light'>&copy; {new Date().getFullYear()} Royal Shetkari IT Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
