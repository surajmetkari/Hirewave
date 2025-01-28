import React from "react";
import "../styles/AboutUs.css"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from "../assets/dipti.jpeg";
import img2 from "../assets/manasi.jpeg";
import img3 from "../assets/shruti.jpeg";
import img4 from "../assets/suraj.jpeg";
import img5 from "../assets/rahul.jpg";
import { NavBar } from "../components/NavBar";

const AboutUs = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Ms.Dipti Suryakant Patil",
      image: img1,
      cdac: "C-DAC (Team-7 PL) ",
    },
    {
      id: 2,
      name: " Ms.Manasi  Sudhir  Patil",
      image: img2,
      cdac: "C-DAC (Team-8 TL)",
    },
    {
      id: 3,
      name: "Ms.Shrutika Uttam Yadav",
      image: img3,
      cdac: "C-DAC (Team-16)",
    },
    {
      id: 4,
      name: "Mr.Suraj Narayan Metkari",
      image: img4,
      cdac: "C-DAC (Team-2 AL)",
    },
    {
      id: 5,
      name: "Mr.Rahul Keshetty",
      image: img5,
      cdac: "C-DAC (Team-1 CL)",
    },

  ];

  return (
    <div className="about-us-container">
      <NavBar />
      <div className="about-us-box">
        <br></br><h1 className="about-us-heading">About Us</h1>

        <section className="about-us-content">
          <h2 className="welcome-heading">Welcome to HireWave</h2>

          <p>
            Welcome to HireWave, your ultimate destination for building careers
            and connecting talent with opportunities. We are a dynamic online
            platform dedicated to bridging the gap between job seekers and
            employers across diverse industries.
          </p>

          <h3>Our Mission</h3>
          <p>
            Our mission is to empower individuals and organizations by
            simplifying the job search and hiring process. We aim to provide a
            seamless experience that helps job seekers land their dream jobs and
            businesses find the perfect candidates to drive their success.
          </p>

          <div className="offer-section">
            <div className="offer">
              <h4>For Job Seekers:</h4>
              <p>
                Discover countless opportunities tailored to your skills and
                aspirations. Our platform offers advanced filters,
                resume-building tools, career advice, and job alerts to make
                your search efficient and fruitful.
              </p>
            </div>
            <div className="offer">
              <h4>For Employers:</h4>
              <p>
                Reach the right talent quickly with our smart recruiting tools,
                from posting jobs and managing applications to conducting
                virtual interviews. We ensure you find the best fit for your
                team.
              </p>
            </div>
          </div>

          <h3>Join Us Today</h3>
          <p>
            Whether you’re a fresh graduate, a seasoned professional, or an
            employer seeking top talent, HireWave is here to support your
            journey. Together, let’s shape the future of work.
          </p>
        </section>

        {/* Team members section */}
        <h3 className="founders-heading">Founders of HireWave</h3>
        <div className="team-container">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <img
                src={member.image}
                alt={member.name}
                className="team-photo"
              />
              <h2 className="team-name">{member.name}</h2>
              <p className="team-cdac">{member.cdac}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;


