import React from "react";
import { FaExclamationTriangle } from "react-icons/fa"; // Red icon from react-icons
import { useNavigate } from "react-router-dom";

const AccessDenied = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-md text-center max-w-md mx-auto">
        <FaExclamationTriangle className="text-red-500 text-6xl mb-4" />
        <h2 className="text-2xl font-bold mb-4">Access Denied</h2>
        <p className="text-gray-700 mb-6">
          You do not have permission to access this page.
        </p>
        <button
          onClick={handleGoHome}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default AccessDenied;
