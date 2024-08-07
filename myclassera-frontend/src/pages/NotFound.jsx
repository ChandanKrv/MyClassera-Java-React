// NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-gray-900">404</h1>
        <p className="text-2xl font-semibold mt-4">Page Not Found</p>
        <p className="text-gray-600 mt-2">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
