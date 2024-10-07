import React from 'react';
import './About.css'; // Import CSS for styling
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="about-container">
      {/* Landing Section */}
      <section className="landing-page">
        <div className="content-wrapper">
          {/* Left Side: Text Section */}
          <div className="text-section">
            <h1>Discover how the world works with ServiceNow</h1>
            <p style={{color:'white'}}>We bring organizations of every size, in every industry, smarter, faster, and better ways to work.</p>
            <div className="buttons">
              <button className="primary-btn">Watch Video</button>
              <button className="secondary-btn">View Fact Sheet</button>
            </div>
          </div>

          {/* Right Side: Image Section */}
          <div className="image-section">
            <img src="https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="People sitting on stairs" />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-section">
        <div className="container">
          <h2>About Us</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Welcome to <strong>Tech Innovators</strong>, where cutting-edge solutions and IT expertise come together to help businesses scale and achieve digital transformation. We are passionate about delivering innovative solutions that address modern challenges in cloud computing, cybersecurity, and software development.
              </p>
              <p>
                Our mission is to empower companies by providing secure, scalable, and future-proof IT solutions, allowing them to focus on their core business while we handle the complexities of technology.
              </p>
            </div>
            <div className="about-image">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQarT_H55fqgawVv_y8SRv4xxP7423TUEG8AA&s" alt="About us" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h3>Our Services</h3>
          <Slider {...settings}>
            <div className="service-item">
              <h4>Cloud Computing Solutions</h4>
              <p>Empowering businesses with scalable, secure cloud infrastructure.</p>
            </div>
            <div className="service-item">
              <h4>Custom Software Development</h4>
              <p>Building bespoke software solutions tailored to your needs.</p>
            </div>
            <div className="service-item">
              <h4>Cybersecurity Consulting</h4>
              <p>Protecting your business from evolving digital threats.</p>
            </div>
            <div className="service-item">
              <h4>Data Analytics & AI</h4>
              <p>Leveraging data and AI to drive smarter business decisions.</p>
            </div>
            <div className="service-item">
              <h4>IT Infrastructure Management</h4>
              <p>Ensuring reliable, optimized IT operations for seamless growth.</p>
            </div>
          </Slider>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
  <div className="container">
    <h3>Our Values</h3>
    <ul className="values-list">
      <li className="value-item">
        <h4>Innovation</h4>
        <p>We strive to stay ahead by constantly improving and exploring new ideas.</p>
      </li>
      <li className="value-item">
        <h4>Integrity</h4>
        <p>Our actions are guided by transparency and honesty in every step we take.</p>
      </li>
      <li className="value-item">
        <h4>Customer-Centricity</h4>
        <p>Our clients’ success is our success, and we tailor solutions to meet their needs.</p>
      </li>
      <li className="value-item">
        <h4>Collaboration</h4>
        <p>We believe in teamwork and partnerships to achieve the best outcomes.</p>
      </li>
      <li className="value-item">
        <h4>Excellence</h4>
        <p>We consistently deliver high-quality results through our commitment to excellence.</p>
      </li>
    </ul>
  </div>
</section>

    </div>
  );
};

export default About;
