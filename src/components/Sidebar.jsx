import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaUsers, FaChartBar } from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const linkClass = ({ isActive }) =>
    `flex items-center space-x-3 px-4 py-2 mx-2 text-sm font-medium ${
      isActive 
        ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 border-r-3 border-blue-600 dark:border-blue-400" 
        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
    }`;

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      <aside
        className={`bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 flex flex-col lg:fixed lg:w-64 lg:h-screen ${
          isOpen ? "fixed z-40 w-64 h-screen" : "hidden"
        } lg:block`}
      >
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 dark:bg-blue-500 flex items-center justify-center">
              <span className="text-white font-semibold text-lg">A</span>
            </div>
            <div>
              <h2 className="font-semibold text-gray-900 dark:text-white">Admin Portal</h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">Management System</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 py-4">
          <div className="px-4 mb-2">
            <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
              Navigation
            </p>
          </div>
          
          <NavLink to="/dashboard" className={linkClass} onClick={toggleSidebar}>
            <FaHome size={16} />
            <span>Dashboard</span>
          </NavLink>
          
          <NavLink to="/users" className={linkClass} onClick={toggleSidebar}>
            <FaUsers size={16} />
            <span>Users</span>
          </NavLink>
          
          <NavLink to="/reports" className={linkClass} onClick={toggleSidebar}>
            <FaChartBar size={16} />
            <span>Reports</span>
          </NavLink>
        </nav>

        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="bg-gray-50 dark:bg-gray-800 p-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 dark:bg-blue-500 flex items-center justify-center text-white font-medium text-sm">
                SD
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">Sourabh Dev</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Administrator</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
