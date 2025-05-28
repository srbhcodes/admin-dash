import React from "react";

const Pagination = ({ page, totalPages, onPrevious, onNext }) => {
  const getButtonClass = (disabled) =>
    `px-4 py-2 rounded ${
      disabled
        ? "bg-gray-300 dark:bg-gray-600 cursor-not-allowed text-gray-500 dark:text-gray-400"
        : "bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
    }`;

  return (
    <div className="flex justify-center items-center space-x-4 mt-6">
      <button
        onClick={onPrevious}
        disabled={page === 1}
        className={getButtonClass(page === 1)}
      >
        Previous
      </button>

      <span className="font-semibold text-gray-900 dark:text-gray-100">
        Page {page} of {totalPages}
      </span>

      <button
        onClick={onNext}
        disabled={page === totalPages}
        className={getButtonClass(page === totalPages)}
      >
        Next
      </button>
    </div>
  );
};

export default React.memo(Pagination);
