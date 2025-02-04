import React from 'react';
import './Farming.css';
import { useTranslation } from 'react-i18next';

function Farming() {
  const { t } = useTranslation();

  const videos = {
    video1: `${process.env.PUBLIC_URL}/Farming/farmer.mp4`,
    
  };
  const images = {
    img1: `${process.env.PUBLIC_URL}/Farming/IMG-1.jpg`,
    img2: `${process.env.PUBLIC_URL}/Farming/IMG-2.jpg`,
    img3: `${process.env.PUBLIC_URL}/Farming/IMG-3.jpg`,
    img4: `${process.env.PUBLIC_URL}/Farming/IMG-4.jpg`,
    img5: `${process.env.PUBLIC_URL}/Farming/IMG-5.jpg`,
    
  };
  return (
    <div>
      {/* Empowering Farming Section */}
      <div className="farming-empowering text-center py-5">
        <h3 className="display-5 mt-5">{t('farming.title')}</h3>
        <p className="Contact-Royal highlight">{t('farming.company')}</p>
      </div>

      {/* Purpose Section */}
      <div className="container">
        <p className="farming-purpose text-center mt-4">
          {t('farming.purpose')}
        </p>
      </div>

      {/* Cards Section */}
      <div className="container mt-5">
        <div className="row">
          {/* Card 1: Arable Farming */}
          <div className="col-md-4 col-sm-6 col-12 mb-4">
            <div className="card h-100">
            <video autoPlay loop playsInline controls className="h-75">
  <source src={videos.video1} type="video/mp4" />
  Your browser does not support the video tag.
</video>
  
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{t('farming.card_titles.arable_farming')}</h5>
                <p className="card-text">{t('farming.card_descriptions.arable_farming_desc')}</p>
                <a href="#!" className="btn btn-primary mt-auto">
                  {t('farming.go_somewhere')}
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Traditional Farming */}
          <div className="col-md-4 col-sm-6 col-12 mb-4">
            <div className="card h-100">
              <img
                src={images.img1}
                className="card-img-top img-fluid h-75"
                alt={t('farming.card_titles.traditional_farming')}
                style={{ objectFit: 'cover', height: '200px' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{t('farming.card_titles.traditional_farming')}</h5>
                <p className="card-text">{t('farming.card_descriptions.traditional_farming_desc')}</p>
                <a href="#!" className="btn btn-primary mt-auto">
                  {t('farming.go_somewhere')}
                </a>
              </div>
            </div>
          </div>

          {/* Card 3: Organic Farming */}
          <div className="col-md-4 col-sm-6 col-12 mb-4">
            <div className="card h-100">
              <img
                src={images.img2}
                className="card-img-top img-fluid "
                alt={t('farming.card_titles.organic_farming')}
                style={{ objectFit: 'cover', height: '650px' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{t('farming.card_titles.organic_farming')}</h5>
                <p className="card-text">{t('farming.card_descriptions.organic_farming_desc')}</p>
                <a href="#!" className="btn btn-primary mt-auto">
                  {t('farming.go_somewhere')}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Cards Row */}
        <div className="row">
          {/* Duplicate Cards for Additional Content */}
          <div className="col-md-4 col-sm-6 col-12 mb-4">
            <div className="card h-100">
              <img
                src={images.img3}
                className="card-img-top img-fluid"
                alt={t('farming.card_titles.arable_farming')}
                style={{ objectFit: 'cover', height: '200px' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{t('farming.card_titles.arable_farming')}</h5>
                <p className="card-text">{t('farming.card_descriptions.arable_farming_desc')}</p>
                <a href="#!" className="btn btn-primary mt-auto">
                  {t('farming.go_somewhere')}
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 col-12 mb-4">
            <div className="card h-100">
              <img
                src={images.img4}
                className="card-img-top img-fluid"
                alt={t('farming.card_titles.traditional_farming')}
                style={{ objectFit: 'cover', height: '200px' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{t('farming.card_titles.traditional_farming')}</h5>
                <p className="card-text">{t('farming.card_descriptions.traditional_farming_desc')}</p>
                <a href="#!" className="btn btn-primary mt-auto">
                  {t('farming.go_somewhere')}
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 col-12 mb-4">
            <div className="card h-100">
              <img
                src={images.img5}
                className="card-img-top img-fluid"
                alt={t('farming.card_titles.organic_farming')}
                style={{ objectFit: 'cover', height: '200px' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{t('farming.card_titles.organic_farming')}</h5>
                <p className="card-text">{t('farming.card_descriptions.organic_farming_desc')}</p>
                <a href="#!" className="btn btn-primary mt-auto">
                  {t('farming.go_somewhere')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Farming;
