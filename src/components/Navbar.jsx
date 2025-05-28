import React from "react";
import { FaSun, FaMoon, FaBars } from "react-icons/fa";

const Navbar = ({ toggleSidebar, theme, toggleTheme }) => {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-md flex justify-between items-center p-4 sticky top-0 z-30">
      <button
        className="md:hidden text-gray-600 dark:text-gray-300"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        <FaBars size={24} />
      </button>

      <div className="text-gray-800 dark:text-gray-200 font-semibold text-lg">
        Dashboard
      </div>

      <div className="flex items-center">
        <button
          onClick={toggleTheme}
          aria-label="Toggle Dark Mode"
          className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
        >
          {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
