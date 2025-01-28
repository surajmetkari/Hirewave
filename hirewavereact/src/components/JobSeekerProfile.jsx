import React, { useState } from "react";
import NaviBar from '../components/NaviBar';
import "../styles/JobSeekerProfile.css"; // Include styles for better UI

const JobSeekerProfile = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dob: '',
    address: '',
    skills: ''
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Perform save operation here, e.g., API call
    console.log("Profile saved:", formData);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <>
      <NaviBar />
      <div className="profile-container">
        <h2>Job Seeker Profile</h2>

        <div className="profile-field">
          <label>Full Name:</label>
          {isEditing ? (
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
          ) : (
            <span>{formData.fullName}</span>
          )}
        </div>

        <div className="profile-field">
          <label>Email:</label>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          ) : (
            <span>{formData.email}</span>
          )}
        </div>

        <div className="profile-field">
          <label>Phone Number:</label>
          {isEditing ? (
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          ) : (
            <span>{formData.phone}</span>
          )}
        </div>

        <div className="profile-field">
          <label>Date of Birth:</label>
          {isEditing ? (
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
          ) : (
            <span>{formData.dob}</span>
          )}
        </div>

        <div className="profile-field">
          <label>Address:</label>
          {isEditing ? (
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          ) : (
            <span>{formData.address}</span>
          )}
        </div>

        <div className="profile-field">
          <label>Skills:</label>
          {isEditing ? (
            <textarea
              name="skills"
              value={formData.skills}
              onChange={handleChange}
            />
          ) : (
            <span>{formData.skills}</span>
          )}
        </div>

        <div className="profile-actions">
          {isEditing ? (
            <>
              <button className="save-button" onClick={handleSave}>
                Save
              </button>
              <button className="cancel-button" onClick={handleCancel}>
                Cancel
              </button>
            </>
          ) : (
            <button className="edit-button" onClick={handleEdit}>
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default JobSeekerProfile;
