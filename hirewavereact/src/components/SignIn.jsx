import axios from "axios";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../assets/hirelogo.png";
import { NavBar } from "../components/NavBar";
import "../styles/SignIn.css";
import { useNavigate } from "react-router-dom";

const SignIn = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captchaToken, setCaptchaToken] = useState(null);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    captcha: "",
  });

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    const emailRegex = /^[a-z][a-z0-9]*(\.[a-z0-9]+)*@[a-z0-9-]+\.[a-z]{2,3}$/;
    if (!email) {
      errors.email = "Email is required.";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      errors.email = "Please enter a valid email (e.g., john.doe@example.com).";
      isValid = false;
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      errors.password =
        "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.";
      isValid = false;
    }

    if (!captchaToken) {
      errors.captcha = "Please complete the CAPTCHA.";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!validateForm()) return;
  
    const data = { email, password, captchaToken };
  
    try {
      const response = await axios.post("http://localhost:8080/api/users/login", data);
      const { userType } = response.data; // Fetch userType from backend response
      console.log(response.data);
      console.log(userType);
  
      // Navigate to appropriate page based on userType
      if (userType === "JOB_SEEKER") {
        toast.info("Welcome to, Job Seeker DashbBoard!");
        navigate('/jobseeker');
      } else if (userType === "ADMIN") {
        toast.success("Welcome to Admin DashBoard!");
        navigate('/AdminPage');
      } else if (userType === "RECRUITER") {
        toast.success("Welcome To, Recruiter Dashboard!");
        navigate('/recuriter');
      } else {
        toast.error("Invalid user type. Please contact support.");
      }
  
      // Clear input fields after successful submission
      setEmail("");
      setPassword("");
      setCaptchaToken(null);
  
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Login failed. Please check your credentials and try again.");
    }
  };


  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
    setErrors((prevErrors) => ({ ...prevErrors, captcha: "" }));
  };

  return (
    <>
      <NavBar />
      <div className="signin-container">
        <div className="signin-box">
          <div className="logo-section">
            <img src={logo} alt="App Logo" className="signin-logo" />
          </div>

          <p className="signin-subtitle">Please enter your credentials to Login.</p>
          <form className="signin-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="email"
                className={`signin-input ${errors.email ? "error-input" : ""}`}
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>
            <div className="input-group">
              <input
                type="password"
                className={`signin-input ${errors.password ? "error-input" : ""}`}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {errors.password && <p className="error-text">{errors.password}</p>}
            </div>
            <div className="captcha-container">
              <ReCAPTCHA
                sitekey="6LfDoo4qAAAAAD3IxeXhNCEW4A1-dQq8Zi108Cf3"
                onChange={handleCaptchaChange}
              />
              {errors.captcha && <p className="error-text">{errors.captcha}</p>}
            </div>
            <button type="submit" className="signin-button">
              Sign In
            </button>
          </form>
          <div className="forgot-password">
            <a href="/forgot-password" className="forgot-link">
              Forgot Password?
            </a>
          </div>
          <p className="signup-text">
            New User?{" "}
            <Link to="/signup" className="signup-link">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignIn;

