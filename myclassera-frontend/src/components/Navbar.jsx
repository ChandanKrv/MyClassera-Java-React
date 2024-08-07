import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white font-bold text-xl">MyApp</div>
          <div className="space-x-4">
            <Link to="/" className="text-white">
              Home
            </Link>
            <Link to="/login" className="text-white">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
