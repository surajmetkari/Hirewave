import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import '../styles/AdminNavBar.css';
import '../styles/AdminProfile.css';

const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("User logged out.");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Admin Dashboard</Link>
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
        <div className="collapse navbar-collapse" id="navbarNav"></div>
        <ul className="navbar-nav ms-auto"></ul>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"> <Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/profile"> <FontAwesomeIcon icon={faUser} /> </Link></li>
          </ul>
        </div>

        <Dropdown className="custom-dropdown">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Queries
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Job Seeker Queries</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Recruiter Queries </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <button className="btn btn-danger ms-3 logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}
export default AdminNavbar;
