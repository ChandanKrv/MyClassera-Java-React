import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const SubjectDetail = () => {
  const { id } = useParams();
  const [subject, setSubject] = useState(null);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/subject/${id}`)
      .then((response) => setSubject(response.data))
      .catch((error) => console.error("Error fetching subject:", error));

    axios
      .get(`/api/subject/${id}/students`)
      .then((response) => setStudents(response.data))
      .catch((error) => console.error("Error fetching students:", error));
  }, [id]);

  return (
    <div className="p-4">
      {subject ? (
        <>
          <h1 className="text-2xl font-bold">{subject.name}</h1>
          <p>Description: {subject.description}</p>
          <h2 className="text-xl font-semibold mt-4">Enrolled Students</h2>
          <ul>
            {students.map((student) => (
              <li key={student.id}>{student.name}</li>
            ))}
          </ul>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SubjectDetail;
