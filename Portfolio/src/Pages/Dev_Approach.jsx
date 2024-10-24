

import React from 'react';
import '../Css/Approach.css'
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

const Card = ({ icon, title, description }) => (
  <div className="card">
    <div className="icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

function Approach() {
    return (
      <div className="approach-container">
        <h1 className="title">Development Approach</h1>
        <div className="full-card">
        <div className="card-container">
          <div className="grid">
            {developmentApproachData.map((item, index) => (
              <Card key={index} icon={item.icon} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
        </div>
      </div>
    );
  }

export default Approach;
