import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 mt-1 text-white py-4 px-8 rounded-full shadow-md flex items-center justify-between mx-4">
      <Link
        to="/"
        className="text-xl font-semibold flex items-center space-x-2"
      >
        <FaHome className="text-white text-2xl" />
        <span>MyClassera</span>
      </Link>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/contact" className="hover:underline">
          Contact
        </Link>
        <Link to="/about" className="hover:underline">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
