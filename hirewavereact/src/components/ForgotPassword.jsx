import React, { useState } from "react";
import axios from "axios";
import "../styles/ForgotPassword.css"; 
import { Link } from "react-router-dom";
import { NavBar } from "../components/NavBar";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/forgot-password",
        { email }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="forgot-password-container">
       <NavBar/>
      <div className="forgot-password-box">
        <h1 className="forgot-password-heading">Forgot Password</h1>
        <p className="forgot-password-text">
          Please enter your email address to reset your password.
        </p>
        <form className="forgot-password-form" onSubmit={handleSubmit}>
          <input
            type="email"
            className="forgot-password-input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="forgot-password-button">
            Submit
          </button>
        </form>
        <p>
          <Link to="/signin">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
