import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Header from "../Layout/Header";
import Home from "../Components/Home";
import Footer from "../Layout/Footer";
import About from "../Components/About";
import Services from "../Components/Services";
import Signup from "../Components/Signup";
import Login from "../Components/Login";
import Allsercies from "../Components/Allservices/Allsercies";
import Subcategory from "../Components/Allservices/Subcategory/Subcategory";
import Subcatitem from "../Components/Allservices/Subcategory/Allcatitembook/Subcatitem";
import Bookingform from "../Components/BookingForm/Bookingform";
import Providerform from "../Components/Providerform/Providerform";
import Protectedroute from "../Components/Protectedroute/Protectedroute";
import Detailsupdate from "../Components/Providerform/Updateform/Detailsupdate";
import Providerdashboard from "../Components/Providerpanel/Providerdashboard";
import Contactus from "../Components/Contatcus/Contactus";
import Showbooking from "../Components/BookingForm/Showallbooking/Showbooking";
import Ratings from "../Components/Rating/Ratings";

const Routing = () => {
  return (
    <div>
      <Router>
        <Header></Header>
        <Routes>
          {/* <===========All Pages===============> */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/reg" element={<Signup />} />
          <Route path="/login" element={<Login />} />
           <Route path="/contactus" element={<Contactus />} />
          {/* <=======All Services Routing=========> */}
          <Route path="/allservice" element={<Allsercies />} />
          <Route path="/allservice/subcat/:subid" element={<Subcategory />} />
          <Route path="/subcat/subitem/:subitemId" element={<Subcatitem />} />
          {/* <=========Booking Form===================> */}
          <Route path="/bookform" element={<Bookingform />} />
          <Route path="/bookhistory" element={<Showbooking />} />
          <Route path="/ratings/:id" element={<Ratings/>}/>
          {/* <===========Provider Dashboard====================> */}
          <Route
            path="/providerform"
            element={
              <Protectedroute>
                <Providerform />
              </Protectedroute>
            }
          />
          <Route
            path="/providerupdatefrm"
            element={
              <Protectedroute>
                <Detailsupdate />
              </Protectedroute>
            }
          />

          <Route
            path="/dashboard"
            element={
              <Protectedroute>
                <Providerdashboard />
              </Protectedroute>
            }
          />
          {/* <==========Ratings========> */}
        
        </Routes>

        <Footer></Footer>
      </Router>
    </div>
  );
};

export default Routing;
