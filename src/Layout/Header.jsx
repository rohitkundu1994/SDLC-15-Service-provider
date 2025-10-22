import React, { useEffect, useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Button,
  Offcanvas,
  Dropdown,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  clearUser,
  fetchProfile,
  logoutusr,
  setUser,
} from "../Redux/Slice/Providerslice";
import { showAlert, showAlertErr } from "../SwalAlret/swalalret";
import "../Css/Style.css";
import { FaUserCheck,FaServer } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, role } = useSelector((state) => state.reg);

  const [profileOpen, setProfileOpen] = useState(false);
  const [activelink,Setactivelink] = useState("")
  const clicktoactive=(path)=>{
    Setactivelink(path)
  }
  const handleLogout = () => {
    dispatch(logoutusr())
      .unwrap()
      .then(() => {
        dispatch(clearUser());
        showAlert("success", "Logout Successfully!");
        navigate("/")
      })
      .catch((error) => showAlertErr(error, "Logout Failed!"));
  };

  // Load user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsed = JSON.parse(storedUser);
      dispatch(
        setUser({
          user: parsed.user,
          role: parsed.role,
          isProvider: parsed.is_provider,
          isCustomer: parsed.is_customer,
          is_admin: parsed.is_admin,
        })
      );
    } else {
      dispatch(clearUser());
    }
  }, [dispatch]);

  useEffect(() => {
    if (!user) {
      dispatch(fetchProfile());
    }
  }, [dispatch, user]);

  return (
    <header>
      <Navbar expand="md" variant="dark" className="header">
        <Container>
          {/* Logo */}
          <Navbar.Brand as={Link} to="/">
            <img src="Img/logo1.png" alt="logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar" className="justify-content-between ">
            {/* Center Menu */}
            <Nav className="mx-auto gap-3">
              <Nav.Link as={Link} to="/" 
                  onClick={()=>clicktoactive("/")}
                  className={`nav-link text-white fs-5 ${
                    activelink==="/" ? "active-link" : ""
                  }`}
                  >
                Home
              </Nav.Link>
              {role !== "provider" && (
                <Dropdown>
                  <Dropdown.Toggle variant="link" className="text-white fs-5" >
                    Services
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/services" onClick={()=>clicktoactive("/Services")}
                  className={`nav-link text-dark   ${
                    activelink==="/Services" ? "active-link text-warning" : ""
                  }`}>
                      Services
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/allservice" onClick={()=>clicktoactive("/allservice")}
                  className={`nav-link text-dark  ${
                    activelink==="/allservice" ? "active-link" : ""
                  }`}>
                      All Services
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              )}
              <Nav.Link as={Link} to="/about" onClick={()=>clicktoactive("/about")}
                  className={`nav-link text-white fs-5 ${
                    activelink==="/about" ? "active-link" : ""
                  }`}>
                About Us
              </Nav.Link>
              {role !== "provider" && (
                <Nav.Link as={Link} to="/contactus"  onClick={()=>clicktoactive("/contactus")}
                  className={`nav-link text-white fs-5 ${
                    activelink==="/contactus" ? "active-link" : ""
                  }`}>
                  Contact Us
                </Nav.Link>
              )}
            </Nav>

            {/* Right Side: Profile / Sign In */}
            <div>
              {user && role ? (
                <Button
                  onClick={() => setProfileOpen(true)}
                  className="rounded-pill px-4  fs-6 "
                  style={{ background: "#fff", color: "#232323ff", paddingTop:"9px"}}
                >
                  Profile <FaUserCheck style={{color:"rgba(43, 43, 43, 1)"}} size={24} className="mb-2" />
                </Button>
              ) : (
                <Button
                  as={Link}
                  to="/login"
                  className="login-button rounded-pill px-4 py-2"
                  style={{ background: "#fff", color: "#232323ff" }}
                >
                  Sign In
                </Button>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Profile Offcanvas */}
      {user && role && (
        <Offcanvas
          show={profileOpen}
          onHide={() => setProfileOpen(false)}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="text-white">Profile <FaUserCheck style={{color:"rgba(255, 255, 255, 1)"}} size={24} className="mb-2" /></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <p>
              <strong>Name:</strong> {user.first_name} {user.last_name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Username:</strong> {user.username}
            </p>
            <p>
              <strong>Contact:</strong> {user.contact}
            </p>
            <p>
              <strong>Address:</strong> {user.address}
            </p>
            <p>
              <strong>As:</strong> {user.role || "customer"}
            </p>

            {role === "provider" && (
              <>
                <Button
                  as={Link}
                  to={`/dashboard`}
                  className="mt-3 w-100"
                  style={{ background: "#fff", color: "#000" }}
                >
                  Dashboard <FaServer size={24} color="black" className="mb-1 ms-2"/>
                </Button>
                <Button
                  as={Link}
                  to={`/providerform`}
                  className="mt-2 w-100"
                  style={{ background: "#fff", color: "#000" }}
                >
                  Form
                </Button>
              </>
            )}

            <Button
              onClick={handleLogout}
              className="mt-3 w-100 "
              style={{ background: "#f12828ff", color: "#fff", border:"none" }}
            >
              Logout <IoLogOutOutline size={24} color="white" />
            </Button>
            {role==="customer"&&(
              <>
              <Button style={{
                background: "#fff", color: "#000"
                
              }}
              as={Link}
              to='bookhistory'
              className="w-100 mt-3"
              >
                My Book
              </Button>
              </>
            )}
          </Offcanvas.Body>
        </Offcanvas>
      )}
    </header>
  );
};

export default Header;
