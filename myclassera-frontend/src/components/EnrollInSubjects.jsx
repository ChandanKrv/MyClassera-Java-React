import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  fetchStudents,
  fetchSubjects,
  enrollStudentInSubjects,
  fetchSubjectsByStudentId,
  logoutUser,
} from "../api/api";

const EnrollInSubjects = () => {
  const [students, setStudents] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState("");
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [enrolledSubjects, setEnrolledSubjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const studentData = await fetchStudents();
        const subjectData = await fetchSubjects();
        setStudents(studentData);
        setSubjects(subjectData.content); // Adjust for the JSON response structure
      } catch (error) {
        console.error("Error fetching students or subjects:", error);
      }
    };
    fetchData();
  }, []);

  const handleStudentChange = async (e) => {
    const studentId = e.target.value;
    setSelectedStudent(studentId);
    setSelectedSubjects([]);
    setEnrolledSubjects([]);

    if (studentId) {
      try {
        const enrolledSubjectsData = await fetchSubjectsByStudentId(studentId);
        setEnrolledSubjects(enrolledSubjectsData.map((subject) => subject.id));
      } catch (error) {
        console.error("Error fetching enrolled subjects:", error);
      }
    }
  };

  const handleSubjectClick = (subjectId) => {
    if (selectedStudent) {
      setSelectedSubjects((prevSubjects) =>
        prevSubjects.includes(subjectId)
          ? prevSubjects.filter((subject) => subject !== subjectId)
          : [...prevSubjects, subjectId]
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await enrollStudentInSubjects(selectedStudent, selectedSubjects);
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
      <h2 className="text-2xl font-bold mb-4">Enroll Student in Subjects</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 border border-gray-200"
      >
        <div className="mb-4">
          <label htmlFor="student" className="block text-gray-600 mb-2">
            Select Student
          </label>
          <select
            id="student"
            value={selectedStudent}
            onChange={handleStudentChange}
            className="border border-gray-300 rounded-lg p-2 w-full"
            required
          >
            <option value="">-- Select a Student --</option>
            {students.map((student) => (
              <option key={student.id} value={student.id}>
                {student.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Select Subjects</label>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {subjects.map((subject) => (
              <div
                key={subject.id}
                className={`p-4 border border-gray-300 rounded-lg cursor-pointer ${
                  selectedSubjects.includes(subject.id)
                    ? "bg-blue-100"
                    : "bg-white"
                } ${
                  enrolledSubjects.includes(subject.id) ? "opacity-50" : ""
                } ${!selectedStudent ? "pointer-events-none opacity-50" : ""}`}
                onClick={() => handleSubjectClick(subject.id)}
              >
                <h3 className="text-xl font-semibold">{subject.name}</h3>
                <p className="text-gray-600">{subject.description}</p>
              </div>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          disabled={!selectedStudent}
        >
          Enroll
        </button>
      </form>
    </div>
  );
};

export default EnrollInSubjects;
