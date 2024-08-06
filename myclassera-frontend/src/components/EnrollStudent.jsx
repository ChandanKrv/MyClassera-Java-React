import { useState, useEffect } from "react";
import axios from "axios";

const EnrollStudent = () => {
  const [students, setStudents] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState("");
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  useEffect(() => {
    axios
      .get("/api/student/all")
      .then((response) => setStudents(response.data))
      .catch((error) => console.error("Error fetching students:", error));

    axios
      .get("/api/subject/all")
      .then((response) => setSubjects(response.data))
      .catch((error) => console.error("Error fetching subjects:", error));
  }, []);

  const handleEnroll = () => {
    axios
      .post(`/api/student/${selectedStudent}/enroll`, selectedSubjects)
      .then(() => alert("Enrollment successful"))
      .catch((error) => console.error("Error enrolling student:", error));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Enroll Student in Subjects</h1>
      <div className="mb-4">
        <label className="block mb-2">Select Student:</label>
        <select
          value={selectedStudent}
          onChange={(e) => setSelectedStudent(e.target.value)}
          className="border border-gray-300 rounded p-2"
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
        <label className="block mb-2">Select Subjects:</label>
        {subjects.map((subject) => (
          <div key={subject.id} className="mb-2">
            <input
              type="checkbox"
              id={`subject-${subject.id}`}
              value={subject.id}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                setSelectedSubjects((prev) =>
                  e.target.checked
                    ? [...prev, value]
                    : prev.filter((id) => id !== value)
                );
              }}
            />
            <label htmlFor={`subject-${subject.id}`} className="ml-2">
              {subject.name}
            </label>
          </div>
        ))}
      </div>
      <button
        onClick={handleEnroll}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Enroll
      </button>
    </div>
  );
};

export default EnrollStudent;
