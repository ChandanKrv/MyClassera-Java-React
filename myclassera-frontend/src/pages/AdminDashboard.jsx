// src/pages/AdminDashboard.jsx
import React from "react";
import SubjectsTable from "../components/SubjectsTable";
import StudentsTable from "../components/StudentsTable";
import SubjectsEnrolledTable from "../components/SubjectsEnrolledTable";
import EnrollInSubjects from "../components/EnrollInSubjects";
import { printJwtToken } from "../api/api";

const AdminDashboard = () => {
  printJwtToken();

  return (
    <div className="p-4">
      <h1 className="text-4xl font-medium	 mb-4">Admin Dashboard</h1>

      <EnrollInSubjects />
      <SubjectsEnrolledTable />
      <StudentsTable />
      <SubjectsTable />
    </div>
  );
};

export default AdminDashboard;
