import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {  } from "../styles/Home.css";
import  pic  from "../assets/section2_pic.png";

export function Section2() {                    
    return (
        <div className="section-container">
        <Container>
            <Row className="align-items-center">
                {/* Left Column */}
                <Col md={6}>
                    <h2>Millions of Jobs. Find the One That’s Right for You.</h2>
                    <p>
                        Search all the open positions on the web. Get your own personalized salary
                        estimate. Read reviews on over 600,000 companies worldwide. The right job
                        is out there.
                    </p>
                </Col>

                {/* Right Column */}
                <Col md={6} className="text-center">
                    <img
                        src={pic}
                        alt="Job Search"
                        className="img-fluid"
                    />
                </Col>
            </Row>
        </Container>
    </div>
      );
}

