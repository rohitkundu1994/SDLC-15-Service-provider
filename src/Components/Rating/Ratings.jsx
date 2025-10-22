import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { customerRating } from "../../Redux/Slice/Providerslice";
import { Container, Form, Button, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { showAlert, showAlertErr } from "../../SwalAlret/swalalret";
const Ratings = () => {
  let { id } = useParams();
  let form = useForm();
  let { register, handleSubmit, formState, reset } = form;
  let { errors } = formState;
  let dispatch = useDispatch();
  let { ratingsuccess, isLoading, error } = useSelector((state) => state.reg);
  let submissonRating = (data) => {
    if (!id) {
      console.log("Error", "Booking ID not found!", id);
      return;
    }
    let submissondata = {
      stars: data.stars,
      comment: data.comments,
    };
    dispatch(customerRating({ id, data: submissondata }))
    .then((res)=>{
      console.log("rating postg done",res)
      showAlert("success","Thanks For Rating")
    })
    .catch((err)=>{
      console.log("somthing wrong chake netowrk",err)
      showAlertErr("error", err.details || "Opps somthing wrong")
    })
  }
  return (
    <div>
      <Container
        className="my-5 p-4 shadow-sm border rounded"
        style={{ maxWidth: "500px" }}
      >
        <h3 className="text-center mb-4">Rate Your Experience</h3>
        <Form onSubmit={handleSubmit(submissonRating)}>
          
          <Form.Group className="mb-3" controlId="stars">
            <Form.Label>Select Rating</Form.Label>
            <Form.Select {...register("stars", { required: true })}>
              <option value="">Choose...</option>
              <option value="1">⭐</option>
              <option value="2">⭐⭐</option>
              <option value="3">⭐⭐⭐</option>
              <option value="4">⭐⭐⭐⭐</option>
              <option value="5">⭐⭐⭐⭐⭐</option>
            </Form.Select>
            {errors.stars && (
              <span className="text-danger">Please select a rating</span>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="comment">
            <Form.Label>Write a Comment</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Write your experience..."
              {...register("comments", { required: true })}
            />
            {errors.comments && (
              <span className="text-danger">Comments is required</span>
            )}
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="w-100"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />{" "}
                Submitting...
              </>
            ) : (
              "Submit Rating"
            )}
          </Button>

          {error && <p className="text-danger text-center mt-3">{error}</p>}
        </Form>
      </Container>
    </div>
  );
};

export default Ratings;
