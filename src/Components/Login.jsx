import React, { useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { showAlert, showAlertErr } from "../SwalAlret/swalalret";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { logdin, setUser } from "../Redux/Slice/Providerslice";
import { Helmet } from "react-helmet-async";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.reg);
  const form = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  // Submit handler
  const submitHandler = (data) => {
    const submission = {
      email: data.email,
      password: data.password,
    };

    dispatch(logdin(submission))
      .unwrap()
      .then((res) => {
        console.log("Login Response:", res);

        localStorage.setItem("access_token", res.access_token);
        localStorage.setItem("refresh_token", res.refresh_token);
        localStorage.setItem("user", JSON.stringify(res));

        dispatch(
          setUser({
            user: res.user,
            role: res.role,
            isProvider: res.is_provider,
            isCustomer: res.is_customer,
          })
        );

        showAlert("success", "Logged in successfully!");
        navigate("/");
      })
      .catch((err) => {
        console.error("Login Failed:", err);
        showAlertErr("error", err.detail || "Invaild Credential!");
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    const userData = localStorage.getItem("user");
    if (token && userData) {
      const parsedUser = JSON.parse(userData);
      dispatch(
        setUser({
          user: parsedUser.user,
          role: parsedUser.role,
          isProvider: parsedUser.is_provider,
          isCustomer: parsedUser.is_customer,
        })
      );
    }
  }, [dispatch]);

  return (
    <div>
      {/* <=======Seo start on Login page======> */}
      <Helmet>
        {/* Schema Markup for Website */}
        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Homebuddy",
          "url": "https://service.deepanwita.fun/accountapp/login/",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://service.deepanwita.fun/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }
      `}</script>

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://service.deepanwita.fun/accountapp/login/"
        />

        {/* Prevent Search Engines from Indexing Login Page */}
        <meta name="robots" content="noindex, nofollow" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Login" />
        <meta property="og:site_name" content="Homebuddy" />
        <meta
          property="og:url"
          content="https://service.deepanwita.fun/accountapp/login/"
        />
        <meta
          property="og:description"
          content="Securely log in to your Homebuddy AccountApp and manage your services with ease."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://service.deepanwita.fun/static/login-banner.jpg"
        />

        {/* Standard Meta Tags */}
        <meta name="title" content="Login to Your Account App Now" />
        <meta
          name="description"
          content="Log in to your AccountApp account now. Access your services fast and easy. Start managing your info with just a few clicks—secure and simple."
        />
      </Helmet>

      {/* <=======Seo end on Login page======> */}
      <section className="signup p-5">
        <Container>
          <div className="register-container">
            <h1 className="register-title text-center fs-4 mb-5">
              My Home Buddy Login
            </h1>

            <Form onSubmit={handleSubmit(submitHandler)}>
              {/* Email */}
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email Id</Form.Label>
                <Form.Control
                  type="email"
                  {...register("email", { required: "Email is required" })}
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
                    required: "Password is required",
                   
                  })}
                />
                {errors.password && (
                  <p className="text-danger">{errors.password.message}</p>
                )}
              </Form.Group>
                
              {/* Submit */}
              <Button
                type="submit"
                className="login-btn mt-3"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Login"}
              </Button>
            </Form>

            <div className="links-container mt-3 text-center">
              {/* <Link to="#">Forget Password?</Link> */}
              <br />
              <Link to="/reg">Don't have an account? Register</Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Login;
