import { useState, useEffect } from "react";
import { getSubjects } from "../api/api"; // Make sure to use the correct path for your api.js
import { Link } from "react-router-dom";
import "./Homepage.css"; // Create this file for custom styles

const Homepage = () => {
  const [subjects, setSubjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchSubjects();
  }, [currentPage]);

  const fetchSubjects = async () => {
    try {
      const response = await getSubjects(currentPage);
      setSubjects(response.data.content);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error("Error fetching subjects:", error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getRandomGradient = () => {
    const colors = [
      "#006400",
      "#6A11CB", // Dark Blue
      "#2575FC", // Medium Blue
      "#00274D", // Dark Blue
      "#4B0082",
      "#191970", // Midnight Blue
      "#0033A0", // Royal Blue
      "#8B0000", // Dark Red
      "#B22222",
      "#000000",
      "#191970", // Firebrick
      "#800000", // Maroon
      "#228B22", // Forest Green
      "#556B2F", // Dark Olive Green
      "#2E8B57", // Sea Green
      "#006400", // Dark Green
      "#000000",
    ];

    const color1 = colors[Math.floor(Math.random() * colors.length)];
    const color2 = colors[Math.floor(Math.random() * colors.length)];
    return `linear-gradient(135deg, ${color1}, ${color2})`;
  };

  return (
    <div className="homepage">
      <h1 className="text-2xl font-bold mb-4">Subjects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {subjects.map((subject) => (
          <div
            key={subject.id}
            className="card p-4 shadow-md rounded-lg"
            style={{ background: getRandomGradient() }}
          >
            <h2 className="text-xl font-semibold mb-2 text-white">
              {subject.name}
            </h2>
            <p className="text-gray-200">{subject.description}</p>
            <Link
              to={`/enroll/${subject.id}`}
              className="mt-4 inline-block px-4 py-2 bg-blue-500 items-center text-white rounded-lg text-center"
            >
              Enroll
            </Link>
          </div>
        ))}
      </div>
      <div className="pagination mt-4">
        <button
          disabled={currentPage === 0}
          onClick={() => handlePageChange(currentPage - 1)}
          className="px-4 py-2 bg-gray-300 rounded-lg mr-2"
        >
          Previous
        </button>
        <span>
          Page {currentPage + 1} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages - 1}
          onClick={() => handlePageChange(currentPage + 1)}
          className="px-4 py-2 bg-gray-300 rounded-lg ml-2"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Homepage;
