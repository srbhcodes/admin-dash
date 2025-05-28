import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaUsers, FaChartBar } from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const linkClass = ({ isActive }) =>
    `flex items-center p-4 hover:bg-gray-700 ${isActive ? "bg-gray-700" : ""}`;

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      <aside
        className={`bg-gray-800 text-white flex flex-col md:fixed md:w-64 md:h-screen ${
          isOpen ? "absolute z-40 w-64 h-screen" : "hidden"
        } md:block`}
      >
        <nav className="flex flex-col mt-4">
          <NavLink to="/dashboard" className={linkClass} onClick={toggleSidebar}>
            <FaHome className="mr-3" />
            Dashboard
          </NavLink>
          <NavLink to="/users" className={linkClass} onClick={toggleSidebar}>
            <FaUsers className="mr-3" />
            Users
          </NavLink>
          <NavLink to="/reports" className={linkClass} onClick={toggleSidebar}>
            <FaChartBar className="mr-3" />
            Reports
          </NavLink>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
