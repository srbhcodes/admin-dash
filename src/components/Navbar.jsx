import React, { useState, useEffect, useRef } from "react";
import { FaSun, FaMoon, FaBars, FaBell, FaUser, FaChevronDown } from "react-icons/fa";

const Navbar = ({ toggleSidebar, theme, toggleTheme }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const notificationRef = useRef(null);
  const profileRef = useRef(null);

  const mockNotifications = [
    { id: 1, text: "REQRes API connection healthy", time: "2 min ago" },
    { id: 2, text: "User data refreshed successfully", time: "5 min ago" },
    { id: 3, text: "Dashboard loaded successfully", time: "10 min ago" }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfile(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

      <div className="flex items-center space-x-4">
        <div className="relative" ref={notificationRef}>
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors relative"
            aria-label="Notifications"
          >
            <FaBell size={20} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700 z-50">
              <div className="p-3 border-b dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Notifications</h3>
              </div>
              <div className="max-h-64 overflow-y-auto">
                {mockNotifications.map((notification) => (
                  <div key={notification.id} className="p-3 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                    <p className="text-sm text-gray-900 dark:text-gray-100">{notification.text}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{notification.time}</p>
                  </div>
                ))}
              </div>
              <div className="p-3">
                <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                  View all notifications
                </button>
              </div>
            </div>
          )}
        </div>

        <button
          onClick={toggleTheme}
          aria-label="Toggle Dark Mode"
          className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
        >
          {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>

        <div className="relative" ref={profileRef}>
          <button
            onClick={() => setShowProfile(!showProfile)}
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
            aria-label="Profile Menu"
          >
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <FaUser size={14} className="text-white" />
            </div>
            <span className="hidden md:block text-sm">Admin</span>
            <FaChevronDown size={12} />
          </button>

          {showProfile && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700 z-50">
              <div className="p-3 border-b dark:border-gray-700">
                <p className="font-semibold text-gray-900 dark:text-gray-100">John Doe</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Admin User</p>
              </div>
              <div className="py-1">
                <button className="block w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                  👤 View Profile
                </button>
                <button className="block w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                  ⚙️ Settings
                </button>
                <button className="block w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                  📊 My Activity
                </button>
                <hr className="my-1 border-gray-200 dark:border-gray-600" />
                <button className="block w-full text-left px-3 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700">
                  🚪 Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
