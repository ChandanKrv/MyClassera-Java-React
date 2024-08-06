import { useState, useEffect } from "react";
import axios from "axios";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("/api/student/all")
      .then((response) => setStudents(response.data))
      .catch((error) => console.error("Error fetching students:", error));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Students</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <a
              href={`/students/${student.id}`}
              className="text-blue-500 hover:underline"
            >
              {student.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
