// Logout.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../api/api"; // Import the logout function

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const performLogout = async () => {
      try {
        await logoutUser(); // Call the logout API
        localStorage.removeItem("token");
        localStorage.removeItem("role"); // Clear the role from localStorage
        navigate("/"); // Redirect to login page
      } catch (error) {
        console.error("Logout failed:", error);
        navigate("/"); // Redirect to login page in case of error
      }
    };

    performLogout();
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-lg">Logging out...</p>
    </div>
  );
};

export default Logout;
