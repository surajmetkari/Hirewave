import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import '../styles/JobSeekerProfile.css'

import '../styles/NaviBar.css'; 

const NaviBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("User logged out.");
    navigate("/");  
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Job Seeker Dashboard</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          
          <ul className="navbar-nav ms-auto"> 
          <li className="nav-item">
              <Link className="nav-link" to="/jobseeker">Home</Link> 
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/view-job-post">View Job Posts</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/job-seeker-contact-us">Contact Us</Link>
            </li>
          
            <li className="nav-item"><Link className="nav-link" to="/Job-Seeker-Profile"> <FontAwesomeIcon icon={faUser} /></Link></li>
          
          </ul>
          <button className="btn btn-danger ms-3 logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default NaviBar;
