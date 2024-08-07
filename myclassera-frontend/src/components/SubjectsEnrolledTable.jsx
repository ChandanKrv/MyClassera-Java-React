import React, { useState, useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";

import {
  fetchStudents,
  fetchSubjectsByStudentId,
  unenrollStudentFromSubject,
} from "../api/api";

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

  const handleUnenroll = async (studentId, subjectId) => {
    try {
      await unenrollStudentFromSubject(studentId, subjectId);
      setEnrollments((prevEnrollments) => ({
        ...prevEnrollments,
        [studentId]: prevEnrollments[studentId].filter(
          (subject) => subject.id !== subjectId
        ),
      }));
    } catch (error) {
      console.error("Error unenrolling student from subject:", error);
    }
  };

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
                          <li
                            key={subject.id}
                            className="flex justify-between items-center"
                          >
                            {subject.name}
                            <button
                              onClick={() =>
                                handleUnenroll(student.id, subject.id)
                              }
                              className="text-red-500 hover:text-red-700 ml-2"
                            >
                              <MdDeleteForever />
                            </button>
                          </li>
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
