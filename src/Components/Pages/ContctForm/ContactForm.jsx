import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './contactf.css';
const ContactFormTable = () => {
  const [contactForms, setContactForms] = useState([]);

  // Fetch contact form data from backend API when component mounts
  useEffect(() => {
    axios.get('https://website-backend-royal.onrender.com/api/contact-forms')
      .then((response) => {
        console.log(response.data); // Log the response to verify
        setContactForms(response.data);
      })
      .catch((error) => {
        console.error('Error fetching contact form data:', error);
      });
  }, []);
  // Run once on component mount

  return (
    <div>
      <h1>Contact Form Submissions</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact Number</th>
            <th>Email Address</th>
            <th>City</th>
            <th>District</th>
            <th>Pincode</th>
            <th>Submitted At</th>
          </tr>
        </thead>
        <tbody>
          {contactForms.map((form) => (
            <tr key={form._id}>
              <td>{form.customerName}</td>
              <td>{form.contactNumber}</td>
              <td>{form.emailAddress}</td>
              <td>{form.city}</td>
              <td>{form.dist}</td>
              <td>{form.pincode}</td>
              <td>{new Date(form.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactFormTable;
