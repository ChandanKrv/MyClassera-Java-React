import React, { useEffect, useState } from "react";
import { fetchSubjects, fetchStudents, addSubject } from "../api/api";
import SubjectCard from "../components/SubjectCard";
import Pagination from "../components/Pagination";

const AdminPanel = () => {
  const [subjects, setSubjects] = useState([]);
  const [students, setStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [newSubject, setNewSubject] = useState({ name: "", description: "" });

  useEffect(() => {
    const loadSubjects = async () => {
      try {
        const response = await fetchSubjects(currentPage);
        setSubjects(response.data.content);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        // Handle fetch error
      }
    };

    loadSubjects();
  }, [currentPage]);

  useEffect(() => {
    const loadStudents = async () => {
      try {
        const response = await fetchStudents();
        setStudents(response.data);
      } catch (error) {
        // Handle fetch error
      }
    };

    loadStudents();
  }, []);

  const handleAddSubject = async (e) => {
    e.preventDefault();
    try {
      await addSubject(newSubject);
      setNewSubject({ name: "", description: "" });
      // Fetch subjects again to update the list
      const response = await fetchSubjects(currentPage);
      setSubjects(response.data.content);
    } catch (error) {
      // Handle add subject error
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl mb-4">Admin Panel</h1>
      <div>
        <h2 className="text-2xl mb-4">Add New Subject</h2>
        <form onSubmit={handleAddSubject}>
          <input
            type="text"
            placeholder="Subject Name"
            value={newSubject.name}
            onChange={(e) =>
              setNewSubject({ ...newSubject, name: e.target.value })
            }
            className="block w-full mb-4 px-4 py-2 border rounded"
          />
          <textarea
            placeholder="Subject Description"
            value={newSubject.description}
            onChange={(e) =>
              setNewSubject({ ...newSubject, description: e.target.value })
            }
            className="block w-full mb-4 px-4 py-2 border rounded"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Subject
          </button>
        </form>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl mb-4">Subjects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {subjects.map((subject) => (
            <SubjectCard key={subject.id} subject={subject} />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default AdminPanel;
