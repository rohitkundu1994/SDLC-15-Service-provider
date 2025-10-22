import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../Redux/Slice/Providerslice";

const ProtectedRoute = ({ children }) => {
  const disptach = useDispatch()
  const navigate = useNavigate();
  const { user, role } = useSelector((state) => state.reg);
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    if (!user || role !== "provider") {
      
      navigate("/dashboard", { replace: true });
    } else {
      setAllowed(true);
    }
  }, [user, role, navigate]);

  if (!allowed) return null; 

  return children;
};

export default ProtectedRoute;
