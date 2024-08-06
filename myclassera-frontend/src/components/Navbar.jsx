import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          MyClassEra
        </Link>
        <div>
          <Link to="/students" className="mx-2 hover:underline">
            Students
          </Link>
          <Link to="/subjects" className="mx-2 hover:underline">
            Subjects
          </Link>
          <Link to="/enroll" className="mx-2 hover:underline">
            Enroll
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
