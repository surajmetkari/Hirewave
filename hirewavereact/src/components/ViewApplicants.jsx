import React, { useEffect, useState } from "react";
import { ListGroup, Card, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import "../styles/ViewApplicants.css";
import NavigationBar from "../components/NavigationBar";

const ViewApplicants = () => {
  const [applications, setApplications] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const storedApplications =
      JSON.parse(localStorage.getItem("jobApplications")) || [];
    if (storedApplications.length === 0) {
      toast.info("No applications found.", {
        position: "top-center",
        autoClose: 2000,
      });
    }
    console.log("storedApplications", storedApplications);
    setApplications(storedApplications);
  }, []);

 
  const filteredApplications = applications.filter((application) =>
    application.jobTitle.toLowerCase().includes(filter.toLowerCase())
  );

  const groupedApplications = filteredApplications.reduce(
    (acc, application) => {
      const title = application.jobTitle;
      if (!acc[title]) {
        acc[title] = [];
      }
      acc[title].push(application);
      return acc;
    },
    {}
  );

  return (
    <>
      <NavigationBar />
      <div className="container mt-4">
        <h2>Job Applications</h2>

        <Form.Group controlId="jobTitleFilter">
          <Form.Label>Filter by Job Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter job title"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </Form.Group>

        {Object.keys(groupedApplications).length > 0 ? (
          Object.keys(groupedApplications).map((title, index) => (
            <div key={index}>
              <h3>{title}</h3>
              <ListGroup>
                {groupedApplications[title].map((application, idx) => (
                  <ListGroup.Item key={idx}>
                    <div className="card-wrapper">
                      <Card>
                        <Card.Body>
                          <Card.Title>{`${application.jobTitle}`}</Card.Title>
                          <Card.Subtitle>{`Name: ${application.firstName} ${application.lastName}`}</Card.Subtitle>
                          <Card.Subtitle className="mb-2 text-muted">
                            Email: {application.email}
                          </Card.Subtitle>
                          <Card.Text>
                            <strong>Phone:</strong> {application.phone || "N/A"}
                            <br />
                           
                            <strong>Degree:</strong> {application.degree}
                            <br />
                            
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          ))
        ) : (
          <p>No applications to display.</p>
        )}
      </div>
    </>
  );
};

export default ViewApplicants;



