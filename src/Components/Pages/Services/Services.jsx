import React from 'react';
import './Services.css';

function Services() {
  const img1 = process.env.PUBLIC_URL + '/services/img1.jpg';
  const img2 = process.env.PUBLIC_URL + '/services/img2.jpg';
  const img3 = process.env.PUBLIC_URL + '/services/img3.jpg';
  const img4 = process.env.PUBLIC_URL + '/services/img4.jpg';
  const img5 = process.env.PUBLIC_URL + '/services/img5.jpg';
  const img6 = process.env.PUBLIC_URL + '/services/img6.jpg';
  const img7 = process.env.PUBLIC_URL + '/services/img7.jpg';

  return (
    <div className="services-container">
      <h1 className="services-mt">Services</h1>
      <section className="services-section">
        <h2 className='Our-Services'>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <img src={img1} alt="Web Development" />
            <h3>Web Development</h3>
            <p>Creating responsive, high-performing websites for your business needs...</p>
          </div>
          <div className="service-card">
            <img src={img2} alt="Mobile App Development" />
            <h3>Mobile App Development</h3>
            <p>Mobile app development is a dynamic process focused on creating apps...</p>
          </div>
          <div className="service-card">
            <img src={img3} alt="Digital Marketing" />
            <h3>Digital Marketing</h3>
            <p>Boosting your brand's presence with targeted digital strategies...</p>
          </div>
        </div>
      </section>
      <section className="services-section">
        <div className="services-grid">
          <div className="service-card">
            <img src={img4} alt="IT Services" />
            <h3>IT Services</h3>
            <p>Innovative digital solutions to enhance agricultural productivity...</p>
          </div>
          <div className="service-card">
            <img src={img5} alt="Organic Products" />
            <h3>Organic Products</h3>
            <p>A range of organic fertilizers and crops available for purchase...</p>
          </div>
          <div className="service-card">
            <img src={img6} alt="Soil Health Management" />
            <h3>Soil Health Management</h3>
            <p>Soil health is the foundation of sustainable agriculture...</p>
          </div>
          <div className="service-card">
            <img src={img7} alt="Internship Opportunities" />
            <h3>Internship Opportunities</h3>
            <p>Practical technology-focused internships for students...</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
