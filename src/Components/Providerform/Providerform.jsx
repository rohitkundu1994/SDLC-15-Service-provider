import React, { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { providerform } from "../../Redux/Slice/Providerslice";
import { Link, useNavigate } from "react-router-dom";
import { showAlert, showAlertErr } from "../../SwalAlret/swalalret";

const Providerform = () => {
  let form = useForm();
  let { register, handleSubmit, formState, reset } = form;
  const navigate = useNavigate();
  let { errors } = formState;
  let { providerfrm, isLoading, error } = useSelector((state) => state.reg);
  console.log("prvfrm", providerfrm);
  let dispatch = useDispatch();
  let onSubmit = (data) => {
    console.log("providespecialdata", data);
    let formdata = new FormData();
    // formdata.append("service_id", data.service_id);
    formdata.append("service_name", data.service_name);
    formdata.append("pincode", data.pincode);
    formdata.append("experience", data.experience);
    formdata.append("chargesPerHour", data.chargesPerHour.toString());
    formdata.append("provider", data.provider);
    formdata.append("location", data.location);
    if (data.image && data.image[0]) {
      formdata.append("image", data.image[0]);
    }
    dispatch(providerform(formdata))
      .then((res) => {
        console.log("provider form submit done", res);
        navigate("/dashboard");
        showAlert("success", "Registration Done");
      })
      .catch((err) => {
        console.log("somthing wrong 404", err);
        showAlertErr("error", "Registration Faild");
      });
    // reset()
  };
  return (
    <div>
      <Container className="mt-4">
        <h3 className="text-center">Provider Service Form</h3>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="service">
            <Form.Label>Service</Form.Label>
            <Form.Control
              type="text"
              name="service"
              {...register("service_name", {
                required: {
                  value: true,
                  message: "service name is required",
                },
              })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="pincode">
            <Form.Label>Pincode</Form.Label>
            <Form.Control
              type="number"
              name="pincode"
              {...register("pincode", {
                required: {
                  value: true,
                  message: "pincode  is required",
                },
              })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="experience">
            <Form.Label>Experience (years)</Form.Label>
            <Form.Control
              type="number"
              name="experience"
              {...register("experience", {
                required: {
                  value: true,
                  message: "experience is required",
                },
              })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="chargesPerHour">
            <Form.Label>Charges per Hour</Form.Label>
            <Form.Control
              type="text"
              name="chargesPerHour"
              {...register("chargesPerHour", {
                required: {
                  value: true,
                  message: "enter your charges",
                },
              })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="provider">
            <Form.Label>Provider Email</Form.Label>
            <Form.Control
              type="email"
              name="provider"
              {...register("provider", {
                required: {
                  value: true,
                  message: "email is required",
                },
              })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="location">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              name="location"
              {...register("location", {
                required: {
                  value: true,
                  message: "Enter your location",
                },
              })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="image">
            <Form.Label>Upload Image</Form.Label>
            <Form.Control
              type="file"
              name="image"
              {...register("image", {
                required: {
                  value: true,
                },
              })}
            />
          </Form.Group>

          <Button type="submit" className="register-btn">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Providerform;
