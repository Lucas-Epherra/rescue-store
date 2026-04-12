import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(LoginContext);

  return user.logged ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;