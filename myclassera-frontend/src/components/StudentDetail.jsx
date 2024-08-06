import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const StudentDetail = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/student/${id}`)
      .then((response) => setStudent(response.data))
      .catch((error) => console.error("Error fetching student:", error));

    axios
      .get(`/api/student/${id}/subjects`)
      .then((response) => setSubjects(response.data))
      .catch((error) => console.error("Error fetching subjects:", error));
  }, [id]);

  return (
    <div className="p-4">
      {student ? (
        <>
          <h1 className="text-2xl font-bold">{student.name}</h1>
          <p>Email: {student.email}</p>
          <p>Address: {student.address}</p>
          <h2 className="text-xl font-semibold mt-4">Enrolled Subjects</h2>
          <ul>
            {subjects.map((subject) => (
              <li key={subject.id}>{subject.name}</li>
            ))}
          </ul>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default StudentDetail;
