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
  const { t } = useTranslation(); // Hook for translations

  return (
    <>
      {/* Homepage Carousel */}
      <div className="homepage-container">
        <Carousel className="carousel-container" interval={3000} fade>
          {/* Slide 1 */}
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src="/img/people-with-laptops-office.jpg"
              alt={t('homepage.slides.first_alt')}
            />
            <Carousel.Caption>
              <div className="caption-content">
                <h1>{t('homepage.welcome')}</h1>
                <p className="text-danger">{t('homepage.innovating')}</p>
                <button className="carousel-button">{t('homepage.learn_more')}</button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Slide 2 */}
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src="/img/people-with-laptops-office.jpg"
              alt={t('homepage.slides.second_alt')}
            />
            <Carousel.Caption>
              <div className="caption-content">
                <h1>{t('homepage.empowering')}</h1>
                <p className="text-warning">{t('homepage.web_dev')}</p>
                <button className="carousel-button">{t('homepage.get_started')}</button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Slide 3 */}
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src="/img/modern-equipped-computer-lab.jpg"
              alt={t('homepage.slides.third_alt')}
            />
            <Carousel.Caption>
              <div className="caption-content">
                <h1>{t('homepage.grow_business')}</h1>
                <p className="text-info">{t('homepage.trusted_partner')}</p>
                <button className="carousel-button">{t('homepage.contact_us')}</button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Other Page Components */}
      <About />
      <Internship />
      <Farming />
      <Services />
      <Contact />
    </>
  );
};

export default Home;
