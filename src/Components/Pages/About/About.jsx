import React from 'react';
import './About.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

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
      <section className="landing-page">
        <div className="content-wrapper">
          <div className="text-section">
            <h1>{t('about.discover')}</h1>
            <p style={{ color: 'white' }}>{t('about.description')}</p>
            <div className="buttons">
              <button className="primary-btn">{t('about.watch_video')}</button>
              <button className="secondary-btn">{t('about.view_fact_sheet')}</button>
            </div>
          </div>
          <div className="image-section">
            <img src="https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="People sitting on stairs" />
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <h2>{t('about.welcome')}</h2>
          <div className="about-content">
            <div className="about-text">
              <p dangerouslySetInnerHTML={{ __html: t('about.about_us_intro') }} />
              <p>{t('about.mission')}</p>
            </div>
            <div className="about-image">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQarT_H55fqgawVv_y8SRv4xxP7423TUEG8AA&s" alt="About us" />
            </div>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <h3>{t('about.our_services')}</h3>
          <Slider {...settings}>
            <div className="service-item">
              <h4>{t('about.service_1')}</h4>
              <p>{t('about.service_1_desc')}</p>
            </div>
            <div className="service-item">
              <h4>{t('about.service_2')}</h4>
              <p>{t('about.service_2_desc')}</p>
            </div>
            <div className="service-item">
              <h4>{t('about.service_3')}</h4>
              <p>{t('about.service_3_desc')}</p>
            </div>
            <div className="service-item">
              <h4>{t('about.service_4')}</h4>
              <p>{t('about.service_4_desc')}</p>
            </div>
            <div className="service-item">
              <h4>{t('about.service_5')}</h4>
              <p>{t('about.service_5_desc')}</p>
            </div>
          </Slider>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <h3>{t('about.our_values')}</h3>
          <ul className="values-list">
            <li className="value-item">
              <h4>{t('about.value_innovation')}</h4>
              <p>{t('about.value_innovation_desc')}</p>
            </li>
            <li className="value-item">
              <h4>{t('about.value_integrity')}</h4>
              <p>{t('about.value_integrity_desc')}</p>
            </li>
            <li className="value-item">
              <h4>{t('about.value_customer_centricity')}</h4>
              <p>{t('about.value_customer_centricity_desc')}</p>
            </li>
            <li className="value-item">
              <h4>{t('about.value_collaboration')}</h4>
              <p>{t('about.value_collaboration_desc')}</p>
            </li>
            <li className="value-item">
              <h4>{t('about.value_excellence')}</h4>
              <p>{t('about.value_excellence_desc')}</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
