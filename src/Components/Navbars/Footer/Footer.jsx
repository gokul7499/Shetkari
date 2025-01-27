import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios for API requests
import './Footer.css'; // Import the CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast from react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import react-toastify CSS

const Footer = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [email, setEmail] = useState(''); // State to store email input

  // Function to get the current visitor count from the API
  const getVisitorCount = async () => {
    try {
      const response = await axios.get('https://website-backend-royal.onrender.com/api/visitor');
      setVisitorCount(response.data.visitorCount); // Assuming the API response is in the form { visitorCount: number }
    } catch (error) {
      console.error('Error fetching visitor count:', error);
    }
  };

  // Function to increment the visitor count via API
  const incrementVisitorCount = async () => {
    try {
      const response = await axios.post('https://website-backend-royal.onrender.com/api/visitor/count');
      setVisitorCount(response.data.visitorCount); // Update visitor count with the new value
    } catch (error) {
      console.error('Error incrementing visitor count:', error);
    }
  };

  useEffect(() => {
    getVisitorCount(); // Fetch the current visitor count when the component mounts
    incrementVisitorCount(); // Increment the visitor count on page load
  }, []);

  // Email validation function using a simple regex
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  // Function to handle subscription form submission
  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (email.trim() === '') {
      toast.error('Please enter your email');
      return;
    }

    if (!validateEmail(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    try {
      // Make a POST request to the subscription API
      await axios.post('http://192.168.81.191:3000/api/subscribe', { email });
      toast.success('Email subscribed successfully!');
      setEmail(''); // Clear the email input field after success
    } catch (error) {
      console.error('Error subscribing email:', error);
      toast.error('Failed to subscribe. Please try again.');
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section logo-section">
          <img src={`${process.env.PUBLIC_URL}/img/final_logo-removebg-preview.png`} alt="Royal Shetkari IT Company Logo" className="footer-logo" />
          <p className='text-light'>Your trusted partner in technology.</p>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul>
            <li>Email: info@royalshetkari.com</li>
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
        
        <div className="footer-section visitor-count">
          <h4>Visitor Count</h4>
          <p className="text-light">{visitorCount} visitors</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p className='text-light'>&copy; {new Date().getFullYear()} Royal Shetkari IT Company. All rights reserved.</p>
      </div>

      <ToastContainer /> {/* Add ToastContainer for displaying notifications */}
    </footer>
  );
};

export default Footer;