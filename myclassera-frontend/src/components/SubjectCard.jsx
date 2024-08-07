import React from "react";

const SubjectCard = ({ subject, onEnroll }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <h2 className="text-xl font-bold">{subject.name}</h2>
      <p>{subject.description}</p>
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => onEnroll(subject.id)}
      >
        Enroll
      </button>
    </div>
  );
};

export default SubjectCard;
