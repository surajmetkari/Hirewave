import React, { useState } from "react";
import NaviBar from "./NaviBar";
import "../styles/JobSeekerContactUs.css";

const JobSeekerContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Message sent:\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );
  };

  return (
    <>
      <NaviBar />
      <div className="contact-us-container">
        <div className="contact-us-box">
          <h1 className="contact-us-heading">Contact Us</h1>
          <form className="contact-us-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              className="contact-us-input"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              className="contact-us-input"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              className="contact-us-textarea"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            />
            <button type="submit" className="contact-us-button">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default JobSeekerContactUs;
