// src/components/CoursesEnrolledTable.jsx
import React, { useState, useEffect } from "react";
import { fetchStudents, fetchSubjectsByStudentId } from "../api/api";

const CoursesEnrolledTable = () => {
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
    <div>
      <h2>Courses Enrolled</h2>
      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Enrolled Subjects</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>
                {enrollments[student.id] ? (
                  <ul>
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
  );
};

export default CoursesEnrolledTable;
