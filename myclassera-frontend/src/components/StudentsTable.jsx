// src/components/StudentsTable.jsx
import React, { useState, useEffect } from "react";
import {
  fetchStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} from "../api/api";

const StudentsTable = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ name: "", email: "" });

  useEffect(() => {
    const getStudents = async () => {
      try {
        const data = await fetchStudents();
        setStudents(data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };
    getStudents();
  }, []);

  const handleAddStudent = async () => {
    try {
      await addStudent(newStudent);
      setNewStudent({ name: "", email: "" });
      const data = await fetchStudents();
      setStudents(data);
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  const handleDeleteStudent = async (id) => {
    try {
      await deleteStudent(id);
      const data = await fetchStudents();
      setStudents(data);
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  const handleUpdateStudent = async (id) => {
    try {
      await updateStudent({ id, ...newStudent });
      setNewStudent({ name: "", email: "" });
      const data = await fetchStudents();
      setStudents(data);
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  return (
    <div>
      <h2>Students</h2>
      <input
        type="text"
        value={newStudent.name}
        onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
        placeholder="Student Name"
      />
      <input
        type="email"
        value={newStudent.email}
        onChange={(e) =>
          setNewStudent({ ...newStudent, email: e.target.value })
        }
        placeholder="Student Email"
      />
      <button onClick={handleAddStudent}>Add Student</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>
                <button onClick={() => handleUpdateStudent(student.id)}>
                  Update
                </button>
                <button onClick={() => handleDeleteStudent(student.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsTable;
