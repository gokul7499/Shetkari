import React from 'react';
import './Farming.css';
import { useTranslation } from 'react-i18next';

function Farming() {
  const { t } = useTranslation();

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
              <img
                src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ-bMX7gAVJ4TiG9oiyhFJyr7e_MBidFbh1kEjL51zz8gURXzxu"
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

          {/* Card 2: Traditional Farming */}
          <div className="col-md-4 col-sm-6 col-12 mb-4">
            <div className="card h-100">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D12AQHlX3iXR7EtQw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1713770411971?e=2147483647&v=beta&t=wFTWpevgJgNsTQ75QyGDDdB-SXqPjnWS-NQpihyQ-Sw"
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

          {/* Card 3: Organic Farming */}
          <div className="col-md-4 col-sm-6 col-12 mb-4">
            <div className="card h-100">
              <img
                src="https://img.freepik.com/premium-photo/person-planting-beautiful-field-crops_1054941-40467.jpg"
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

        {/* Additional Cards Row */}
        <div className="row">
          {/* Duplicate Cards for Additional Content */}
          <div className="col-md-4 col-sm-6 col-12 mb-4">
            <div className="card h-100">
              <img
                src="https://img.freepik.com/premium-photo/isometric-image-smartphone-lot-elements-agribusiness_58460-32476.jpg"
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
                src="https://img.freepik.com/premium-vector/realtime-tracking-machinery-equipment-used-crop-management-allowing-efficient_216520-182879.jpg"
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
                src="https://img.freepik.com/premium-photo/agricultural-technology-photos_1252102-49126.jpg?w=360"
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
