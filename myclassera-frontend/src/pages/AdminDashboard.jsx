// src/pages/AdminDashboard.jsx
import React from "react";
import SubjectsTable from "../components/SubjectsTable";
import StudentsTable from "../components/StudentsTable";
import CoursesEnrolledTable from "../components/CoursesEnrolledTable";

const AdminDashboard = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Admin Dashboard</h1>
      <SubjectsTable />
      <StudentsTable />
      <CoursesEnrolledTable />
    </div>
  );
};

export default AdminDashboard;
