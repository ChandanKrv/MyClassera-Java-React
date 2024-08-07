// ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Element, allowedRoles }) => {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role");

  if (!token) {
    // If no token is present, redirect to login page
    return <Navigate to="/" />;
  }

  if (!allowedRoles.includes(userRole)) {
    // If the role is not allowed, redirect to access denied page
    return <Navigate to="/access-denied" />;
  }

  // If the role is allowed, render the component
  return Element;
};

export default ProtectedRoute;
