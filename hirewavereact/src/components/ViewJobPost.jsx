import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/ViewJobPost.css";
import NaviBar from "./NaviBar";
import { Modal, Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ViewJobPost = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    jobTitle: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    resume: null,
    school: "",
    degree: "",
    discipline: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      resume: file,
    }));
  };

  useEffect(() => {
    let isMounted = true; // Track whether the component is still mounted
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/jobs");
        if (isMounted) {
          setJobs(response.data);
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
        toast.error("Error fetching job listings. Please try again later.", {
          position: "top-center",
          autoClose: 3000,
        });
      }
    };

    fetchJobs();

    // Cleanup function to set isMounted to false
    return () => {
      isMounted = false;
    };
  }, []);

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setFormData((prevData) => ({
      ...prevData,
      jobTitle: job.jobTitle,
    }));
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedJob(null);
    setFormData({
      jobTitle: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      resume: null,
      school: "",
      degree: "",
      discipline: "",
      startDate: "",
      endDate: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingApplications =
      JSON.parse(localStorage.getItem("jobApplications")) || [];
    existingApplications.push(formData);
    localStorage.setItem(
      "jobApplications",
      JSON.stringify(existingApplications)
    );

    toast.success("Application submitted successfully!", {
      position: "top-center",
      autoClose: 3000,
    });

    setShowModal(false);

    setTimeout(() => {
      navigate("/view-applicants", { state: formData });
    }, 3000);
  };

  return (
    <>
      <NaviBar />
      <div className="view-job-post-container">
        {/* Job Cards */}
        <div className="job-cards-container">
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <div key={job.id} className="job-card">
                <h3>{job.jobTitle}</h3>
                <p>
                  <strong>Company:</strong> {job.companyName}
                </p>
                <p>
                  <strong>Description:</strong> {job.jobDescription}
                </p>
                <p>
                  <strong>Location:</strong> {job.jobLocation}
                </p>
                <p>
                  <strong>Salary:</strong> ₹{job.jobPackage}
                </p>
                <p>
                  <strong>Job Type:</strong> {job.jobType}
                </p>
                <p>
                  <strong>Role:</strong> {job.jobRole}
                </p>
                <button
                  className="apply-btn"
                  onClick={() => handleApplyClick(job)}
                >
                  Apply Now
                </button>
              </div>
            ))
          ) : (
            <p id="not_available">No job postings available!</p>
          )}
        </div>

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Apply for {selectedJob?.jobTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter first name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter last name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter phone number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

              </Form.Group>
              <Form.Group controlId="Qualification">
                <Form.Label>Qualification</Form.Label>
                <Form.Select
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Qualification</option>
                  <option value="High School">High School</option>
                  <option value="Diploma">Diploma</option>
                  <option value="Bachelor's Degree">Bachelor's Degree</option>
                  <option value="Master's Degree">Master's Degree</option>
                  <option value="PhD">PhD</option>
                </Form.Select>
              </Form.Group>
              <Form.Group controlId="Skills">
                <Form.Label>Skills</Form.Label>
                <Form.Select
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a Skill</option>
                  <option value="Java">Java</option>
                  <option value="C#">C#</option>
                  <option value="Spring">Spring</option>
                  <option value="SpringBoot">Spring Boot</option>
                  <option value="Python">Python</option>
                  <option value="JavaScript">JavaScript</option>
                  <option value="C++">C++</option>
                  <option value="SQL">SQL</option>
                  <option value="HTML/CSS">HTML/CSS</option>
                  <option value="React">React</option>
                  <option value="Node.js">Node.js</option>
                </Form.Select>
              </Form.Group>

              <Form.Group controlId="resume">
                <Form.Label>Upload Resume</Form.Label>
                <Form.Control
                  type="file"
                  name="resume"
                  onChange={handleFileChange}
                  required
                />
              </Form.Group>

              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Apply
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default ViewJobPost;
