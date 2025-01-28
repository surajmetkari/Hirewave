

import React, { useState } from "react";
import "../styles/PostJobForm.css";
import "../styles/apps.css";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavigationBar from "../components/NavigationBar";
import axios from "axios"; // Import axios

const PostJobForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    jobTitle: "",
    companyName: "",
    jobLocation: "",
    jobDescription: "",
    jobPackage: "",
    jobType: "",
  });
  const [errors, setErrors] = useState({
    jobTitle: false,
    companyName: false,
    jobLocation: false,
    jobDescription: false,
    jobPackage: false,
    jobType: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {
      jobTitle: formData.jobTitle.trim() === "",
      companyName: formData.companyName.trim() === "",
      jobLocation: formData.jobLocation.trim() === "",
      jobDescription: formData.jobDescription.length < 20,
      jobPackage: !/^\d+(\.\d{1,2})?$/.test(formData.jobPackage),
      jobType: formData.jobType === "",
    };
    setErrors(newErrors);
    return !Object.values(newErrors).includes(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fill out all fields correctly.", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }

    try {
      // Send POST request to API
      const response = await axios.post("http://localhost:8080/api/jobs", formData);

      if (response.status === 201) {
        toast.success("Job posted successfully!", {
          position: "top-center",
          autoClose: 1000,
        });

        // Redirect after successful post
        setTimeout(() => {
          navigate("/job-card");
        }, 3000);
      } else {
        toast.error("Something went wrong. Please try again.", {
          position: "top-center",
          autoClose: 2000,
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Error posting job. Please try again.", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  return (
    <>
      <NavigationBar />
      <div className="form-container">
        <h3>Post a New Job</h3>
        <form onSubmit={handleSubmit}>
          <label>Job Title:</label>
          <input
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            required
          />
          {errors.jobTitle && (
            <span className="error-text">Job title is required.</span>
          )}

          {/* Company Name */}
          <label>Company Name:</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
          {errors.companyName && (
            <span className="error-text">Company name is required.</span>
          )}

          {/* Job Location */}
          <label>Job Location:</label>
          <input
            type="text"
            name="jobLocation"
            value={formData.jobLocation}
            onChange={handleChange}
            required
          />
          {errors.jobLocation && (
            <span className="error-text">Job location is required.</span>
          )}

          {/* Job Description */}
          <label>Job Description:</label>
          <textarea
            name="jobDescription"
            value={formData.jobDescription}
            onChange={handleChange}
            required
          />
          {errors.jobDescription && (
            <span className="error-text">
              Job description must be at least 20 characters long.
            </span>
          )}

          {/* Job Package */}
          <label>Package (Annual):</label>
          <input
            type="text"
            name="jobPackage"
            value={formData.jobPackage}
            onChange={handleChange}
            placeholder="Enter package in LPA"
            required
          />
          {errors.jobPackage && (
            <span className="error-text">Package must be a valid number.</span>
          )}

          {/* Job Type */}
          <label>Job Type:</label>
          <select
            name="jobType"
            value={formData.jobType}
            onChange={handleChange}
            required
          >
            <option value="">Select Job Type</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Internship">Internship</option>
          </select>
          {errors.jobType && (
            <span className="error-text">Please select a job type.</span>
          )}

          <button type="submit">Post Job</button>
        </form>

        {/* Toast Container */}
        <ToastContainer />
      </div>
    </>
  );
};

export default PostJobForm;
