import { useNavigate } from "react-router-dom";
import React from "react";
import img1 from "../assets/images/re.png";
import "../styles/RecruiterHome.css";

const RecruiterHome = () => {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate("/post-job");
  };

  return (
    <div className="home-container">
      <div className="home-description">
        <h1>Welcome to the Recruiter Dashboard</h1>
        <p>
          Recruitment dashboards help recruiters, hiring managers, and HR teams
          understand every aspect of the hiring process. These include tracking
          employer brand metrics which show the overall interest job seekers
          have in working for the company; to understanding how many candidates
          are moving through the hiring process. Recruiters can also use
          recruitment dashboards to focus the team’s attention on progress
          toward goals.
        </p>
        <button className="cta-button" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>

      <div className="home-image">
        <img
          src={img1}
          alt="Recruitment Dashboard"
          className="dashboard-image"
        />
      </div>
    </div>
  );
};

export default RecruiterHome;
