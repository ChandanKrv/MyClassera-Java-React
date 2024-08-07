import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-700 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          MyClassera
        </Link>
        <div>
          <Link to="/" className="mx-2 hover:underline">
            Home
          </Link>

          <Link to="/signup" className="mx-2 hover:underline">
            Signup
          </Link>

          <Link to="/login" className="mx-2 hover:underline">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
