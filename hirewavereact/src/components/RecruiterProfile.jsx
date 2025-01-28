import React, { useState, useEffect } from "react";
import Navigation from './NavigationBar.jsx';
const RecruiterProfile = () => {
  const [profile, setProfile] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    experience: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  // Fetch profile data from the backend
  const fetchProfile = async () => {
    try {
      setLoading(true);
      const userId = localStorage.getItem("userId"); // Assuming userId is stored in localStorage
      const response = await fetch(`http://localhost:8080/api/recruiter/profile?userId=${userId}`);

      if (!response.ok) {
        throw new Error("Failed to fetch profile");
      }

      const data = await response.json();
      setProfile({
        id: data.id || "",
        name: data.name || "",
        email: data.email || "",
        phone: data.phone || "",
        company: data.company || "",
        experience: data.experience || "",
      });
    } catch (error) {
      console.error("Error fetching profile:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle input change during editing
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  // Save updated profile to the backend
  const handleSave = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/recruiter/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profile),
      });

      if (!response.ok) {
        throw new Error("Failed to save profile");
      }

      const updatedProfile = await response.json();
      setProfile(updatedProfile);
      setIsEditing(false);
    } catch (error) {
      console.error("Error saving profile:", error);
    }
  };

  // Enable editing mode
  const handleEdit = () => {
    setIsEditing(true);
  };

  // Cancel editing mode
  const handleCancel = () => {
    setIsEditing(false);
    fetchProfile(); // Reload profile data to discard changes
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
    <Navigation/>
    <div className="profile-container">
      <h1>Recruiter Profile</h1>
      {isEditing ? (
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Phone:
            <input
              type="text"
              name="phone"
              value={profile.phone}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Company:
            <input
              type="text"
              name="company"
              value={profile.company}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Experience:
            <input
              type="text"
              name="experience"
              value={profile.experience}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div>
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Phone:</strong> {profile.phone}</p>
          <p><strong>Company:</strong> {profile.company}</p>
          <p><strong>Experience:</strong> {profile.experience}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
    </>
  );
};

export default RecruiterProfile;
