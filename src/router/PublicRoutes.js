import LoginScreen from "../componentes/LoginScreen/LoginScreen";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";


const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginScreen />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default PublicRoutes;
