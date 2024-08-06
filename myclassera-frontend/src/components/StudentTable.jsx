import { useState, useEffect } from "react";
import axios from "axios";

const StudentTable = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/student/all"
        );
        setStudents(response.data);
      } catch (err) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Student List</h1>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Address</th>
            <th className="py-2 px-4 border-b">Subjects</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td className="py-2 px-4 border-b">{student.id}</td>
              <td className="py-2 px-4 border-b">{student.name}</td>
              <td className="py-2 px-4 border-b">{student.email}</td>
              <td className="py-2 px-4 border-b">{student.address}</td>
              <td className="py-2 px-4 border-b">
                {student.subjects.length > 0
                  ? student.subjects.join(", ")
                  : "No subjects"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
