import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { bookingForm } from "../../Redux/Slice/Providerslice";
import { showAlert, showAlertErr } from "../../SwalAlret/swalalret";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Bookingform = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const dispatch = useDispatch();
  const { bookfrm, isLoading, error, user } = useSelector((state) => state.reg);

  const onSubmit = (data) => {
  
    const submissonData = {
      catagory_name: data.catagory_name,
      service_name: data.service_name,
      pincode: data.pincode,
      date: data.date,
      time: data.time,
    };

    dispatch(bookingForm(submissonData))
      .then((res) => {
        console.log("Booking successful", res);
        showAlert("Success", "Booking Successfully!");
        navigate("/bookhistory");
      })
      .catch((err) => {
        console.log("Something wrong", err);
        showAlertErr("error", err.detail || "Booking failed!");
      });

    reset();
  };

  return (
    <section className="booking-service cmn-gap py-5">
      {/* <===========Seo Start==============> */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Booking",
            name: "Home Buddy",
            description:
              "HomeBuddy is a home services platform that connects customers with trusted professionals for household needs such as cleaning, appliance repair, painting, pest control, plumbing, electrical work, and more. The website focuses on providing reliable, affordable, and convenient doorstep services, ensuring quality and customer satisfaction through trained service partners and transparent pricing.",
            image: "https://homebuddy.co.in/",
            step: {
              "@type": "Booking",
              text: "",
            },
          })}
        </script>

        <link
          rel="canonical"
          href="https://service.deepanwita.fun/bookings/api/customer/my-bookings/"
        />

        <meta property="og:title" content="Booking" />
        <meta property="og:site_name" content="Homebuddy" />
        <meta
          property="og:url"
          content="https://service.deepanwita.fun/bookings/api/customer/"
        />
        <meta
          property="og:description"
          content="HomeBuddy is a home services platform that connects customers with trusted professionals for household needs such as cleaning, appliance repair, painting, pest control, plumbing, electrical work, and more. The website focuses on providing reliable, affordable, and convenient doorstep services, ensuring quality and customer satisfaction through trained service partners and transparent pricing."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://service.deepanwita.fun/bookings/api/customer/15/"
        />

        <meta name="title" content="Book Home Services Easily Online Now" />
        <meta
          name="description"
          content="Book your home services now at HomeBuddy. Get quick fixes for plumbing, cleaning, or repairs. Easy online booking saves you time—start today!"
        />
      </Helmet>
      {/* <===========Seo End==============> */}
      <Container>
        <div className="form-header text-center mb-4">
          <h1>Booking Your Services</h1>
        </div>

        <div className="form-body">
          <Form onSubmit={handleSubmit(onSubmit)}>
            {/* Date & Time */}
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="date">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="date"
                    {...register("date", { required: true })}
                  />
                  {errors.date && (
                    <span className="text-danger">Date is required</span>
                  )}
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="time">
                  <Form.Label>Time</Form.Label>
                  <Form.Control
                    type="time"
                    {...register("time", { required: true })}
                  />
                  {errors.time && (
                    <span className="text-danger">Time is required</span>
                  )}
                </Form.Group>
              </Col>
            </Row>

            {/* Service */}
            <Form.Group className="mb-3" controlId="service">
              <Form.Label>Service Name</Form.Label>
              <Form.Select {...register("service_name", { required: true })}>
                <option value="">Select a service</option>
                <option value="Plumbing">Plumbing</option>
                <option value="Electrical">Electrical</option>
                <option value="Carpentry">Carpentry</option>
                <option value="Painting">Painting</option>
                <option value="Home cleaning">Home cleaning</option>
                <option value="Garden Cleaning">Garden Cleaning</option>
                 
              </Form.Select>
              {errors.service && (
                <span className="text-danger">Service is required</span>
              )}
            </Form.Group>

            {/* Category */}
            <Form.Group className="mb-3" controlId="catagory">
              <Form.Label>Category Name</Form.Label>
              <Form.Select {...register("catagory_name", { required: true })}>
                <option value="">Select category</option>
                <option value="Tap & Mixer">Tap & Mixer</option>
                <option value="Bath fittings">Bath fittings</option>
                <option value="Fan">Fan</option>
                <option value="Switch & socket">Switch & socket</option>
                <option value="Drawer Fittings">Drawer Fittings</option>
                <option value="Window & curtain">Window & curtain</option>
                <option value="Interior Painting">Interior Painting</option>
                <option value="Exterior Painting">Exterior Painting</option>
                <option value="Bathroom Cleaning">Bathroom Cleaning</option>
                <option value="Kitchen Cleaning">Kitchen Cleaning</option>
                <option value="Sofa and Carpet cleaning">Sofa and Carpet cleaning</option>
                <option value="lawn Maintenance">lawn Maintenance</option>
                <option value="Garden Decoration">Garden Decoration</option>
              </Form.Select>
              {errors.catagory && (
                <span className="text-danger">Category is required</span>
              )}
            </Form.Group>

            {/* Pincode */}
            <Form.Group className="mb-3" controlId="pincode">
              <Form.Label>Pincode</Form.Label>

              <Form.Control
                type="number"
                {...register("pincode", { required: true })}
              />

              {errors.pincode && (
                <span className="text-danger">Pincode is required</span>
              )}
            </Form.Group>

            {/* Policies */}
            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="I agree to the Cancellation Policy"
                {...register("cancellationPolicy", { required: true })}
              />
              {errors.cancellationPolicy && (
                <span className="text-danger">
                  You must agree to the policy
                </span>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="I agree to the Terms & Conditions"
                {...register("terms", { required: true })}
              />
              {errors.terms && (
                <span className="text-danger">You must agree to terms</span>
              )}
            </Form.Group>

            {/* Submit */}
            <Button type="submit" className="w-100 register-btn">
              Proceed
            </Button>
          </Form>
        </div>
      </Container>
    </section>
  );
};

export default Bookingform;
