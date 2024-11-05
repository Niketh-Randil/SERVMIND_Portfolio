import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import '../Css/Aboutus.css';
import pp from '../assets/pp.png';

const AboutUs = () => {
  const [startCounting, setStartCounting] = useState(false);
  const aboutUsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.disconnect(); // Stop observing once counting has started
        }
      },
      { threshold: 0.5 } // Adjust the threshold to determine when to start counting
    );

    if (aboutUsRef.current) {
      observer.observe(aboutUsRef.current);
    }

    return () => {
      if (aboutUsRef.current) {
        observer.unobserve(aboutUsRef.current);
      }
    };
  }, []);

  return (
    <div className="about-us-container" ref={aboutUsRef}>
      <h2 className="about-us-title">About Us</h2>
      <div className="about-us-content">
        <div className="about-us-image">
          <img src={pp} alt="Team working" />
        </div>
        <div className="about-us-text">
          <h3>Who is responsible for all of this impressive effort?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. 
            Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          </p>
          <div className="about-us-stats">
            <div className="stat-box">
              <h4>
                {startCounting ? <CountUp start={0} end={100} duration={6} /> : '0'}+
              </h4>
              <p>Project completed</p>
            </div>
            <div className="stat-box">
              <h4>
                {startCounting ? <CountUp start={0} end={98} duration={6} suffix="%" /> : '0%'}
              </h4>
              <p>Client satisfied</p>
            </div>
            <div className="stat-box">
              <h4>
                {startCounting ? <CountUp start={0} end={80} duration={6} suffix="%" /> : '0%'}
              </h4>
              <p>Design Project</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
