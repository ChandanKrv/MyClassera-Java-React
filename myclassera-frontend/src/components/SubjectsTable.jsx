import React, { useState, useEffect } from "react";
import { fetchSubjects, deleteSubject, addSubject } from "../api/api";
import { useNavigate } from "react-router-dom";

const SubjectsTable = () => {
  const [subjects, setSubjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [newSubject, setNewSubject] = useState({ name: "", description: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const getSubjects = async () => {
      try {
        const data = await fetchSubjects(currentPage);
        console.log("Fetched subjects data:", data); // Log data to verify
        setSubjects(data.content || []);
        setTotalPages(data.totalPages || 0);
      } catch (error) {
        console.error("Error fetching subjects:", error);
      }
    };
    getSubjects();
  }, [currentPage]);

  const handleEditSubject = (id) => {
    navigate(`/subject-edit/${id}`);
  };

  const handleDeleteSubject = async (id) => {
    try {
      await deleteSubject(id);
      const data = await fetchSubjects(currentPage);
      setSubjects(data.content || []);
    } catch (error) {
      console.error("Error deleting subject:", error);
    }
  };

  const handleAddSubject = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSubject((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddSubjectSubmit = async (e) => {
    e.preventDefault();
    try {
      await addSubject(newSubject);
      const data = await fetchSubjects(currentPage);
      setSubjects(data.content || []);
      setIsModalOpen(false);
      setNewSubject({ name: "", description: "" }); // Reset form
    } catch (error) {
      console.error("Error adding subject:", error);
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
        <h2 className="text-2xl font-bold">All Subjects</h2>
        <button
          onClick={handleAddSubject}
          className="bg-green-500 text-white px-4 py-2 rounded shadow-lg"
        >
          Add New Subject
        </button>
      </div>
      <div className="overflow-x-auto">
        <div className="bg-white shadow-lg rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-gray-600">ID</th>
                <th className="px-4 py-2 text-left text-gray-600">Name</th>
                <th className="px-4 py-2 text-left text-gray-600">
                  Description
                </th>
                <th className="px-4 py-2 text-left text-gray-600">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {subjects.length > 0 ? (
                subjects.map((subject) => (
                  <tr key={subject.id}>
                    <td className="px-4 py-2 text-gray-700">{subject.id}</td>
                    <td className="px-4 py-2 text-gray-700">{subject.name}</td>
                    <td className="px-4 py-2 text-gray-700">
                      {subject.description}
                    </td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => handleEditSubject(subject.id)}
                        className="bg-blue-500 text-white px-4 py-2 rounded mr-2 shadow-md"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteSubject(subject.id)}
                        className="bg-red-500 text-white px-4 py-2 rounded shadow-md"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-4">
                    No subjects found
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

      {/* Add Subject Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Add New Subject</h3>
            <form onSubmit={handleAddSubjectSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={newSubject.name}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 w-full rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-gray-700 mb-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={newSubject.description}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 w-full rounded"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded shadow-md mr-2"
                >
                  Add Subject
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
    </div>
  );
};

export default SubjectsTable;
