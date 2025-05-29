import React, { useState, useEffect, useRef } from "react";
import { FaSun, FaMoon, FaBars, FaBell, FaChevronDown } from "react-icons/fa";

const Navbar = ({ toggleSidebar, theme, toggleTheme }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const notificationRef = useRef(null);
  const profileRef = useRef(null);

  const mockNotifications = [
    { id: 1, text: "System status: All services operational", time: "2 min ago", type: "success" },
    { id: 2, text: "New user registration: Emma Watson", time: "8 min ago", type: "info" },
    { id: 3, text: "Weekly report is ready for review", time: "1 hour ago", type: "info" }
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
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center px-6 py-3 sticky top-0 z-30">
      <div className="flex items-center space-x-4">
        <button
          className="lg:hidden p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
        >
          <FaBars size={16} />
        </button>

        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-600 dark:bg-blue-500 flex items-center justify-center">
            <span className="text-white font-semibold text-sm">A</span>
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-900 dark:text-white">Admin Portal</h1>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative" ref={notificationRef}>
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Notifications"
          >
            <FaBell size={16} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-1 w-80 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg z-50">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Notifications</h3>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1">
                    {mockNotifications.length} new
                  </span>
                </div>
              </div>
              <div className="max-h-64 overflow-y-auto">
                {mockNotifications.map((notification) => (
                  <div key={notification.id} className="p-4 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                    <div className="flex items-start space-x-3">
                      <div className={`w-2 h-2 mt-2 ${
                        notification.type === 'success' ? 'bg-green-500' : 'bg-blue-500'
                      }`}></div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900 dark:text-white">{notification.text}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{notification.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-800">
                <button className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                  View all notifications
                </button>
              </div>
            </div>
          )}
        </div>

        <button
          onClick={toggleTheme}
          aria-label="Toggle Dark Mode"
          className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {theme === "dark" ? <FaSun size={16} /> : <FaMoon size={16} />}
        </button>

        <div className="h-6 w-px bg-gray-300 dark:bg-gray-600 mx-2"></div>

        <div className="relative" ref={profileRef}>
          <button
            onClick={() => setShowProfile(!showProfile)}
            className="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Profile Menu"
          >
            <div className="w-8 h-8 bg-blue-600 dark:bg-blue-500 flex items-center justify-center text-white font-medium text-sm">
              SD
            </div>
            <div className="hidden md:block text-left">
              <p className="text-sm font-medium text-gray-900 dark:text-white">Sourabh Dev</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Administrator</p>
            </div>
            <FaChevronDown size={10} className="text-gray-500 dark:text-gray-400" />
          </button>

          {showProfile && (
            <div className="absolute right-0 mt-1 w-64 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg z-50">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 flex items-center justify-center text-white font-semibold">
                    SD
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Sourabh Dev</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">sourabh.dev@company.com</p>
                    <span className="inline-block mt-1 px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs">
                      Administrator
                    </span>
                  </div>
                </div>
              </div>
              <div className="py-1">
                <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                  <span className="mr-3">👤</span>
                  My Profile
                </button>
                <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                  <span className="mr-3">⚙️</span>
                  Account Settings
                </button>
                <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                  <span className="mr-3">🔔</span>
                  Notification Preferences
                </button>
                <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                  <span className="mr-3">❓</span>
                  Help & Support
                </button>
                <hr className="my-1 border-gray-200 dark:border-gray-700" />
                <button className="flex items-center w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-800">
                  <span className="mr-3">🚪</span>
                  Sign Out
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
