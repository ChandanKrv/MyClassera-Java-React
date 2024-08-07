import React, { useState, useEffect } from "react";
import {
  fetchStudents,
  addStudent,
  deleteStudent,
  updateStudent,
} from "../api/api";
import "./SubjectsTable.css"; // Make sure to create this CSS file for custom styles

const StudentsTable = () => {
  const [students, setStudents] = useState([]);
  const [newStudentName, setNewStudentName] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchStudentsData();
  }, [currentPage]);

  const fetchStudentsData = async () => {
    try {
      const response = await fetchStudents();
      console.log("Response data:", response); // Log to verify the response structure
      setStudents(response.students || []); // Adjust based on the actual response structure
      // If pagination details are part of the response, adjust accordingly
      setTotalPages(response.totalPages || 1);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const handleAddStudent = async () => {
    try {
      await addStudent({ name: newStudentName });
      setNewStudentName("");
      fetchStudentsData(); // Refresh students list
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  const handleDeleteStudent = async (id) => {
    try {
      await deleteStudent(id);
      fetchStudentsData(); // Refresh students list
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getRandomGradient = () => {
    const colors = [
      "#006400",
      "#6A11CB",
      "#2575FC",
      "#00274D",
      "#4B0082",
      "#191970",
      "#0033A0",
      "#8B0000",
      "#B22222",
      "#000000",
      "#191970",
      "#800000",
      "#228B22",
      "#556B2F",
      "#2E8B57",
      "#006400",
      "#000000",
    ];

    const color1 = colors[Math.floor(Math.random() * colors.length)];
    const color2 = colors[Math.floor(Math.random() * colors.length)];
    return `linear-gradient(135deg, ${color1}, ${color2})`;
  };

  return (
    <div className="students-table">
      <h1 className="text-2xl font-bold mb-4">Students</h1>
      <div className="mb-4">
        <input
          type="text"
          value={newStudentName}
          onChange={(e) => setNewStudentName(e.target.value)}
          placeholder="New Student Name"
          className="input-field"
        />
        <button onClick={handleAddStudent} className="add-button">
          Add Student
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {students.map((student) => (
          <div
            key={student.id}
            className="card p-4 shadow-md rounded-lg"
            style={{ background: getRandomGradient() }}
          >
            <h2 className="text-xl font-semibold mb-2 text-white">
              {student.name}
            </h2>
            <div className="actions mt-4">
              <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg mr-2">
                Edit
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-lg"
                onClick={() => handleDeleteStudent(student.id)}
              >
                Delete
              </button>
            </div>
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

export default StudentsTable;
