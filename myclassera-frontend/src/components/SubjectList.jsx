import { useState, useEffect } from "react";
import axios from "axios";

const SubjectList = () => {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    axios
      .get("/api/subject/all")
      .then((response) => setSubjects(response.data))
      .catch((error) => console.error("Error fetching subjects:", error));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Subjects</h1>
      <ul>
        {subjects.map((subject) => (
          <li key={subject.id}>
            <a
              href={`/subjects/${subject.id}`}
              className="text-blue-500 hover:underline"
            >
              {subject.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubjectList;
