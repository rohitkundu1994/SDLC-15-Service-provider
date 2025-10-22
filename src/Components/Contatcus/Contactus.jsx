import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../../Css/Style.css";

const Contactus = () => {
  const offices = [
    {
      title: "My Home Buddy - Northern Office",
      address:
        "2nd Floor, 93, Netaji Subhas Road, Fancy Plaza, B.B.D. Bagh, Kolkata, West Bengal 700001",
      img: "/Img/Frame 163.png",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.530052293139!2d88.34747687480564!3d22.592319532435857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a67b03b61b%3A0x730df3a5ce53cbdf!2sBBD%20Bagh%2C%20Kolkata!5e0!3m2!1sen!2sin!4v1728300000000!5m2!1sen!2sin",
    },
    {
      title: "My Home Buddy - Southern Office",
      address: "111, Sarat Bose Road, Kolkata 700020",
      img: "/Img/Frame 163.png",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.2726748724347!2d88.35588407480402!3d22.528283936741556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02770527a3e0d9%3A0x8b7f76abf837a6b!2sSarat%20Bose%20Rd%2C%20Kolkata!5e0!3m2!1sen!2sin!4v1728300000000!5m2!1sen!2sin",
    },
    {
      title: "My Home Buddy - Eastern Office",
      address:
        "18, Girish Ghimire Dave Road (Behind Girish Cinema), Kolkata 700014",
      img: "/Img/Frame 163.png",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.5971105030487!2d88.37204097480376!3d22.51588393756556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02776e09b6ac6d%3A0xc5a7920ad6f5af3!2sGirish%20Park%2C%20Kolkata!5e0!3m2!1sen!2sin!4v1728300000000!5m2!1sen!2sin",
    },
    {
      title: "My Home Buddy - Western Office",
      address: "926, Sarat Chatterjee Road, Saltlake, Memtraba, Howrah-711102",
      img: "/Img/Frame 163.png",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.123486804749!2d88.31200107480239!3d22.45973294148971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027aa90bbf88d1%3A0x8616d2a8c79a46b9!2sHowrah!5e0!3m2!1sen!2sin!4v1728300000000!5m2!1sen!2sin",
    },
  ];

  return (
    <section className="contact-us py-5">
      <Container fluid>
        <div className="text-center mb-5">
          <h1 className="form-header fw-bold">Visit us at our offices</h1>
          <p className="text-muted">
            My Home Buddy is proud to serve multiple offices across the country,
            ensuring you have easy access.
          </p>
          <h2 className="section-title mt-4">Our Offices</h2>
        </div>

        <Row className="gy-5 mb-5">
          {offices.map((office, index) => (
            <Col key={index} sm={12} md={6}>
              <Card className="text-left h-100 shadow-sm border-0 p-3 office-bg">
                <Card.Img
                  variant="top"
                  src={office.img}
                  alt={office.title}
                  style={{ width: "60px", marginLeft: "10px" }}
                />
                <Card.Body>
                  <Card.Title className="fw-bold">{office.title}</Card.Title>
                  <Card.Text className="text-muted small">
                    {office.address}
                  </Card.Text>

                  <div className="map-container mt-3">
                    <iframe
                      src={office.map}
                      width="100%"
                      height="250"
                      style={{ border: "0", borderRadius: "10px" }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Map of ${office.title}`}
                    ></iframe>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Contactus;
