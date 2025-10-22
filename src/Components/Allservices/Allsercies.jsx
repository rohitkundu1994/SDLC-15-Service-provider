import React, { useEffect, useState } from "react";
import {
  Container,
  Form,
  InputGroup,
  Card,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import { FaSearch, FaStar } from "react-icons/fa";
import "../../Css/Style.css";
import { useDispatch, useSelector } from "react-redux";
import { allservice, pinfilterserv } from "../../Redux/Slice/Providerslice";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Allsercies = () => {
  const [pincode, setPincode] = useState("");
  const [searchMode, setSearchMode] = useState(false);

  let dispatch = useDispatch();
  let { services, pincodefilter, isLoading, error } = useSelector(
    (state) => state.reg
  );
  //console.log("All services",services)
  //all service laoded
  useEffect(() => {
    dispatch(allservice());
  }, [dispatch]);

  //pin code serach
  const handleSearch = () => {
    if (pincode.trim() !== "") {
      dispatch(pinfilterserv(pincode));
      setSearchMode(true);
    } else {
      dispatch(allservice());
      setSearchMode(false);
    }
  };

  // no deta will show
  const showServices =
    searchMode && pincodefilter?.length >= 0 ? pincodefilter : services;

  return (
    <div>
      {/* Seo Start */}
      <Helmet>
        <link rel="canonical" href="https://service.deepanwita.fun/service/api/services/all-services/" />
        <meta property="og:title" content="Homebuddy" />
        <meta property="og:site_name" content="Service" />
        <meta
          property="og:description"
          content="Find trusted home services near your area."
        />
      </Helmet>
      {/* Seo End */}

      {/* Header */}
      <div className="log-out cmn-gap py-4">
        <Container>
          <div className=" mb-4">
            <h3 className="tag m-0">My Home Buddy</h3>
          </div>

          {/* Search Box */}
          <Form method="post">
            <InputGroup className="search-box">
              <InputGroup.Text className=" bg-transparent text-white">
                <FaSearch size={20} />
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Enter Pincode or Service Name"
                autoComplete="off"
                className="search-input position-relative"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
              />
              <Button
                onClick={handleSearch}
                style={{
                  backgroundColor: "white",
                  color: "black",
                  position: "absolute",
                  right: "3px",
                  zIndex: "8",
                  padding: "10px",
                  top: "10px",
                  borderRadius: "50px",
                  textAlign: "center",
                  border: "none",
                  fontSize: "19px",
                  width: "150px",
                }}
              >
                Search
              </Button>
            </InputGroup>
          </Form>
        </Container>
      </div>

      {/* Service Card */}
      <Container className="py-4">
        {isLoading && <p>Loading services...</p>}
        {error && (
          <p className="text-danger">
            {error.detail || error.message || JSON.stringify(error)}
          </p>
        )}

        <Row className="g-4 ">
         
          {!isLoading && showServices?.length > 0
            ? showServices.map((service) => (
                <Col key={service.id} md={12} sm={12} xs={12} className=" p-0 ">
                  <Card className="shadow-sm border-0 rounded-4 overflow-hidden p-0">
                    <Row className=" card-bg g-0 align-items-center">
                      {/* Left Image */}
                      <Col md={5}>
                        <Card.Img
                          src={service.icon || "Img/default.png"}
                          alt={service.name}
                          className="h-100 w-100 object-fit-cover p-0"
                          style={{ borderRadius: "12px 0 0 12px" }}
                        />
                      </Col>

                      {/* Right Content */}
                      <Col md={7}>
                        <Card.Body className="p-4">
                          <Card.Title className="fw-bold fs-4 text-uppercase">
                            {service.name}
                          </Card.Title>

                          <Card.Text className="service-description text-dark">
                            {service.description}
                          </Card.Text>

                          <p className="fw-bold text-dark mb-2">
                            <span className="text-success">
                              ₹{service.price || "N/A"}
                            </span>
                          </p>

                          <div className="rating mb-3">
                            {[...Array(5)].map((_, i) => (
                              <FaStar key={i} color="yellow" />
                            ))}
                          </div>

                          <Button
                            variant="primary"
                            className="allservice-btn px-4"
                            as={Link}
                            to={`/allservice/subcat/${service.id}`}
                          >
                            Get Quick Service
                          </Button>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              ))
            : !isLoading &&
              searchMode && (
                <p className="text-center text-muted">
                  No services available for this pincode.
                </p>
              )}
        </Row>
      </Container>
    </div>
  );
};

export default Allsercies;
