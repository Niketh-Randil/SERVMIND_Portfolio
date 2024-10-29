import React from 'react';
import '../Css/Contact.css';
import sendImage from '../assets/sendimg.png'; // Adjust the path as needed

function ContactUs() {
  return (
    <div className="contact-container">
      <h1>Contact US</h1>
      <div className="contact-form">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63335.79446912694!2d79.82226573736394!3d6.92707887320337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2593e13cbd53f%3A0x7d65df881f2fd5f2!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1669050982428!5m2!1sen!2slk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="form-section">
          <div className="form-group">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Phone Number" />
          <div className="subject">
            <label>Select Subject:</label>
            <div className="subject-options">
              <label><input type="checkbox" name="subject" /> UI/UX</label>
              <label><input type="checkbox" name="subject" /> Web or App development</label>
              <label><input type="checkbox" name="subject" /> Marketing and Branding</label>
              <label><input type="checkbox" name="subject" /> General Inquiry</label>
            </div>
          </div>
          <textarea placeholder="Write your message.." />
          <button className="send-button">Send Message</button>

          <div className="plane-image-container">
        <img src={sendImage} alt="Send Icon" className="plane-image" />
        </div>
        </div>
      </div>

      
     
    </div>
  );
}

export default ContactUs;
