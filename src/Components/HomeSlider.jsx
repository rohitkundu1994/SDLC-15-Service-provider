import React from "react";
import "../Css/Style.css";
import { Card, Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const testimonials = [
  {
    title: "Highly Recommend",
    text: "They offer exceptional services and I trust them for every home repair I need. Their response time is excellent and their team is always professional and courteous.",
    name: " John Carter",
    image: "Img/Ellipse 1 (1).png",
  },
  {
    title: "Professional Team",
    text: "Their experts are punctual and deliver outstanding work with great care and precision. My family feels secure knowing that My Home Buddy is just a call away.",
    name: "David Smith",
    image: "Img/Ellipse 1 (1).png",
  },
  {
    title: "Great Service",
    text: "Their experts are punctual and deliver outstanding work with great care and precision. My family feels secure knowing that My Home Buddy is just a call away.",
    name: "Sarah Lee",
    image: "Img/Ellipse 1.png",
  },
];
const HomeSlider = () => {
  const PrevArrow = ({ onClick }) => (
    <button
      className="custom-arrow prev"
      onClick={onClick}
      style={{
        background: "#7C4DFF",
        border: "none",
        color: "#fff",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        fontSize: "30px",
        position:"absolute",
        bottom:"-71px",
        left:"0",
        right:"49px",
        margin:"auto"
        
      }}
    >
      ←
    </button>
  );
  // Custom Next Button
  const NextArrow = ({ onClick }) => (
    <button
      className="custom-arrow next"
      onClick={onClick}
      style={{
        background: "#7C4DFF",
        border: "none",
        color: "#fff",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        fontSize: "30px",
        margin: "10px",
        position:"absolute",
        bottom:"-71px",
        left:"95px",
        right:"20px",
        margin:"auto"
      }}
    >
      →
    </button>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div>
      <Container className="py-5">
        <p className="tag">my home buddy</p>
        <h2 className="fw-bold mb-4 swiper-heading ">
          What People Say <br /> About Us
        </h2>
        

          <Slider {...settings}   >
            {testimonials.map((item, index) => (
              <div key={index} className="p-3 ">
                <Card
                  className="h-100  testimonial"
                  style={{ background: "#EDEBFF", borderRadius: "20px", boxShadow:" box-shadow: -12px 0 0 0 #6d59c8" }}
                >
                  <Card.Body>
                    <h5 className="fw-bold">{item.title}</h5>
                    <p className="mt-2 text-dark ">{item.text}</p>
                    <Row >
                      <Col xs="auto">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="rounded-circle"
                          style={{ width: "60px", height: "60px" }}
                        />
                      </Col>
                      <Col className="mt-3">
                        <strong>{item.name}</strong>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Slider>
        </Container>
      
    </div>
  );
};

export default HomeSlider;
