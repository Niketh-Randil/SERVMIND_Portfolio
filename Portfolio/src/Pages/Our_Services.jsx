import React from "react";
import "../Css/Our_Services.css";
import pic1 from "../assets/mobiledev.png";
import pic2 from "../assets/Group (2).png";
import pic3 from "../assets/Group (3).png";
import pic4 from "../assets/Group.png";
import fill137 from "../assets/Fill 137.png";
import fill235 from "../assets/Fill 235.png";
import semi from "../assets/semi.png";
import fill133 from "../assets/Fill 133.png";

const developmentApproachData = [
  {
    title: "UX Design",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    image: pic1,
  },
  {
    title: "WebFlow Development",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    image: pic2,
  },
  {
    title: "Marketing",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    image: pic3,
  },
  {
    title: "Branding",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    image: pic4,
  },
];

const ServiceCard = ({ title, description, image }) => (
  <div className="service-card">
    <div className="service-card-content">
      <div className="service-icon">
        <img src={image} alt={`${title} icon`} />
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
        <img src={fill137} alt="Decorative shape" className="bg-fill-137" />
        <img src={fill235} alt="Decorative shape" className="bg-fill-235" />
        <img src={semi} alt="Decorative shape" className="bg-semi" />
        <img src={fill133} alt="Decorative shape" className="bg-fill-133" />

        <div className="services-grid">
          {developmentApproachData.map((item, index) => (
            <ServiceCard
              key={index}
              image={item.image}
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
