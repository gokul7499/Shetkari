import React from 'react';
import './Farming.css';
import { useTranslation } from 'react-i18next';

function Farming() {
  const { t } = useTranslation();

  return (
    <div>
      <div className='farming-empowering text-center py-5'>
        <h3 className="display-5 mt-5">{t('farming.title')}</h3>
        <p className="Contact-Royal highlight">{t('farming.company')}</p>
      
      </div>

      <div className='container'>
        <p className='farming-purpose text-center mt-4'>
          {t('farming.purpose')}
        </p>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4 col-sm-6 col-12 mb-4">
            <div className="card h-100">
              <img src="/farming/IMG-2.jpg" className="card-img-top img-fluid" alt="Arable Farming" style={{ objectFit: 'cover', height: '200px' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{t('farming.card_titles.arable_farming')}</h5>
                <p className="card-text">{t('farming.card_descriptions.arable_farming_desc')}</p>
                <a href=".com" className="btn btn-primary mt-auto">{t('farming.go_somewhere')}</a>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 col-12 mb-4">
            <div className="card h-100">
              <img src="/farming/IMG-3.jpg" className="card-img-top img-fluid" alt="Traditional Farming" style={{ objectFit: 'cover', height: '200px' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{t('farming.card_titles.traditional_farming')}</h5>
                <p className="card-text">{t('farming.card_descriptions.traditional_farming_desc')}</p>
                <a href=".com" className="btn btn-primary mt-auto">{t('farming.go_somewhere')}</a>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 col-12 mb-4">
            <div className="card h-100">
              <img src="/farming/IMG-1.jpg" className="card-img-top img-fluid" alt="Organic Farming" style={{ objectFit: 'cover', height: '200px' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{t('farming.card_titles.organic_farming')}</h5>
                <p className="card-text">{t('farming.card_descriptions.organic_farming_desc')}</p>
                <a href=".com" className="btn btn-primary mt-auto">{t('farming.go_somewhere')}</a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 col-sm-6 col-12 mb-4">
            <div className="card h-100">
              <img src="/farming/IMG-4.jpg" className="card-img-top img-fluid" alt="Arable Farming" style={{ objectFit: 'cover', height: '200px' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{t('farming.card_titles.arable_farming')}</h5>
                <p className="card-text">{t('farming.card_descriptions.arable_farming_desc')}</p>
                <a href=".com" className="btn btn-primary mt-auto">{t('farming.go_somewhere')}</a>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 col-12 mb-4">
            <div className="card h-100">
              <img src="/farming/IMG-5.jpg" className="card-img-top img-fluid" alt="Traditional Farming" style={{ objectFit: 'cover', height: '200px' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{t('farming.card_titles.traditional_farming')}</h5>
                <p className="card-text">{t('farming.card_descriptions.traditional_farming_desc')}</p>
                <a href=".com" className="btn btn-primary mt-auto">{t('farming.go_somewhere')}</a>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 col-12 mb-4">
            <div className="card h-100">
              <img src="/farming/IMG-4.jpg" className="card-img-top img-fluid" alt="Organic Farming" style={{ objectFit: 'cover', height: '200px' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{t('farming.card_titles.organic_farming')}</h5>
                <p className="card-text">{t('farming.card_descriptions.organic_farming_desc')}</p>
                <a href=".com" className="btn btn-primary mt-auto">{t('farming.go_somewhere')}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Farming;
