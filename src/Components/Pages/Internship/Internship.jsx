import React, { useState, useEffect } from 'react';
import './Internship.css';
import "@fontsource/poppins"; 

function Internship() {
  const handleEnrollNow = () => {
    alert("Enroll Now clicked!");
  };

  const handleHowItWorks = () => {
    alert("How It Works clicked!");
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Real Experience',
      content: 'Work remotely with one of 13,000 companies looking for ambitious talent like you.',
    },
    {
      title: 'Coaching & Support',
      content: 'You will be supported by a team of expert coaches to guide you towards career success.',
    },
    {
      title: 'Award-Winning Courses',
      content: 'Complement your internship with access to courses to build the skills that will set you apart.',
    },
    {
      title: 'Tailored Internship',
      content: 'Tell us what matters most to you, and we will match you with the right internship.',
    }
  ];

  // Automatic slide change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="Give mt-5">
            Give Yourself an <br />
            <span className="highlight">Unbeatable<br /> Advantage</span>
          </h1>
          <p className="platform">
            The only platform that guarantees real-world work experience across the globe.
          </p>
          <div className="buttons">
            <button className="enroll-btn" onClick={handleEnrollNow}>Enroll Now</button>
            <button className="how-btn" onClick={handleHowItWorks}>How It Works</button>
          </div>
        </div>
        <div className="image-container">
          <img src="https://www.virtualinternships.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/03/inturn-header.png.webp" alt="Person smiling" />
        </div>
      </div>

      <div className="career-section">
        <div className="background-shapes">
          <div className="shape shape-left"></div>
          <div className="shape shape-right"></div>
        </div>
        <div className="career-content">
          <h2 className="Internship-h2">The Reality of Starting Your Career</h2>
          <p style={{ fontSize: '14px', fontFamily: "cursive" }}>
            The need for work experience is essential, but getting a job can be tough. You need experience, but to gain experience, you need a job. 
            Internships are competitive, with 80% of employers considering it a critical factor for recent graduates. So, what do you do?
          </p>
        </div>
      </div>

      <div className="slider-container">
        <h2 style={{ fontWeight: 'bold', fontSize: '45px', color: 'white' }}>The Answer? <span className="highlight">Virtual Internships</span></h2>
        <p style={{ color: 'white' }}>Find global work experience in any field or region with Virtual Internships, the No. 1 platform for remote internships.</p>

        <div className="slider">
          <button className="prev-btn" onClick={prevSlide}>❮</button>
          <div className="slide" key={currentSlide}>
            <h3 style={{ color: 'skyblue', fontWeight: 'bold' }}>{slides[currentSlide].title}</h3>
            <p style={{ color: "white" }}>{slides[currentSlide].content}</p>
          </div>
          <button className="next-btn" onClick={nextSlide}>❯</button>
        </div>

        <div className="dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>

      <div className="launch-career-container">
        <h2 className="title">
          Launch <span className="highlight">Your Career</span>
        </h2>
        <p className="subtitle">
          With Virtual Internships, you’ll gain valuable skills and knowledge from top companies
          worldwide, all from the comfort of your own home. Your Virtual Internship is like an extended interview, with major growth and learning outcomes and the potential for further opportunities upon completion.
        </p>
        <div className="stats-container">
          <div className="stat-box">
            <h3 className="stat-number purple">250k+</h3>
            <p className="stat-title">Global Internships</p>
            <p className="stat-subtitle">Available Now and Growing</p>
          </div>
          <div className="stat-box">
            <h3 className="stat-number teal">80+</h3>
            <p className="stat-title">Countries</p>
            <p className="stat-subtitle">Internships Available Worldwide</p>
          </div>
          <div className="stat-box">
            <h3 className="stat-number red">2</h3>
            <p className="stat-title">One to One</p>
            <p className="stat-subtitle">Professional Career Coaching Calls</p>
          </div>
          <div className="stat-box">
            <h3 className="stat-number yellow">1 in 4</h3>
            <p className="stat-title">Interns</p>
            <p className="stat-subtitle">
              Offered Further Opportunities Immediately Upon Completion
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Internship;
