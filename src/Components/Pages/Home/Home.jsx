import React from 'react';
import './Home.css';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div className="homepage-container">
      <Carousel className="carousel-container" interval={3000} fade>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="/img/people-with-laptops-office.jpg" 
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="caption-content">
              <h1>Welcome to Royal Shetkari IT Company</h1>
              <p className='text-danger'>Innovating your business with cutting-edge technology solutions.</p>
              <button className="carousel-button">Learn More</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="/img/people-with-laptops-office.jpg" 
            alt="Second slide"
          />
          <Carousel.Caption>
            <div className="caption-content">
              <h1>Empowering Your Digital Transformation</h1>
              <p className='text-warning'>We provide web development, mobile apps, and digital marketing.</p>
              <button className="carousel-button">Get Started</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="/img/modern-equipped-computer-lab.jpg" 
            alt="Third slide"
          />
          <Carousel.Caption>
            <div className="caption-content">
              <h1>Grow Your Business with Royal Shetkari</h1>
              <p className='text-info'>Your trusted partner in IT solutions and services.</p>
              <button className="carousel-button">Contact Us</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
