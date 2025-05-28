import React from "react";

const SummaryCard = ({ title, value }) => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded shadow dark:shadow-gray-700 border dark:border-gray-600">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
      <p className="text-2xl text-gray-800 dark:text-gray-200">{value}</p>
    </div>
  );
};

export default React.memo(SummaryCard);
