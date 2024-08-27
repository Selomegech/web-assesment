import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    // Render the first two pages
    pageNumbers.push(
      <button
        key={1}
        onClick={() => handlePageChange(1)}
        className={`px-4 py-2 mx-2 rounded-md ${
          currentPage === 1 ? 'bg-indigo-800 text-white' : 'bg-gray-200 hover:bg-gray-300'
        }`}
      >
        1
      </button>
    );
    if (totalPages > 1) {
      pageNumbers.push(
        <button
          key={2}
          onClick={() => handlePageChange(2)}
          className={`px-4 py-2 mx-2 rounded-md ${
            currentPage === 2 ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          2
        </button>
      );
    }

    // Render the ellipsis if there are more than 4 pages
    if (totalPages > 4) {
      pageNumbers.push(
        <span key="ellipsis" className="px-4 py-2 mx-2">
          ...
        </span>
      );
    }

    // Render the last two pages
    if (totalPages > 2) {
      pageNumbers.push(
        <button
          key={totalPages - 1}
          onClick={() => handlePageChange(totalPages - 1)}
          className={`px-4 py-2 mx-2 rounded-md ${
            currentPage === totalPages - 1
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          {totalPages - 1}
        </button>
      );
    }
    pageNumbers.push(
      <button
        key={totalPages}
        onClick={() => handlePageChange(totalPages)}
        className={`px-4 py-2 mx-2 rounded-md ${
          currentPage === totalPages ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
        }`}
      >
        {totalPages}
      </button>
    );

    return pageNumbers;
  };

  return (
    <div className="flex justify-center my-8">
      <button
        onClick={handlePreviousPage}
        className={`px-4 py-2 mx-2 rounded-md ${
          currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'
        }`}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {renderPageNumbers()}
      <button
        onClick={handleNextPage}
        className={`px-4 py-2 mx-2 rounded-md ${
          currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'
        }`}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;