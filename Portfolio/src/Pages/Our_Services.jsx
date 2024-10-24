import React from "react";
import "../Css/Our_Services.css";
import puk from "../assets/puk.jpg";

const developmentApproachData = [
  {
    title: "UX Design",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    //icon: { puk },
  },
  {
    title: "WebFlow Development",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    //icon: { puk },
  },
  {
    title: "Marketing",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    //icon: { puk },
  },
  {
    title: "Branding",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    //icon: { puk },
  },
];

const ServiceCard = ({ icon, title, description }) => (
  <div className="service-card">
    <div className="service-card-content">
      <div className="service-icon">{icon}</div>
      <div className="text-content">
        <h3 className="service-title">{title}</h3>
        <p className="service-description">{description}</p>
      </div>
    </div>
  </div>
);

function OurServices() {
  return (
    <div className="services-container">
      <h1 className="title services-title">Our Services</h1>
      <div className="services-wrapper">
        <div className="services-grid">
          {developmentApproachData.map((item, index) => (
            <ServiceCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurServices;
