import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);

  return (
    <div className="flex justify-center mt-4">
      {pages.map((page) => (
        <button
          key={page}
          className={`px-4 py-2 ${
            page === currentPage
              ? "bg-blue-500 text-white"
              : "bg-white text-blue-500"
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
