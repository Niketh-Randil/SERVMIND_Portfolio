import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import '../Css/Approach.css';
import fill137 from "../assets/Fill 137.png";
import fill235 from "../assets/Fill 235.png";
import semi from "../assets/semi.png";
import fill133 from "../assets/Fill 133.png";

const developmentApproachData = [
  {
    title: 'UX Driven Engineering',
    description: 'Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.',
    icon: '🖌️',
  },
  {
    title: 'Developing Shared Understanding',
    description: 'Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.',
    icon: '💻',
  },
  {
    title: 'Quality Assurance & Testing',
    description: 'Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.',
    icon: '🔍',
  },
  {
    title: 'Proven Experience and Expertise',
    description: 'Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.',
    icon: '✅',
  },
  {
    title: 'Code Reviews',
    description: 'Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.',
    icon: '📝',
  },
  {
    title: 'Continuous Learning',
    description: 'Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.',
    icon: '📚',
  },
];

const randomDirection = () => {
  const directions = ['left', 'right', 'up', 'down'];
  return directions[Math.floor(Math.random() * directions.length)];
};

const Card = ({ icon, title, description, delay, isVisible }) => {
  const direction = randomDirection();
  
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
      y: direction === 'up' ? -100 : direction === 'down' ? 100 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { delay, duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      className="card"
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={variants}
    >
      <div className="card-content">
        <div className="icon">{icon}</div>
        <div className="text-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

function Approach() {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index'), 10);
            if (!visibleCards.has(index)) {
              setTimeout(() => {
                setVisibleCards((prevVisibleCards) => new Set([...prevVisibleCards, index]));
                observer.unobserve(entry.target);
              }, index * 0.3 * 1000); // 0.3-second interval for each card
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    cardRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="approach-container">
      <h1 className="title approach-title">Development Approach</h1>

      {/* Floating Background Images */}
     
      <img src={fill235} alt="Decorative shape" className="bg-fill-235" />
      <img src={semi} alt="Decorative shape" className="bg-semi" />
      <img src={fill133} alt="Decorative shape" className="bg-fill-133" />

      <div className="full-card">
        <div className="card-container">
          <div className="grid">
            {developmentApproachData.map((item, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                data-index={index}
              >
                <Card
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  delay={index * 0.3}
                  isVisible={visibleCards.has(index)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Approach;
