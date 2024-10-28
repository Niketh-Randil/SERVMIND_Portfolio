import React, { useState } from 'react';
import '../Css/FeedbackComponent.css'; // Import the CSS file
import Avatar from "../assets/Avatar.png";

const FeedbackComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const feedbackData = [
    {
      text: "Airfolio has been instrumental in showcasing my design portfolio. Their UI/UX design services are top-notch and their Webflow development has taken my website to the next level.",
      user: {
        name: "John Doe",
        title: "Graphic Designer, ABC Company",
        image: Avatar,
      },
    },
    {
      text: "Airfolio has been instrumental in showcasing my design portfolio. Their UI/UX design services are top-notch and their Webflow development has taken my website to the next level.",
      user: {
        name: "John Doe",
        title: "Graphic Designer, ABC Company",
        image: "https://via.placeholder.com/50",
      },
    },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? feedbackData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === feedbackData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="container">
      <div className="title">User Feedback</div>
      <div className="wrapper">
      <div className="slanted-background">
        <div className="carousel-wrapper">
          <div className="feedback-container">
            <button className="navigation-button" onClick={handlePrevious}>&lt;</button>
            <div className="feedback-content">
              <div className="star-rating">⭐⭐⭐⭐⭐</div>
              <p className="feedback-text">{feedbackData[currentIndex].text}</p>
              <div className="user-profile">
                <div className="user-image">
                  <img src={feedbackData[currentIndex].user.image} alt="User" />
                </div>
                <div className="user-info">
                  <span className="user-name">{feedbackData[currentIndex].user.name}</span>
                  <span className="user-title">{feedbackData[currentIndex].user.title}</span>
                </div>
              </div>
            </div>
            <button className="navigation-button" onClick={handleNext}>&gt;</button>
          </div>
          <div className="pagination-dots">
            {feedbackData.map((_, index) => (
              <span
                key={index}
                className={`dot ${currentIndex === index ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default FeedbackComponent;
