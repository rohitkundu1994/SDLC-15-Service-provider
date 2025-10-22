import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaPaperPlane } from "react-icons/fa";
import { Link } from "react-router-dom";
import HomeSlider from "./HomeSlider";
const Services = () => {
  return (
    <div>
      {/* <======Services Page Start======> */}
      {/* <====Services Hero=====> */}
      <div className="banner cmn-gap p-5">
        <Container>
          <div className="service-banner">
            {/* Banner Top */}
            <Row className="align-items-center">
              <Col md={8}>
                <div className="banner-text">
                  <h3 className="tag resu">My Home Buddy</h3>
                  <h1 className="text-light" >Husehold Services</h1>
                  <p className="topprio">
                    Experience our services where your satisfaction is our top
                    priority
                  </p>
                </div>
              </Col>
              <Col md={4} className="text-md-end text-center">
                <div className="screw-btn">
                  <Button className="banner-btn banner-contact-btn">
                    Contact Us <FaPaperPlane size={30} className="paper-plane ms-2 mb-2"/>
                  </Button>
                </div>
              </Col>
            </Row>

            {/* Banner Bottom Image */}
            <Row className="banner-down mt-4">
              <Col className="text-center">
                <img
                  src="Img/Frame 97.png"
                  alt="screw"
                  loading="lazy"
                  className="img-fluid"
                />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
        {/* <====Services Hero=====> */}
        {/* <Services Section Card====> */}
         
    <div className="offerings cmn-gap p-5 services-cards">
      <Container>
        {/* Heading */}
        <div className="offfering-haeding text-center mb-4">
          <p className="tag">My Home Buddy</p>
          <h3 className="h2-text  display-5 fw-bold">Our Offerings</h3>
        </div>

        {/* Offerings Cards */}
        <Row>
          <Col md={6} className="mb-4">
            <div className="offerings-card">
              <figure>
                <img
                  src="Img/Frame 101.png"
                  alt="man-plumb"
                  loading="lazy"
                  className="img-fluid"
                />
              </figure>
              <figcaption>
                <h3 className="focused">Client Focused Service</h3>
                <p className="focused-text text-dark">
                  Your satisfaction is our top priority. We do customer-centric approach.
                </p>
                <Link  className="more-btn">Learn More</Link>
              </figcaption>
            </div>
          </Col>

          <Col md={6} className="mb-4">
            <div className="offerings-card">
              <figure>
                <img
                  src="Img/Frame 102.png"
                  alt="man-plumb"
                  loading="lazy"
                  className="img-fluid"
                />
              </figure>
              <figcaption>
                <h3 className="focused">Customized Servicing Plans</h3>
                <p className="focused-text text-dark">
                  We provide customized servicing plans that you need on your urgent time.
                </p>
                <Link className="more-btn">Learn More</Link>
              </figcaption>
            </div>
          </Col>

          <Col md={6} className="mb-4">
            <div className="offerings-card">
              <figure>
                <img
                  src="Img/Frame 101 (1).png"
                  alt="man-plumb"
                  loading="lazy"
                  className="img-fluid"
                />
              </figure>
              <figcaption>
                <h3 className="focused">On-time service</h3>
                <p className="focused-text text-dark">
                  We believe your time is precious. We provide on time home servicing.
                </p>
                <Link  className="more-btn">Learn More</Link>
              </figcaption>
            </div>
          </Col>

          <Col md={6} className="mb-4">
            <div className="offerings-card">
              <figure>
                <img
                  src="Img/Frame 102 (1).png"
                  alt="man-plumb"
                  loading="lazy"
                  className="img-fluid"
                />
              </figure>
              <figcaption>
                <h3 className="focused">Eco-friendly Servicing Plans</h3>
                <p className="focused-text text-dark">
                  We provide eco-friendly servicing plans that helps your home and as well as planet.
                </p>
                <Link  className="more-btn">Learn More</Link>
              </figcaption>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    {/* <=====Services Grid before Slider=====> */}
     <div className="plumbing-section cmn-gap">
          <Container>
            <Row className="align-items-center">
              {/* Left Side Text */}
              <Col md={6}>
                <div className="text-content">
                  <div className="tag resu">My Home Buddy</div>
                  <h2>Ready to make the switch to eco-conscious servicing?</h2>
                  <p>
                    Contact My Home Buddy for eco-friendly servicing that helps your
                    home and this planet also.
                  </p>
                  <Link className="Contact-btn">
                    Contact Us <FaPaperPlane size={30} className="mb-2 paper-plane" />
                  </Link>
                </div>
              </Col>
    
              {/* Right Side Image */}
              <Col md={6} className="text-center">
                <div className="image-content">
                  <img
                    src="Img/Frame 52 (1).png"
                    alt="Plumber"
                    className="img-fluid"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* <==== Slider====> */}
          <HomeSlider/>
         {/* <==== Slider====> */}
      {/* <======Services Page End======> */}
    </div>
  );
};

export default Services;
