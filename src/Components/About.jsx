import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { FaPaperPlane } from "react-icons/fa";
import "../Css/Style.css";
import { Link } from "react-router-dom";
import HomeSlider from "./HomeSlider";
import { Helmet } from "react-helmet-async";
const About = () => {
  return (
    <div>
      {/* <=====Seo Start On About Page======> */}
      <Helmet>
        {/* Schema Markup for About Page */}
        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "About HomeBuddy",
          "url": "https://www.homebuddy.com/about-us",
          "description": "HomeBuddy.com is an online platform designed to connect homeowners with trusted home improvement professionals. The website operates as a service marketplace, helping people find qualified contractors for renovation, remodeling, repair, and maintenance projects while also supporting contractors by providing them with valuable leads. At its core, HomeBuddy acts as a bridge between homeowners and service providers, making the process of hiring professionals for home projects more efficient, transparent, and reliable.",
          "publisher": {
            "@type": "Organization",
            "name": "HomeBuddy",
            "url": "https://www.homebuddy.com",
            "logo": "https://www.homebuddy.com/logo.png"
          }
        }
      `}</script>

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.homebuddy.com/about-us" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="HomeBuddy" />
        <meta property="og:site_name" content="About Us" />
        <meta property="og:url" content="https://www.homebuddy.com/about-us" />
        <meta
          property="og:description"
          content="HomeBuddy.com connects homeowners with trusted home improvement professionals. From renovation to repair, we make finding qualified experts easy, transparent, and reliable."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.homebuddy.com/og-image.jpg"
        />

        {/* Standard Meta Tags */}
        <meta
          name="title"
          content="About HomeBuddy: Your Trusted Home Experts"
        />
        <meta
          name="description"
          content="Discover HomeBuddy's story today. We're a team of home experts helping you find reliable services fast. Join thousands who've trusted us for easy home solutions."
        />
      </Helmet>
      {/* <=====Seo End On About Page======> */}
      {/* <====About Banner====> */}
      <div className="banner-about">
        <Container>
          <div className="service-banner-about">
            <Row className="banner-up align-items-center">
              {/* Left side text */}
              <Col md={8}>
                <div className="banner-text">
                  <h3 className="tag resu">My Home Buddy</h3>
                  <h1 className="text-light">Household Services</h1>
                  <p className="topprio">
                    Experience our services where your satisfaction is our top
                    priority
                  </p>
                </div>
              </Col>

              {/* Right side button */}
              <Col md={4} className="text-md-end text-center mt-3 mt-md-0">
                <div className="screw-btn">
                  <Link className="about-banner-btn">
                    Contact Us
                    <FaPaperPlane className="ms-2 mb-2 paper-plane" size={30} />
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      {/* <=====Banner-img====> */}
      <div className="about-banner-img"></div>
      {/* <=====Banner-img====> */}
      {/* <====Our Story======> */}
      <div className="our-story cmn-gap p-5">
        <Container>
          <Row className="align-items-center">
            {/* Left Side Image */}
            <Col md={6} sm={12}>
              <div className="image-about">
                <img
                  src="Img/woanhold.png"
                  alt="Worker"
                  className="img-fluid"
                />
              </div>
            </Col>

            {/* Right Side Content */}
            <Col md={6} sm={12}>
              <div className="content">
                <span className="tag tag-gap resu">My Home Buddy</span>
                <h2 className="common-head">MY HOME BUDDY</h2>
                <p className="common-text text-dark">
                  At My Home Buddy, We believe your home more than just a living
                  space.
                </p>

                {/* About Section */}
                <div className="about-icon d-flex align-items-start mb-4">
                  <div className="about-image me-3">
                    <img src="Img/Frame 108.png" alt="icon" />
                  </div>
                  <div className="about-text">
                    <h3>Our story</h3>
                    <p className="text-dark">
                      My Home Buddy was founded with a drive for excellence and
                      a vision to make home services more accessible and hassle
                      free for everyone.
                    </p>
                  </div>
                </div>

                <div className="about-icon d-flex align-items-start mb-4">
                  <div className="about-image me-3">
                    <img src="Img/Frame 108 (1).png" alt="icon" />
                  </div>
                  <div className="about-text">
                    <h3>Our Mission</h3>
                    <p className="text-dark">
                      Our goal at My Home Buddy is straight-forward to provide
                      homemakers reliable, efficient solutions that elevate
                      their home experience.
                    </p>
                  </div>
                </div>

                <div className="about-icon d-flex align-items-start">
                  <div className="about-image me-3">
                    <img src="Img/Frame 108 (2).png" alt="icon" />
                  </div>
                  <div className="about-text">
                    <h3>What sets us apart</h3>
                    <p className="text-dark fs-6">
                      What makes My Home Buddy unique is our dedication to
                      delivering excellence in every detail of our services.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <====Our Story======> */}
      {/* <====Homer Reapire Service====> */}
      <div className="repair cmn-gap p-5">
        <Container>
          {/* Top Heading Section */}
          <div className="serv text-center mb-5">
            <div className="tag">My Home Buddy</div>
            <h2 className="heading">Home Repair Services</h2>
            <p className="description text-dark">
              We provide customized plans, flexible scheduling and specialized
              service solutions that you mostly needed in every time.
            </p>
          </div>

          {/* Service 1 */}
          <Row className="align-items-center mb-5">
            <Col md={6}>
              <div className="make-image">
                <img
                  src="Img/Frame 115.png"
                  alt="Skilled Professional"
                  className="img-fluid mb-3"
                />
                <h3>Skilled Professional</h3>
                <p className="text-dark">
                  Our servicing staff not only well trained but also
                  experienced. They do their work with proper guideline.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <img
                src="Img/Frame 117.png"
                alt="Electric Service"
                className="img-fluid"
              />
            </Col>
          </Row>

          {/* Service 2 */}
          <Row className="align-items-center flex-md-row-reverse mb-5">
            <Col md={6}>
              <div className="make-image">
                <img
                  src="Img/Frame 115.png"
                  alt="Flexible Scheduling"
                  className="img-fluid mb-3"
                />
                <h3>Flexible Scheduling</h3>
                <p className="text-dark">
                  We offer variety of scheduling options to suit your needs.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <img
                src="Img/Frame 117 (1).png"
                alt="Flexible Scheduling Image"
                className="img-fluid"
              />
            </Col>
          </Row>

          {/* Service 3 */}
          <Row className="align-items-center">
            <Col md={6}>
              <div className="make-image">
                <img
                  src="Img/Frame 115.png"
                  alt="Customized Solutions"
                  className="img-fluid mb-3"
                />
                <h3>Customized Solutions</h3>
                <p className="text-dark">
                  We provide customized home servicing solutions to meet your
                  specific needs and specifications.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <img
                src="Img/Frame 117 (2).png"
                alt="Customized Solutions Image"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </div>
      {/* <====Homer Reapire Service====> */}
      {/* <====Teams Card=====> */}
      <div className="exp-team cmn-gap p-5">
        <Container>
          {/* Heading */}
          <div className="head-line text-center mb-5">
            <div className="tag">My Home Buddy</div>
            <h2>Get services from our experienced team</h2>
            <p className="we-make">
              We make it easy to get proper services that you need. Simply book
              your service that you require and see the flawless result.
            </p>
          </div>

          {/* Cards */}
          <Row className=" g-4">
            <Col md={4} sm={6} className="mb-4">
              <Card className="card-man text-center h-100">
                <Card.Img
                  variant="top"
                  src="Img/aboutcardimg-3.png"
                  alt="Electric Service Man"
                />
                <Card.Body className="card-info">
                  <Card.Title>Noel Bowie</Card.Title>
                  <Card.Text>Electric Service Man</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} sm={6} className="mb-4">
              <Card className="card-man text-center h-100">
                <Card.Img
                  variant="top"
                  src="Img/aboutcardimg-2.png"
                  alt="Carpentry Service Man"
                />
                <Card.Body className="card-info">
                  <Card.Title>Laim David</Card.Title>
                  <Card.Text>Carpentry Service Man</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} sm={6} className="mb-4">
              <Card className="card-man text-center h-100">
                <Card.Img
                  variant="top"
                  src="Img/aboutcardimg-1.png"
                  alt="Plumbing Service Man"
                />
                <Card.Body className="card-info">
                  <Card.Title>Saif Thompson</Card.Title>
                  <Card.Text>Plumbing Service Man</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <====Teams Card=====> */}
      {/* <=====Service Grid-2=====> */}
      <section className="plumbing-section cmn-gap">
        <Container>
          <Row className="align-items-center">
            {/* Left Side Text */}
            <Col md={6}>
              <div className="text-content">
                <div className="tag resu">My Home Buddy</div>
                <h2>Ready to make the switch to eco-conscious servicing?</h2>
                <p>
                  Contact My Home Buddy for eco-friendly servicing that helps
                  your home and this planet also.
                </p>
                <Link className="Contact-btn">
                  Contact Us{" "}
                  <FaPaperPlane size={30} className="mb-2 paper-plane" />
                </Link>
              </div>
            </Col>

            {/* Right Side Image */}
            <Col md={6} className="text-center">
              <div className="image-content">
                <img
                  src="Img/Frame 52 (2).png"
                  alt="Plumber"
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* <=====Service Grid-2=====> */}
      {/* <======Slider=====> */}
      <HomeSlider />
      {/* <======Slider=====> */}
    </div>
  );
};

export default About;
