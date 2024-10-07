


import React from 'react';
import './Farming.css';

function Farming() {
  return (
    <div>
      <div className='farming-empowering text-center py-5'>
        <h3 className="display-5  mt-5">Empowering Farming</h3>
        <p className="Contact-Royal highlight">Royal Shetkari IT Company</p>

      </div>

      

      <div className='container'>
        <p className='farming-purpose text-center mt-4'>
          Our purpose is to transform the agricultural sector by providing innovative digital solutions that
          empower farmers to enhance productivity while promoting sustainable practices. We aim to
          connect farmers with essential resources and support, ensuring they have access to valuable
          information and organic products. Additionally, we are dedicated to fostering the next
          generation of professionals by offering technology-related internships that provide students
          with practical experience and skills relevant to their future careers.
        </p>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4 col-sm-6 col-12 mb-4">
            <div className="card h-100">
              <img src="/farming/IMG-2.jpg" className="card-img-top img-fluid" alt="Arable Farming" style={{ objectFit: 'cover', height: '200px' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Arable Farming</h5>
                <p className="card-text">This is a brief description of the card content. It can span multiple lines and provide more details.</p>
                <a href=".com" className="btn btn-primary mt-auto">Go somewhere</a>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 col-12 mb-4">
            <div className="card h-100">
              <img src="/farming/IMG-3.jpg" className="card-img-top img-fluid" alt="Traditional Farming" style={{ objectFit: 'cover', height: '200px' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Traditional Farming</h5>
                <p className="card-text">This is a brief description of the card content. It can span multiple lines and provide more details.</p>
                <a href=".com" className="btn btn-primary mt-auto">Go somewhere</a>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 col-12 mb-4">
            <div className="card h-100">
              <img src="/farming/IMG-1.jpg" className="card-img-top img-fluid" alt="Organic Farming" style={{ objectFit: 'cover', height: '200px' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Organic Farming</h5>
                <p className="card-text">This is a brief description of the card content. It can span multiple lines and provide more details.</p>
                <a href=".com" className="btn btn-primary mt-auto">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 col-sm-6 col-12 mb-4">
            <div className="card h-100">
              <img src="/farming/IMG-4.jpg" className="card-img-top img-fluid" alt="Arable Farming" style={{ objectFit: 'cover', height: '200px' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Arable Farming</h5>
                <p className="card-text">This is a brief description of the card content. It can span multiple lines and provide more details.</p>
                <a href=".com" className="btn btn-primary mt-auto">Go somewhere</a>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 col-12 mb-4">
            <div className="card h-100">
              <img src="/farming/IMG-5.jpg" className="card-img-top img-fluid" alt="Traditional Farming" style={{ objectFit: 'cover', height: '200px' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Traditional Farming</h5>
                <p className="card-text">This is a brief description of the card content. It can span multiple lines and provide more details.</p>
                <a href=".com" className="btn btn-primary mt-auto">Go somewhere</a>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 col-12 mb-4">
            <div className="card h-100">
              <img src="/farming/IMG-4.jpg" className="card-img-top img-fluid" alt="Organic Farming" style={{ objectFit: 'cover', height: '200px' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Organic Farming</h5>
                <p className="card-text">This is a brief description of the card content. It can span multiple lines and provide more details.</p>
                <a href=".com" className="btn btn-primary mt-auto">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Farming;
