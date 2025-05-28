import React from "react";

const TableRow = ({ user }) => {
  return (
    <tr className="border-t dark:border-gray-700">
      <td className="p-3">
        <img
          src={user.avatar}
          alt={`${user.first_name} ${user.last_name}`}
          className="w-12 h-12 rounded-full"
          loading="lazy"
          decoding="async"
        />
      </td>
      <td className="p-3 text-gray-900 dark:text-gray-100">
        {user.first_name} {user.last_name}
      </td>
      <td className="p-3 text-gray-600 dark:text-gray-300">
        {user.email}
      </td>
    </tr>
  );
};

export default React.memo(TableRow);
