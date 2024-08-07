import React, { useState, useEffect } from "react";
import { fetchStudents, fetchSubjectsByStudentId } from "../api/api";

const SubjectsEnrolledTable = () => {
  const [students, setStudents] = useState([]);
  const [enrollments, setEnrollments] = useState({});

  useEffect(() => {
    const getStudents = async () => {
      try {
        const data = await fetchStudents();
        setStudents(data);
        const enrollmentsData = {};
        for (const student of data) {
          enrollmentsData[student.id] = await fetchSubjectsByStudentId(
            student.id
          );
        }
        setEnrollments(enrollmentsData);
      } catch (error) {
        console.error("Error fetching students or enrollments:", error);
      }
    };
    getStudents();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Subjects Enrolled</h2>
      <div className="overflow-x-auto">
        <div className="bg-white shadow-lg rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-gray-600">
                  Student ID
                </th>
                <th className="px-4 py-2 text-left text-gray-600">
                  Student Name
                </th>
                <th className="px-4 py-2 text-left text-gray-600">
                  Enrolled Subjects
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {students.map((student) => (
                <tr key={student.id}>
                  <td className="px-4 py-2 text-gray-700">{student.id}</td>
                  <td className="px-4 py-2 text-gray-700">{student.name}</td>
                  <td className="px-4 py-2 text-gray-700">
                    {enrollments[student.id] ? (
                      <ul className="list-disc pl-5">
                        {enrollments[student.id].map((subject) => (
                          <li key={subject.id}>{subject.name}</li>
                        ))}
                      </ul>
                    ) : (
                      "Loading..."
                    )}
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

export default SubjectsEnrolledTable;
