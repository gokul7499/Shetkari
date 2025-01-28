import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ContactFormTable = () => {
  const [contactForms, setContactForms] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API
    axios.get('https://website-backend-royal.onrender.com/api/contact-forms')
      .then((response) => {
        setContactForms(response.data);
      })
      .catch((error) => {
        console.error('Error fetching contact form data:', error);
      });
  }, []); // Empty array means this runs once when the component mounts

  return (
    <div>
      <h1>Contact Form Submissions</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Submitted At</th>
          </tr>
        </thead>
        <tbody>
          {contactForms.map((form) => (
            <tr key={form._id}>
              <td>{form.name}</td>
              <td>{form.email}</td>
              <td>{form.message}</td>
              <td>{new Date(form.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactFormTable;
