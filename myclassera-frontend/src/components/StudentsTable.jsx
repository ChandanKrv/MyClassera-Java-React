import React, { useState, useEffect } from "react";
import {
  fetchStudents,
  deleteStudent,
  addStudent,
  updateStudent,
} from "../api/api";
import { useNavigate } from "react-router-dom";

const StudentsTable = () => {
  const [students, setStudents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [newStudent, setNewStudent] = useState({ name: "", email: "" });
  const [studentToEdit, setStudentToEdit] = useState(null);
  //const navigate = useNavigate();

  useEffect(() => {
    const getStudents = async () => {
      try {
        const data = await fetchStudents(currentPage);
        console.log("Fetched students data:", data); // Log data to verify
        setStudents(data || []); // Adjust according to API response
        setTotalPages(data.totalPages || 1);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };
    getStudents();
  }, [currentPage]);

  const handleEditStudent = (student) => {
    handleEditModalOpen(student);
  };

  const handleDeleteStudent = async (id) => {
    try {
      await deleteStudent(id);
      const data = await fetchStudents(currentPage);
      setStudents(data || []); // Adjust according to API response
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  const handleAddStudent = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleEditModalOpen = (student) => {
    setStudentToEdit(student);
    setIsEditModalOpen(true);
  };

  const handleEditModalClose = () => {
    setIsEditModalOpen(false);
    setStudentToEdit(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddStudentSubmit = async (e) => {
    e.preventDefault();
    try {
      await addStudent(newStudent);
      const data = await fetchStudents(currentPage);
      setStudents(data || []); // Adjust according to API response
      setIsModalOpen(false);
      setNewStudent({ name: "", email: "" }); // Reset form
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setStudentToEdit((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditStudentSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateStudent(studentToEdit); // Make sure you have this API function
      const data = await fetchStudents(currentPage);
      setStudents(data || []); // Adjust according to API response
      handleEditModalClose();
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">All Students</h2>
        <button
          onClick={handleAddStudent}
          className="bg-green-500 text-white px-4 py-2 rounded shadow-lg"
        >
          Add New Student
        </button>
      </div>
      <div className="overflow-x-auto">
        <div className="bg-white shadow-lg rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className=" text-center px-4 py-2 text-left text-gray-600">
                  ID
                </th>
                <th className=" text-center  px-4 py-2 text-left text-gray-600">
                  Name
                </th>
                <th className=" text-center px-4 py-2 text-left text-gray-600">
                  Email
                </th>
                <th className=" text-center px-4 py-2 text-left text-gray-600">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="text-center bg-white divide-y divide-gray-200">
              {students.length > 0 ? (
                students.map((student) => (
                  <tr key={student.id}>
                    <td className="px-4 py-2 text-gray-700">{student.id}</td>
                    <td className="px-4 py-2 text-gray-700">
                      {student.name || "N/A"}
                    </td>
                    <td className="px-4 py-2 text-gray-700">
                      {student.email || "N/A"}
                    </td>

                    <td className="px-4 py-2">
                      <button
                        onClick={() => handleEditStudent(student)}
                        className="bg-blue-500 text-white px-4 py-2 rounded mr-2 shadow-md"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteStudent(student.id)}
                        className="bg-red-500 text-white px-4 py-2 rounded shadow-md"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-4">
                    No students found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className="bg-gray-500 text-white px-4 py-2 rounded"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className="bg-gray-500 text-white px-4 py-2 rounded"
          disabled={currentPage >= totalPages}
        >
          Next
        </button>
      </div>

      {/* Add Student Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Add New Student</h3>
            <form onSubmit={handleAddStudentSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Student Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={newStudent.name}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 w-full rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={newStudent.email}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 w-full rounded"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded shadow-md mr-2"
                >
                  Add Student
                </button>
                <button
                  type="button"
                  onClick={handleModalClose}
                  className="bg-gray-500 text-white px-4 py-2 rounded shadow-md"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Student Modal */}
      {isEditModalOpen && studentToEdit && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Edit Student</h3>
            <form onSubmit={handleEditStudentSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={studentToEdit.name || ""}
                  onChange={handleEditInputChange}
                  className="border border-gray-300 p-2 w-full rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={studentToEdit.email || ""}
                  onChange={handleEditInputChange}
                  className="border border-gray-300 p-2 w-full rounded"
                  disabled
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded shadow-md mr-2"
                >
                  Update Student
                </button>
                <button
                  type="button"
                  onClick={handleEditModalClose}
                  className="bg-gray-500 text-white px-4 py-2 rounded shadow-md"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentsTable;
