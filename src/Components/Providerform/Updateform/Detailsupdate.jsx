import React, { useEffect, useState } from "react";
import { Form, Button, Container ,Image} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateput, updatepatch } from "../../../Redux/Slice/Providerslice";
import { showAlert, showAlertErr } from "../../../SwalAlret/swalalret";
import { useNavigate } from "react-router-dom";

const Detailsupdate = () => {
  const dispatch = useDispatch();
  const { providerfrm } = useSelector((state) => state.reg);
  const { register, handleSubmit, reset, watch } = useForm();
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (providerfrm) {
      const profile = Array.isArray(providerfrm) ? providerfrm[0] : providerfrm;
      reset({
        service_name: profile.service,
        service_id: profile.service_id,
        pincode: profile.pincode,
        experience: profile.experience,
        chargesPerHour: profile.chargesPerHour,
        provider: profile.provider,
        location: profile.location,
      });
      setPreview(profile.image || null);
    }
  }, [providerfrm, reset]);
  const imageFile = watch("image");
  useEffect(() => {
    if (imageFile && imageFile[0]) {
      const file = imageFile[0];
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  }, [imageFile]);
  const onSubmit = (data) => {
    const profile = Array.isArray(providerfrm) ? providerfrm[0] : providerfrm;
    if (!profile?.id) return console.error("Provider ID missing");

    const formData = new FormData();
    formData.append("service_name", data.service_name);
    formData.append("service_id", data.service_id);
    formData.append("pincode", data.pincode);
    formData.append("experience", data.experience);
    formData.append("chargesPerHour", data.chargesPerHour);
    formData.append("provider", data.provider);
    formData.append("location", data.location);
    if (data.image?.[0]) formData.append("image", data.image[0]);

    const isPartialUpdate = data.image?.[0] || data.location?.trim() === "";

    const updateAction = isPartialUpdate ? updatepatch : updateput;

    dispatch(updateAction({ id: profile.id, data: formData }))
      .unwrap()
      .then((res) => {
        showAlert(
          "Success",
          isPartialUpdate
            ? " Profile updated successfully (Single Field Update)"
            : " Profile updated successfully (Full Profile Update)"
        );
        console.log(
          isPartialUpdate
            ? "Partial Update Success (Patch)"
            : "Full Update Success (Put)",
          res
        );
        navigate("/dashboard");
      })
      .catch((err) => {
        showAlertErr("Error", err.detail || "Something went wrong!");
      });
  };

  return (
    <Container className="mt-4">
      <h3 className="text-center">Update Provider Details</h3>

      <Form onSubmit={handleSubmit(onSubmit)}>
        {preview && (
          <div className="text-center mb-3">
            <Image
              src={preview}
              alt="Current Provider"
              roundedCircle
              fluid
              style={{ width: "150px", height: "150px", objectFit: "cover", border: "2px solid #ddd", marginTop:"10px"}}
            />
            <p className="text-muted mt-2">Current Profile Picture</p>
          </div>
        )}
        <Form.Group className="mb-3" controlId="service_name">
          <Form.Label>Service Name</Form.Label>
          <Form.Control type="text" {...register("service_name")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="service_id">
          <Form.Label>Service ID</Form.Label>
          <Form.Control type="number" {...register("service_id")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="pincode">
          <Form.Label>Pincode</Form.Label>
          <Form.Control type="number" {...register("pincode")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="experience">
          <Form.Label>Experience</Form.Label>
          <Form.Control type="number" {...register("experience")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="chargesPerHour">
          <Form.Label>Charges per Hour</Form.Label>
          <Form.Control type="text" {...register("chargesPerHour")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="provider">
          <Form.Label>Provider Email</Form.Label>
          <Form.Control type="email" {...register("provider")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="location">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" {...register("location")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="image">
          <Form.Label>Upload New Image</Form.Label>
          <Form.Control type="file" {...register("image")} />
        </Form.Group>
         
        <Button type="submit" className="register-btn w-100">
          Update Profile
        </Button>
      </Form>
    </Container>
  );
};

export default Detailsupdate;
