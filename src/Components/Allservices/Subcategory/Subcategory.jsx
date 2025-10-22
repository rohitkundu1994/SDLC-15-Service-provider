import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Container,
  Form,
  InputGroup,
  Card,
  Button,
  Row,
  Col,
  ListGroup,
} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { allcat } from "../../../Redux/Slice/Providerslice";

const Subcategory = () => {
  let { subid } = useParams();
  let dispatch = useDispatch();
  let { subsurb, isLoading, error } = useSelector((state) => state.reg);
  // console.log("All Category subservice responce", subsurb);
  const currentService = subsurb.filter(
    (sub) => sub.service_id === Number(subid)
  );
  useEffect(() => {
    dispatch(allcat(subid));
  }, [dispatch, subid]);
  return (
    <div className="log-out cmn-gap py-4">
      <Container>
        <h3 className="tag m-0">My Home Buddy</h3>

        {/* Search Bar */}
        <Form method="post" className="mt-3">
          <InputGroup className="search-box">
            <InputGroup.Text className="bg-transparent text-white">
              <FaSearch size={20} />
            </InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Search For Something"
              autoComplete="off"
              className="search-input"
            />
          </InputGroup>
        </Form>
        {/* <==========All Category ========> */}
        <Row className="align-item-center mt-5">
          {currentService.length > 0 ? (
            currentService.map((item) => (
              <Col md={6} key={item.id} className="mb-4 offering-item">
                <Card className="h-100 shadow-sm">
                  <Card.Img
                    variant="top"
                    src={item.image}
                    alt={item.name}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {item.service}
                    </Card.Subtitle>
                    <Card.Text  className="text-dark fw-500">
                      {item.description.slice(0,199)}.
                    </Card.Text>

                    <Button variant="primary" className="mt-2 w-100 action-button" as={Link} to={`/subcat/subitem/${item.id}`}>
                      See Details
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p>No Subcategories found.</p>
          )}
        </Row>
        {/* <==========All Category ========> */}
      </Container>
    </div>
  );
};

export default Subcategory;
