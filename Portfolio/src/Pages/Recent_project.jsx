import React from "react";
import "../Css/Recent_project.css";
import puk from "../assets/recent project.png"; // Adjust the path as necessary

const recentProjectData = [
  {
    title: "Marketing",
    description:
      "Our marketing services are data-driven, ensuring that the strategy aligns with your target audience to maximize conversions and brand awareness.",
    icon: puk,
    featured: true,
  },
  {
    title: "Branding",
    description:
      "We focus on building a strong brand identity that resonates with your audience, ensuring that every element reflects your company’s values and mission.",
    icon: puk,
    featured: true,
  },
];


const ProjectItem = ({ icon, title, description, featured, isEven }) => (
    <article className={`project-item ${featured ? "featured-project" : ""} ${isEven ? "even-project" : ""}`}>
      <img src={icon} alt={`${title} icon`} className="project-icon" aria-hidden="true" />
      <div className="project-details">
        {featured && <span className={`featured-label ${isEven ? "even-label" : ""}`}>Featured Project</span>}
        <h3 className={`project-title ${isEven ? "even-title" : ""}`}>{title}</h3>
        <p className={`project-description ${isEven ? "even-description" : ""}`}>{description}</p>
      </div>
    </article>
  );
  

function RecentProjects() {
  return (
    <section className="recent-projects-container">
      <h1 className="recent-projects-title">Recent Projects</h1>
      <div className="recent-projects-grid">
        {recentProjectData.map((item, index) => (
          <ProjectItem
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
            featured={item.featured}
            isEven={index % 2 === 1} // Identify even items
          />
        ))}
      </div>
    </section>
  );
}

export default RecentProjects;
