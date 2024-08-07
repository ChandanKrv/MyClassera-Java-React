import React, { useState, useEffect } from "react";
import { fetchStudents, deleteStudent } from "../api/api";
import { useNavigate } from "react-router-dom";

const StudentsTable = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getStudents = async () => {
      try {
        const data = await fetchStudents();
        setStudents(data); // Adjust based on the API response structure
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };
    getStudents();
  }, []);

  const handleEditStudent = (id) => {
    navigate(`/student-edit/${id}`);
  };

  const handleDeleteStudent = async (id) => {
    try {
      await deleteStudent(id);
      const data = await fetchStudents();
      setStudents(data);
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  const handleAddStudent = () => {
    navigate("/student-add");
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
                <th className="px-4 py-2 text-left text-gray-600">ID</th>
                <th className="px-4 py-2 text-left text-gray-600">Name</th>
                <th className="px-4 py-2 text-left text-gray-600">Email</th>
                <th className="px-4 py-2 text-left text-gray-600">Address</th>
                <th className="px-4 py-2 text-left text-gray-600">Subjects</th>
                <th className="px-4 py-2 text-left text-gray-600">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {students.map((student) => (
                <tr key={student.id}>
                  <td className="px-4 py-2 text-gray-700">{student.id}</td>
                  <td className="px-4 py-2 text-gray-700">{student.name}</td>
                  <td className="px-4 py-2 text-gray-700">{student.email}</td>
                  <td className="px-4 py-2 text-gray-700">{student.address}</td>
                  <td className="px-4 py-2 text-gray-700">
                    {student.subjects.length > 0
                      ? student.subjects.join(", ")
                      : "None"}
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleEditStudent(student.id)}
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentsTable;
