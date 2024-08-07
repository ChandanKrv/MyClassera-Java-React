import React from "react";
import { printJwtToken } from "../api/api";
import EnrollInSubjects2 from "./EnrollInSubjects2";

function StudentDashboard() {
  printJwtToken();

  return (
    <div className="p-4">
      <h1 className="text-4xl font-medium	 mb-4">Student Dashboard</h1>
      <EnrollInSubjects2 />
    </div>
  );
}

export default StudentDashboard;
