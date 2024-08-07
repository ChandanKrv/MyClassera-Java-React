import React, { useState, useEffect } from "react";
import { fetchSubjects, deleteSubject } from "../api/api";
import { useNavigate } from "react-router-dom";

const SubjectsTable = () => {
  const [subjects, setSubjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getSubjects = async () => {
      try {
        const data = await fetchSubjects();
        setSubjects(data.content); // Adjust based on the API response structure
      } catch (error) {
        console.error("Error fetching subjects:", error);
      }
    };
    getSubjects();
  }, []);

  const handleEditSubject = (id) => {
    navigate(`/subject-edit/${id}`);
  };

  const handleDeleteSubject = async (id) => {
    try {
      await deleteSubject(id);
      const data = await fetchSubjects();
      setSubjects(data.content);
    } catch (error) {
      console.error("Error deleting subject:", error);
    }
  };

  const handleAddSubject = () => {
    navigate("/subject-add");
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
                <th className="px-4 py-2 text-left text-gray-600">Students</th>
                <th className="px-4 py-2 text-left text-gray-600">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {subjects.map((subject) => (
                <tr key={subject.id}>
                  <td className="px-4 py-2 text-gray-700">{subject.id}</td>
                  <td className="px-4 py-2 text-gray-700">{subject.name}</td>
                  <td className="px-4 py-2 text-gray-700">
                    {subject.description || "No description"}
                  </td>
                  <td className="px-4 py-2 text-gray-700">
                    {subject.students.length > 0
                      ? subject.students.map((student) => (
                          <div key={student.id}>{student.name}</div>
                        ))
                      : "None"}
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SubjectsTable;
