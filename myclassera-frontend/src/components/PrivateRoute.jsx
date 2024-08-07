import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = ({ role, children }) => {
  const { user } = useAuth();

  if (!user || user.role !== role) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
