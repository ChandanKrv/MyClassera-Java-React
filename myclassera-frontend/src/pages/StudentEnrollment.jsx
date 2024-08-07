import React, { useEffect, useState } from "react";
import { fetchSubjects, enrollSubject } from "../api/api";
import SubjectCard from "../components/SubjectCard";
import Pagination from "../components/Pagination";

const StudentEnrollment = () => {
  const [subjects, setSubjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const loadSubjects = async () => {
      try {
        const response = await fetchSubjects(currentPage);
        setSubjects(response.data.content);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        // Handle fetch error
      }
    };

    loadSubjects();
  }, [currentPage]);

  const handleEnroll = async (subjectId) => {
    try {
      await enrollSubject(subjectId);
      // Handle successful enrollment
    } catch (error) {
      // Handle enroll error
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl mb-4">Enroll in Subjects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {subjects.map((subject) => (
          <SubjectCard
            key={subject.id}
            subject={subject}
            onEnroll={handleEnroll}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default StudentEnrollment;
