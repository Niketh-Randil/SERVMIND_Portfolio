import React from "react";
import "../Css/Our_Services.css";
// import puk from "../assets/puk.jpg";
import pic1 from "../assets/Group (1).png"
import pic2 from "../assets/Group (2).png"
import pic3 from "../assets/Group (3).png"
import pic4 from "../assets/Group.png"

const developmentApproachData = [
  {
    title: "UX Design",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    icon: { pic1 },
  },
  {
    title: "WebFlow Development",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    icon: { pic2 },
  },
  {
    title: "Marketing",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    icon: { pic3 },
  },
  {
    title: "Branding",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    icon: { pic4 },
  },
];

const ServiceCard = ({ icon, title, description }) => (
  <div className="service-card">
    <div className="service-card-content">
      <div className="service-icon">
        <img src={icon.puk} alt={`${title} icon`} />
      </div>
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
      <h1 className="services-title">Our Services</h1>
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
