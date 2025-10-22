import Swal from "sweetalert2";
export const showAlert = (type, message) => {
  Swal.fire({
    icon: "success",
    title: message,
    confirmButtonText: "OK",
    showConfirmButton: true,
    timer: type === "success" ? 1500 : undefined,
  });
};
export const showAlertErr = (type, message) => {
  Swal.fire({
    icon: "error",
    title: message,
    confirmButtonText: "OK",
    showConfirmButton: true,
    timer: type === "success" ? 1500 : undefined,
  });
};
