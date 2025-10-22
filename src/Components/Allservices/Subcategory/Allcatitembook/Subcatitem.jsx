import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import { allcat } from "../../../../Redux/Slice/Providerslice";
import { Container, Row, Col, Button, Card, ListGroup } from "react-bootstrap";
import Slider from "react-slick";
import { showAlertErr } from "../../../../SwalAlret/swalalret";

const Subcatitem = () => {
  let { subitemId } = useParams();
  let dispatch = useDispatch();
  let navigate = useNavigate()
  let { subsurb,user } = useSelector((state) => state.reg);

  const [currentItem, setCurrentItem] = useState(null);

  useEffect(() => {
    dispatch(allcat());
  }, [dispatch]);

  useEffect(() => {
    if (subsurb && subitemId) {
      const item = subsurb.find((sub) => sub.id === Number(subitemId));
      setCurrentItem(item);
    }
  }, [subsurb, subitemId]);
  const authcheck = ()=>{
    if (!user) {
      showAlertErr("Error", "You must login to book a service!");
      navigate("/login");
      return;
    }else{
      navigate("/bookform")
    }
  }

  if (!currentItem) return <p>Loading...</p>;

  const relatedItems = subsurb.filter((sub) => sub.id !== Number(subitemId));

  //  Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container fluid>
      <Row className="mt-5">
        {/* Main Service */}
        <Col md={7} className="mb-4">
          <Card className=" book-item p-3 shadow-sm rounded-4">
            <Card.Img
              variant="top"
              src={currentItem.image}
              alt={currentItem.name}
              style={{
                height: "250px",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />
            <Card.Body>
              <Card.Title className="fs-3 text-light">{currentItem.name}</Card.Title>
              <Card.Subtitle className="text-light fs-3 mb-2">{currentItem.service}</Card.Subtitle>
              <Card.Text>{currentItem.description}</Card.Text>
              <h5 className="text-center text-light">Facilities</h5>
              <ListGroup>
                {currentItem.facilities?.map((fac, i) => (
                  <ListGroup.Item key={i}>
                    {typeof fac === "object" ? JSON.stringify(fac) : fac}
                  </ListGroup.Item>
                ))}
              </ListGroup>

              <h4 className="mt-3 text-light">₹{currentItem.price}</h4>
              <Button className="mt-2 w-100" variant="light"
             onClick={authcheck} >Book Now</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Related Services Slider */}
        <Col md={5} className="book-item-box">
          <h4 className="mb-3 text-center text-light">Tap Repairing</h4>
          <Slider {...sliderSettings} className="">
            {relatedItems.map((item) => (
              <div key={item.id}>
                <Card className=" book-item-slider m-2 p-2 shadow-sm rounded-4 text-center">
                  <Card.Img
                    variant="top"
                    src={item.image}
                    alt={item.name}
                    style={{ height: "80px", objectFit: "contain",borderRadius:"5px" }}
                   
                  />
                  <Card.Body>
                    <Card.Title className="text-light">{item.name}</Card.Title>
                    <p className="mb-1 text-light">
                      ⭐ {item.rating || "5.0"} (1K Reviews)
                    </p>
                    <h6 className="text-light">₹{item.price}</h6>
                    <Button
                      as={Link}
                      to={`/subcat/subitem/${item.id}`}
                      variant="light"
                      className="w-100"
                    >
                      Bookings
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Slider>
        </Col>
      </Row>
    </Container>
  );
};

export default Subcatitem;
