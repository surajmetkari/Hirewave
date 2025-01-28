import '../styles/Home.css';
import logo from "../assets/hirelogo.png";

export function Footer() {
    return (
        <div className="footer-container">
            <div className="row">
                {/* First Column */}
                <div className="col-md-4 mb-3">
                    <img src={logo} alt="Hire-wave" className='footer-logo-image'/>
                    <p>
                        HireWave is a leading platform connecting talented job seekers with top recruiters. 
                        Our mission is to simplify the hiring process and empower careers. With a focus on 
                        innovation and user satisfaction, we provide personalized solutions for candidates and employers. 
                        Let’s build a better future together—one opportunity at a time.
                    </p>
            
                </div>

                {/* Second Column */}
                <div className="col-md-4">
                    <h4>Quick Links</h4>
                    <ul className="footer-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about-us">About Us</a></li>
                        <li><a href="/contact-us">Contact Us</a></li>
                    </ul>
                </div>

                {/* Third Column - Contact Details */}
                <div className="col-md-4">
                    <h4>Contact Us</h4>
                    <ul className="footer-contact">
                        <li><strong>Email:</strong> support@hirewave.com</li>
                        <li><strong>Phone:</strong> +1 800 123 4567</li>
                        <li><strong>Address:</strong> 123 Career St, Tech City, CA 12345</li>
                    </ul>
                </div>
            </div>
            <p>Copyrights © 2018 All Rights Reserved by Hire.wave</p>
        </div>
    );
}
