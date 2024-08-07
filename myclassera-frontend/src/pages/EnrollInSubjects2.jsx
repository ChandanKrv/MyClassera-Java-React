import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  fetchSubjects,
  enrollStudentInSubjects,
  fetchSubjectsByStudentId,
  logoutUser,
  HARD_CODED_STUDENT_ID,
} from "../api/api";
import Pagination from "../components/Pagination";

const EnrollInSubjects2 = () => {
  const [subjects, setSubjects] = useState([]);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [enrolledSubjects, setEnrolledSubjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const subjectData = await fetchSubjects();
        setSubjects(subjectData.content); // Adjust for the JSON response structure
        setTotalPages(subjectData.totalPages); // Assuming `totalPages` is part of the response
      } catch (error) {
        console.error("Error fetching subjects:", error);
      }
    };
    fetchData();
  }, [currentPage]);

  useEffect(() => {
    const fetchEnrolledSubjects = async () => {
      try {
        const enrolledSubjectsData = await fetchSubjectsByStudentId(
          HARD_CODED_STUDENT_ID
        );
        setEnrolledSubjects(enrolledSubjectsData.map((subject) => subject.id));
      } catch (error) {
        console.error("Error fetching enrolled subjects:", error);
      }
    };
    fetchEnrolledSubjects();
  }, []);

  const handleSubjectClick = (subjectId) => {
    if (enrolledSubjects.includes(subjectId)) return;
    setSelectedSubjects((prevSubjects) =>
      prevSubjects.includes(subjectId)
        ? prevSubjects.filter((id) => id !== subjectId)
        : [...prevSubjects, subjectId]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await enrollStudentInSubjects(HARD_CODED_STUDENT_ID, selectedSubjects);
      alert("Enrolled successfully!");
      window.location.reload(); // Refresh the page
    } catch (error) {
      console.error("Error enrolling student:", error);
      alert("Failed to enroll student.");
    }
  };

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  return (
    <div className="p-6">
      <div className="flex justify-end">
        <button
          onClick={handleLogout}
          className="text-blue-500 hover:underline"
        >
          Logout
        </button>
      </div>
      <h2 className="text-2xl font-bold mb-4">Enroll in Subjects</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 border border-gray-200"
      >
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Select Subjects</label>
          <div className="flex flex-wrap gap-4">
            {subjects.map((subject) => (
              <div
                key={subject.id}
                className={`p-4 border border-gray-300 rounded-lg cursor-pointer ${
                  selectedSubjects.includes(subject.id)
                    ? "bg-blue-100"
                    : "bg-white"
                } ${
                  enrolledSubjects.includes(subject.id)
                    ? "opacity-50 pointer-events-none"
                    : ""
                } ${
                  !HARD_CODED_STUDENT_ID ? "pointer-events-none opacity-50" : ""
                }`}
                onClick={() => handleSubjectClick(subject.id)}
              >
                <h3 className="text-lg font-semibold">{subject.name}</h3>
                <p className="text-gray-600">{subject.description}</p>
              </div>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          disabled={!selectedSubjects.length}
        >
          Enroll
        </button>
      </form>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default EnrollInSubjects2;
