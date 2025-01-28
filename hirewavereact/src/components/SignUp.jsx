import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "../styles/SignUp.css";
import job from "../assets/job.jpg";
import { NavBar } from "../components/NavBar";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [errors, setErrors] = useState({});

  const validateName = (name) => /^[a-zA-Z][a-zA-Z0-9_]*$/.test(name);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    // Name validation
    if (!validateName(name)) {
      newErrors.name =
        "Invalid username. It must start with a letter and contain only alphanumeric characters and underscores.";
    }

    // Email validation
    const emailRegex = /^[a-z][a-z0-9]*(\.[a-z0-9]+)*@[a-z0-9-]+\.[a-z]{2,3}$/;
    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(email)) {
      newErrors.email =
        "Please enter a valid email (e.g., john.doe@example.com).";
    }

    // Password validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      newErrors.password =
        "Password must start with a letter, contain at least one uppercase letter, one lowercase letter, one number, and one special character, and be at least 8 characters long.";
    }

    // Password match validation
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    // User type validation
    if (!userType) {
      newErrors.userType = "Please select a user type.";
    }

    setErrors(newErrors);

    // Stop if there are validation errors
    if (Object.keys(newErrors).length > 0) return;

    // Prepare data for submission
    const data = { name, email, password, confirmPassword, userType };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/users/register",
        data
      );
      console.log(response.data);

      // Success toast messages based on user type
      if (userType === "JOB_SEEKER") {
        toast.info("Welcome JOB_SEEKER! Start your journey with HIREWAVE.");
      } else if (userType === "ADMIN") {
        toast.success("ADMIN registered successfully!");
      } else if (userType === "RECRUITER") {
        toast.success("RECRUITER registered successfully!");
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Failed to register. Please try again later.");
    }
  };

  return (
    <div className="signup-page">
      <NavBar />
      <div className="signup-container">
        <div className="form-section">
          <h2 className="signup-title">Welcome To HIREWAVE!</h2>
          <p className="signup-subtitle">Please fill your personal details</p>
          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="signup-input"
                placeholder="Enter Your User Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              {errors.name && <p className="error-message">{errors.name}</p>}
            </div>

            <div className="form-group">
              <input
                type="email"
                className="signup-input"
                placeholder="Enter Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>

            <div className="form-group">
              <input
                type="password"
                className="signup-input"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {errors.password && (
                <p className="error-message">{errors.password}</p>
              )}
            </div>

            <div className="form-group">
              <input
                type="password"
                className="signup-input"
                placeholder="Confirm Your Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              {errors.confirmPassword && (
                <p className="error-message">{errors.confirmPassword}</p>
              )}
            </div>

            <div className="form-group">
              <select
                className="signup-select"
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select User Type
                </option>
                <option value="JOB_SEEKER">Job Seeker</option>
                <option value="ADMIN">Admin</option>
                <option value="RECRUITER">Recruiter</option>
              </select>
              {errors.userType && (
                <p className="error-message">{errors.userType}</p>
              )}
            </div>

            <div className="terms-container">
              <input type="checkbox" required />
              <span>
                By registering, you confirm that you accept the Terms &
                Conditions and Privacy Policy
              </span>
            </div>

            <button type="submit" className="signup-button">
              Register
            </button>
          </form>
          <p className="signin-text">
            Already have an account? <Link to="/signin">Sign In</Link>
          </p>
        </div>
        <div className="illustration-section">
          <img src={job} alt="job portal" className="illustration-image" />
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={5000} />
    </div>
  );
};

export default SignUp;
