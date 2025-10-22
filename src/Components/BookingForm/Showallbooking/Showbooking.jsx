import React, { useEffect } from "react";
import { Container, Table, Button, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  allbooking,
  deletebooking,
} from "../../../Redux/Slice/Providerslice";
import { showAlert, showAlertErr } from "../../../SwalAlret/swalalret";
import { Link } from "react-router-dom";
import "../../../Css/Style.css";

const Showbooking = () => {
  const dispatch = useDispatch();
  const { isLoading, error, bookfrm } = useSelector((state) => state.reg);

  useEffect(() => {
    dispatch(allbooking());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this booking?")) {
      dispatch(deletebooking(id))
        .then(() => showAlert("Success", "Booking deleted successfully!"))
        .catch(() => showAlertErr("Error", "Failed to delete booking!"));
    }
  };

  if (isLoading)
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
        <p>Loading bookings...</p>
      </div>
    );

  if (error)
    return (
      <div className="text-center mt-5 text-danger">
        <p>{error}</p>
      </div>
    );

  return (
    <Container fluid className="my-5">
      <h2 className="text-center mb-4 display-6 fw-bold text-dark">
        Your Booking History
      </h2>

      {bookfrm && bookfrm.length > 0 ? (
        <div className="table-responsive">
          <Table
            bordered
            hover
            className="align-middle text-center shadow-lg table-dark table-striped"
            style={{ borderRadius: "10px", overflow: "hidden" }}
          >
            <thead className="bg-primary text-white">
              <tr>
                <th>#</th>
                <th>Service</th>
                <th>Category</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
                <th>Provider</th>
                <th>Provider Contact</th>
                <th>Customer Contact</th>
                <th>Customer Address</th>
                <th>Pincode</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookfrm.map((booking, index) => (
                <tr key={booking.id}>
                  <td>{index + 1}</td>
                  <td className="fw-bold text-info">{booking.service}</td>
                  <td>{booking.catagory}</td>
                  <td>{booking.date}</td>
                  <td>{booking.time}</td>
                  <td>
                    <span
                      className={`badge ${
                        booking.status === "pending"
                          ? "bg-warning text-dark"
                          : booking.status === "confirmed"
                          ? "bg-primary"
                          : booking.status === "completed"
                          ? "bg-success"
                          : booking.status === "cancelled"
                          ? "bg-danger"
                          : "bg-secondary"
                      }`}
                    >
                      {booking.status}
                    </span>
                  </td>
                  <td>{booking.provider}</td>
                  <td>{booking.provider_contact}</td>
                  <td>{booking.customer_contact}</td>
                  <td>{booking.customer_address}</td>
                  <td>{booking.pincode}</td>
                  <td>
                    <div className="d-flex flex-column gap-2">
                      <Button
                        size="sm"
                        variant="outline-danger"
                        className="color-white"
                        onClick={() => handleDelete(booking.id)}
                      >
                        Delete
                      </Button>
                      {booking.status === "completed" && (
                        <Button
                          as={Link}
                          to={`/ratings/${booking.id}`}
                          size="sm"
                          variant="info"
                          className="text-white"
                        >
                          Rate Us
                        </Button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ) : (
        <p className="text-center mt-4 text-white">No bookings found.</p>
      )}
    </Container>
  );
};

export default Showbooking;
