import Container from "react-bootstrap/Container";
import logo from "../assets/hirelogo.png";

import "../styles/Home.css";
import { Nav, Navbar } from "react-bootstrap";

export function NavBar() {
  return (
    <Navbar expand="lg" className="bg-light" fixed="top">
      <Container>
        <img src={logo} alt="Hire.wave.jpg" className="navbar-logo" />
        <span className="hirewaves-name">HireWave</span>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/jobseeker">JobSeeker dashboard</Nav.Link>
            <Nav.Link href="/recuriter">Recruiter dashboard</Nav.Link> 
            <Nav.Link href="/about-us">About Us</Nav.Link>
            <Nav.Link href="/contact-us">Contact Us</Nav.Link>
            <Nav.Link href="/signin">SignIn/SignUp</Nav.Link>
            <Nav.Link href="/AdminPage">Admin </Nav.Link> 
            {/* <Nav.Link href="/AdminPage">Admin Page</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
