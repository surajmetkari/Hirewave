
import axios from "axios";
//import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../styles/JobCard.css"; // Make sure your styling is appropriate
import NavigationBar from "../components/NavigationBar"; // Keep navigation bar
import { toast } from "react-toastify"; // Optional for notifications

const JobCard = () => {
  const [jobs, setJobs] = useState([]); // State to hold job data
  const [loading, setLoading] = useState(true); // State for loading

  // Fetch jobs on component mount
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/jobs");

        if (response.status === 200) {
          setJobs(response.data); // Store fetched jobs in the state
        } else {
          toast.error("Failed to fetch jobs.", {
            position: "top-center",
            autoClose: 2000,
          });
        }
      } catch (error) {
        console.error(error);
        toast.error("Error fetching jobs.", {
          position: "top-center",
          autoClose: 2000,
        });
      } finally {
        setLoading(false); // Set loading state to false after data is fetched
      }
    };

    fetchJobs(); // Call the function to fetch jobs
  }, []); // Empty dependency array to run this only once on mount

  // Function to delete a job
  const deleteJob = async (jobId) => {
    try {
      const response = await axios.delete(`http://localhost:8080/api/jobs/${jobId}`);

      if (response.status === 200) {
        setJobs(jobs.filter((job) => job.id !== jobId)); // Remove the deleted job from state
        toast.success("Job deleted successfully.", {
          position: "top-center",
          autoClose: 2000,
        });
      } else {
        toast.error("Failed to delete job.", {
          position: "top-center",
          autoClose: 2000,
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Error deleting job.", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  return (
    <>
      <NavigationBar />
      <div className="job-card-container">
        <h3 className="text-center my-4">Posted Jobs</h3>
        {loading ? (
          <p className="text-center">Loading jobs...</p> // Show loading message
        ) : jobs.length === 0 ? (
          <p className="text-center">No jobs posted yet.</p> // If no jobs
        ) : (
          <div className="job-cards">
            {jobs.map((job, index) => (
              <div key={index} className="job-card">
                <h4 className="job-title">{job.jobTitle}</h4>
                <p>
                  <strong>Company:</strong> {job.companyName}
                </p>
                <p>
                  <strong>Location:</strong> {job.jobLocation}
                </p>
                <p>
                  <strong>Description:</strong> {job.jobDescription}
                </p>
                <p>
                  <strong>Package:</strong> {job.jobPackage} LPA
                </p>
                <p>
                  <strong>Type:</strong> {job.jobType}
                </p>
                {/* Delete Button */}
                <button
                  className="btn btn-danger"
                  onClick={() => deleteJob(job.id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default JobCard;
