import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer className="footer  text-light py-5 mt-5">
        <Container>
          <Row className="footer-content mb-4">
            <Col md={3} sm={6} className="mb-4">
              <h3 className="fw-bold">My Home Buddy</h3>
              <p>42/1C8 Road, Saltlake, Sec-2</p>
              <p>NewTown Kolkata-700134</p>
              <p>
                <Link
                  href="mailto:myhomebuddy449@gmail.com"
                  className="text-light text-decoration-none"
                >
                  myhomebuddy449@gmail.com
                </Link>
              </p>
              <p>9830764509, 9804749923</p>
            </Col>

            <Col md={3} sm={6} className="mb-4">
              <h3 className="fw-bold">Extra Links</h3>
              <ul className="list-unstyled">
                <li>
                  <Link to="/" className="text-light text-decoration-none">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-light text-decoration-none">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-light text-decoration-none"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contactus"
                    className="text-light text-decoration-none"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </Col>

            {/* Useful Links */}
            <Col md={3} sm={6} className="mb-4">
              <h3 className="fw-bold">Useful Links</h3>
              <ul className="list-unstyled">
                <li>
                  <Link to="team" className="text-light text-decoration-none">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    to="#testimonials"
                    className="text-light text-decoration-none"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    to="#portfolio"
                    className="text-light text-decoration-none"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="#blogs" className="text-light text-decoration-none">
                    Blogs
                  </Link>
                </li>
              </ul>
            </Col>

            {/* Social Media */}
            <Col md={3} sm={6} className="mb-4">
              <h3 className="fw-bold">Follow Us</h3>
              <div className="d-flex flex-column gap-2">
                <Link
                  to="#facebook"
                  className="text-light text-decoration-none"
                >
                  Facebook
                </Link>
                <Link
                  to="#instagram"
                  className="text-light text-decoration-none"
                >
                  Instagram
                </Link>
                <Link to="#twitter" className="text-light text-decoration-none">
                  Twitter
                </Link>
              </div>
            </Col>
          </Row>

          {/* Main Brand */}
          <div className="footer-brand text-center my-3">
            <h1 className="fw-bold">My Home Buddy</h1>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom text-cente border-top">
            <p className="mb-0 text-center mt-2">
              &copy; 2025 My Home Buddy. All rights reserved.
            </p>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
