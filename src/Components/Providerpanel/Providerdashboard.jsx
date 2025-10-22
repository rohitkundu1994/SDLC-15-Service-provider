import { useEffect } from "react";
import {
  Card,
  Container,
  Button,
  Row,
  Col,
  Table,
  Spinner,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaMoneyBillWave,
  FaWrench,
  FaIdBadge,
  FaClock,
  FaEdit,
  FaTrashAlt,
} from "react-icons/fa";
import {
  providermprofile,
  prvorder,
  prvprofiledelet,
  cfrmbook,
  bookedcancel,
  bookedcomplete,
} from "../../Redux/Slice/Providerslice";
import "../../Css/Style.css";
import { showAlert, showAlertErr } from "../../SwalAlret/swalalret";

const Providerdashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { providerfrm, providerorder, isLoading, error } = useSelector(
    (state) => state.reg
  );
  //console.log("provider detalis",providerfrm)
  // =================== Hooks ===================
  useEffect(() => {
    dispatch(providermprofile());
    dispatch(prvorder());
  }, [dispatch]);

  // =================== Handlers ===================
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete your profile?")) {
      dispatch(prvprofiledelet(id))
        .then(() => {
          showAlert("Deleted", "Provider profile deleted successfully!");
          navigate("/home");
        })
        .catch(() => showAlertErr("Error", "Failed to delete profile!"));
    }
  };

  const handleConfirm = (id) => {
    console.log("confirm Id", id);
    dispatch(cfrmbook(id))
      .then((res) => {
        showAlert("Success", "Booking Confirmed!");
        console.log("booking confirmd", res);
      })
      .catch(() => showAlertErr("Error", "Failed to confirm booking!"));
  };

  const handleCancel = (id) => {
    dispatch(bookedcancel(id))
      .then(() => showAlert("Cancelled", "Booking Cancelled!"))
      .catch(() => showAlertErr("Error", "Failed to cancel booking!"));
  };

  const handleComplete = (id) => {
    dispatch(bookedcomplete(id))
      .then(() => showAlert("Done", "Booking Completed!"))
      .catch(() => showAlertErr("Error", "Failed to complete booking!"));
  };

  // =================== Data ===================
  const profile = Array.isArray(providerfrm) ? providerfrm[0] : providerfrm;

  // =================== Loading / Error ===================
  if (isLoading)
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" />
      </div>
    );

  if (error) return <p className="text-danger text-center mt-5">{error}</p>;

  if (!profile || Object.keys(profile).length === 0)
    return <p className="text-center mt-5">No provider details found.</p>;

  // =================== JSX ===================
  return (
    <Container className="provider-dashboard mt-5 mb-5">
      <h3 className="text-center dashboard-title mb-4">
        <FaIdBadge className="me-2" />
        Provider Dashboard
      </h3>

      {/* Provider Profile Card */}
      <Card className="provider-card glass-card p-4 shadow-lg border-0 rounded-5 mb-5">
        <Row>
          <Col
            md={4}
            className="d-flex justify-content-center align-items-center"
          >
            {profile.image ? (
              <img
                src={profile.image}
                alt="Provider"
                className="rounded-5 provider-img shadow-sm border"
              />
            ) : (
              <div className="text-muted text-center">No Image Available</div>
            )}
          </Col>
          <Col md={8}>
            <div className="provider-info">
              <p>
                <FaIdBadge className="icon" /> <strong>ID:</strong> {profile.id}
              </p>
              <p>
                <FaWrench className="icon" /> <strong>Service:</strong>{" "}
                {profile.service}
              </p>
              <p>
                <FaClock className="icon" /> <strong>Experience:</strong>{" "}
                {profile.experience} years
              </p>
              <p>
                <FaMoneyBillWave className="icon" />{" "}
                <strong>Charges/hr:</strong> ₹{profile.chargesPerHour}
              </p>
              <p>
                <FaEnvelope className="icon" /> <strong>Email:</strong>{" "}
                {profile.provider}
              </p>
              <p>
                <FaMapMarkerAlt className="icon" /> <strong>Location:</strong>{" "}
                {profile.location}, {profile.pincode}
              </p>
            </div>

            <div className="d-flex justify-content-between mt-4">
              <Button
                as={Link}
                to="/providerupdatefrm"
                className="update-btn px-4 py-2 d-flex align-items-center gap-2"
              >
                <FaEdit /> Update
              </Button>

              <Button
                variant="danger"
                className="delete-btn px-4 py-2 d-flex align-items-center gap-2"
                onClick={() => handleDelete(profile.id)}
              >
                <FaTrashAlt /> Delete
              </Button>
            </div>
          </Col>
        </Row>
      </Card>

      <h3 className="text-center mb-4">📋 Provider All Orders</h3>
      {providerorder && providerorder.length > 0 ? (
        <Table
          striped
          bordered
          hover
          responsive
          className="shadow-sm rounded-4"
        >
          <thead className="table-dark text-center">
            <tr>
              <th>#</th>
              <th>Customer</th>
              <th>Service</th>
              <th>Category</th>
              <th>Pincode</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="text-center align-middle">
            {providerorder.map((order, index) => (
              <tr key={order.id}>
                <td>{index + 1}</td>
                <td>{order.customer}</td>
                <td>{order.service}</td>
                <td>{order.catagory}</td>
                <td>{order.pincode}</td>
                <td>{order.date}</td>
                <td>{order.time}</td>
                <td>
                  <span
                    className={`badge ${
                      order.status === "pending"
                        ? "bg-warning text-dark"
                        : order.status === "completed"
                        ? "bg-success"
                        : order.status === "cancelled"
                        ? "bg-danger"
                        : "bg-secondary"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td>{order.customer_address}</td>
                <td>
                  <div className="d-flex justify-content-center gap-2">
                    <Button
                      size="sm"
                      variant="success"
                      onClick={() => handleConfirm(order.id)}
                      title={
                        order.status === "cancelled"
                          ? "Booking is cancelled"
                          : order.status === "completed"
                          ? "Booking is already completed"
                          : ""
                      }
                      disabled={
                        order.status === "cancelled" ||
                        order.status === "completed"
                      }
                    >
                      Confirm
                    </Button>
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => handleCancel(order.id)}
                      disabled={order.status === "completed"}
                      title={
                        order.status === "completed"
                          ? "Booking is already completed"
                          : ""
                      }
                    >
                      Cancel
                    </Button>
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={() => handleComplete(order.id)}
                      disabled={
                        order.status === "cancelled" ||
                        order.status === "completed"
                      }
                      title={
                        order.status === "cancelled"
                          ? "Booking is cancelled"
                          : order.status === "completed"
                          ? "Booking is already completed"
                          : ""
                      }
                    >
                      Complete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p className="text-center mt-5">No bookings found.</p>
      )}
    </Container>
  );
};

export default Providerdashboard;
