import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { regusr } from "../Redux/Slice/Providerslice";
import { showAlert, showAlertErr } from "../SwalAlret/swalalret";
import { Helmet } from "react-helmet-async";
const Signup = () => {
  let navigate = useNavigate();
  let form = useForm();
  let { register, handleSubmit, watch, formState } = form;
  let { errors } = formState;
  const password = watch("password");
  let dispatch = useDispatch();
  let { user, isLoading, error } = useSelector((state) => state.reg);
  let submitHandeler = (data) => {
    console.log("Res", data);
    let submissondata = {
      first_name: data.firstname,
      last_name: data.lastname,
      username: data.username,
      email: data.email,
      password: data.password,
      password_confirm: data.confirmpassword,
      role: data.role,
      contact: data.contact,
      address: data.address,
    };
    //  console.log("Submissondata register",submissondata)
    dispatch(regusr(submissondata))
      .then((res) => {
        console.log("New Res", res);
        showAlert("Success", "Register Successfully!");
        navigate("/login");
      })
      .catch((error) => {
        console.log("Somthing wrong", error);
        showAlertErr("error", err.detail || "Registration failed!");
      });
  };
  return (
    <div>
      <div className="signup p-5">
        <Container>
          <div className="register-container">
            <h1 className="register-title text-center fs-4 mb-5 me-4">
              Create Your My Home Buddy Account
            </h1>

            <Form id="registerForm" onSubmit={handleSubmit(submitHandeler)}>
              {/* First & Last Name */}
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      {...register("firstname", {
                        required: {
                          value: true,
                          message: "First Name Is Required",
                        },
                      })}
                    />
                    {errors.firstname && (
                      <p className="text-danger">{errors.firstname.message}</p>
                    )}
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3" controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      {...register("lastname", {
                        required: {
                          value: true,
                          message: "Last Name Is Required",
                        },
                      })}
                    />
                    {errors.lastname && (
                      <p className="text-danger">{errors.lastname.message}</p>
                    )}
                  </Form.Group>
                </Col>
              </Row>
              {/* ///Username */}
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="username"
                  {...register("username", {
                    required: {
                      value: true,
                      message: "Username Is Required",
                    },
                  })}
                />
                {errors.username && (
                  <p className="text-danger">{errors.username.message}</p>
                )}
              </Form.Group>
              {/* Email */}
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email Id</Form.Label>
                <Form.Control
                  type="email"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email Is Required",
                    },
                    pattern: {
                      value: /^(?!.*\.\.)(?!\.)(?!.*\.$)[A-Za-z0-9](?:[A-Za-z0-9\.]{0,62}[A-Za-z0-9])?@gmail\.com$/i,
                      message: "Please enter a valid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-danger">{errors.email.message}</p>
                )}
              </Form.Group>

              {/* Password */}
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password Is Required",
                    },
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                      message:
                        "Password must be at least 8 characters, include uppercase, lowercase, number, and special character",
                    },
                  })}
                />
                {errors.password && (
                  <p className="text-danger">{errors.password.message}</p>
                )}
              </Form.Group>

              {/* Confirm Password */}
              <Form.Group className="mb-3" controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  {...register("confirmpassword", {
                    required: {
                      value: true,
                      message: "Confirmpassword Is Required",
                    },
                    validate: (value) =>
                      value === password || "Password do not match",
                  })}
                />
                {errors.confirmpassword && (
                  <p className="text-danger">
                    {errors.confirmpassword.message}
                  </p>
                )}
              </Form.Group>

              {/* Role */}
              <Form.Group className="mb-3" controlId="role">
                <Form.Label>Role</Form.Label>
                <Form.Select
                  {...register("role", {
                    required: {
                      value: true,
                      message: "Role is Required",
                    },
                  })}
                >
                  <option value="">Select your role</option>
                  <option value="customer">Customer</option>
                  <option value="provider">Service Provider</option>
                </Form.Select>
                {errors.role && (
                  <p className="text-danger">{errors.role.message}</p>
                )}
              </Form.Group>

              {/* Contact No */}
              <Form.Group className="mb-3" controlId="contactNo">
                <Form.Label>Contact No</Form.Label>
                <Form.Control
                  type="tel"
                  {...register("contact", {
                    required: {
                      value: true,
                      message: "Phone No Is Required",
                    },
                  })}
                />
                {errors.contact && (
                  <p className="text-danger">{errors.contact.message}</p>
                )}
              </Form.Group>

              {/* Address */}
              <Form.Group className="mb-3" controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  {...register("address", {
                    required: {
                      value: true,
                      message: "Address Is Required",
                    },
                  })}
                />
                {errors.address && (
                  <p className="text-danger">{errors.address.message}</p>
                )}
              </Form.Group>

              {/* Submit Button */}
              <Button type="submit" className="register-btn">
                Register
              </Button>
            </Form>

            <div className="links-container mt-3 text-center">
              <Link to="/login">Already have an account? Login</Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Signup;
