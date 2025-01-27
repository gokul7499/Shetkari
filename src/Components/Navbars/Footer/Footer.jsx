import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Footer.css'; // CSS styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [email, setEmail] = useState(''); // State for email input

  // Fetch visitor count from the API
  const fetchVisitorCount = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/visitor/count'); // Replace with actual backend URL
      setVisitorCount(response.data.visitorCount); // Update the visitor count in state
    } catch (error) {
      console.error('Error fetching visitor count:', error);
    }
  };

  // Increment visitor count when the user visits the site
  const incrementVisitorCount = async () => {
    try {
      await axios.post('http://localhost:3000/api/visitor'); // Replace with your backend POST API URL
      fetchVisitorCount(); // Refresh visitor count after increment
    } catch (error) {
      console.error('Error incrementing visitor count:', error);
    }
  };

  useEffect(() => {
    incrementVisitorCount(); // Increment visitor count when the page loads
  }, []);

  // Email validation function
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  // Subscription handler
  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (email.trim() === '') {
      toast.error('Please enter your email.');
      return;
    }

    if (!validateEmail(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    try {
      await axios.post('http://localhost:3000/api/subscribe', { email }); // Replace with backend subscription endpoint
      toast.success('You have successfully subscribed!');
      setEmail(''); // Reset email input field
    } catch (error) {
      console.error('Error subscribing email:', error);
      toast.error('Failed to subscribe. Please try again.');
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-section logo-section">
          <img
            src={`${process.env.PUBLIC_URL}/img/final_logo-removebg-preview.png`}
            alt="Royal Shetkari IT Company Logo"
            className="footer-logo"
          />
          <p>Your trusted partner in technology.</p>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul>
            <li>Email: info@royalshetkari.com</li>
            <li>Phone: +91 12345 67890</li>
            <li>Address: Sangamner, Maharashtra, India</li>
          </ul>
        </div>

        {/* Social Media Section */}
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

        {/* Subscription Section */}
        <div className="footer-section">
          <h4>Subscribe to our Newsletter</h4>
          <form className="subscribe-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        {/* Visitor Count Section */}
        <div className="footer-section visitor-count">
          <h4>Visitor Count</h4>
          <p>{visitorCount} visitors</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Royal Shetkari IT Company. All rights reserved.</p>
      </div>

      <ToastContainer /> {/* Notifications container */}
    </footer>
  );
};

export default Footer;
