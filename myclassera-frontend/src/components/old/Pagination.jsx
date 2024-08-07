
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="bg-blue-500 text-white p-2 rounded mx-1"
      >
        Previous
      </button>
      <span className="mx-2">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="bg-blue-500 text-white p-2 rounded mx-1"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
