// src/Home/Home.js
import React from 'react';
import './Home.css';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from '../About/About';
import Farming from '../Farming/Farming';
import Internship from '../Internship/Internship';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
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
                <h1>{t('homepage.welcome')}</h1>
                <p className='text-danger'>{t('homepage.innovating')}</p>
                <button className="carousel-button">{t('homepage.learn_more')}</button>
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
                <h1>{t('homepage.empowering')}</h1>
                <p className='text-warning'>{t('homepage.web_dev')}</p>
                <button className="carousel-button">{t('homepage.get_started')}</button>
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
                <h1>{t('homepage.grow_business')}</h1>
                <p className='text-info'>{t('homepage.trusted_partner')}</p>
                <button className="carousel-button">{t('homepage.contact_us')}</button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <About />
      <Internship />
      <Farming />
      <Services />
      <Contact />
    </>
  );
};

export default Home;
