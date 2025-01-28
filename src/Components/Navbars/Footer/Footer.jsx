import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Footer.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const backendURL = 'https://website-backend-royal.onrender.com/api'; // Backend API URL

  // Record and fetch visitor count
  const updateVisitorCount = async () => {
    try {
      const response = await axios.get(`${backendURL}/count`);
      setVisitorCount(response.data.totalVisitors || 0);
    } catch (error) {
      console.error('Error updating visitor count:', error);
      toast.error('Failed to update visitor count.');
    }
  };

  // Fetch visitor count on component mount
  useEffect(() => {
    updateVisitorCount();
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section visitor-count">
          <h4>Visitor Count</h4>
          <p>{visitorCount} visitors</p>
        </div>
      </div>
      <ToastContainer />
    </footer>
  );
};

export default Footer;
