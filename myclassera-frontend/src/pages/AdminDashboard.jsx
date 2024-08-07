// src/pages/AdminDashboard.jsx
import React from "react";
import SubjectsTable from "../components/SubjectsTable";
import StudentsTable from "../components/StudentsTable";
import SubjectsEnrolledTable from "../components/SubjectsEnrolledTable";
import EnrollInSubjects from "../components/EnrollInSubjects";

const AdminDashboard = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Admin Dashboard</h1>
      <EnrollInSubjects />
      <SubjectsEnrolledTable />
      <StudentsTable />
      <SubjectsTable />
    </div>
  );
};

export default AdminDashboard;
