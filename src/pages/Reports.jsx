import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../utils/api";
import Spinner from "../components/Spinner";

const Reports = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["users", 1],
    queryFn: () => fetchUsers(1),
  });

  if (isLoading) return <Spinner />;

  if (isError)
    return (
      <div className="text-red-500 text-center py-4">
        Failed to load report data: {error.message}
      </div>
    );

  const totalUsers = data?.total || 0;
  const currentPageUsers = data?.data?.length || 0;
  const totalPages = data?.total_pages || 0;
  const usersPerPage = data?.per_page || 0;
  
  const activeUsers = Math.floor(totalUsers * 0.75);
  const engagementRate = 85;

  return (
    <div className="p-4 space-y-6">
      <header>
        <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">Analytics & Reports</h1>
        <p className="text-gray-600 dark:text-gray-400">Detailed insights and user analytics from REQRes API</p>
      </header>

      <section className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
        <div className="flex items-center space-x-2">
          <span className="text-blue-600 dark:text-blue-400 font-medium">📊 Analytics Source:</span>
          <code className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm">
            @https://reqres.in/api/users
          </code>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Key Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Total Users</h3>
            <p className="text-3xl font-bold">{totalUsers}</p>
            <p className="text-blue-100 text-sm mt-2">From API response</p>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Active Users</h3>
            <p className="text-3xl font-bold">{activeUsers}</p>
            <p className="text-green-100 text-sm mt-2">75% of total users</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Total Pages</h3>
            <p className="text-3xl font-bold">{totalPages}</p>
            <p className="text-purple-100 text-sm mt-2">{usersPerPage} users per page</p>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Engagement Rate</h3>
            <p className="text-3xl font-bold">{engagementRate}%</p>
            <p className="text-orange-100 text-sm mt-2">User activity rate</p>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow dark:shadow-gray-700">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">User Activity Overview</h2>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Active Users</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">{activeUsers}/{totalUsers}</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
              <div 
                className="bg-green-500 h-3 rounded-full transition-all duration-300" 
                style={{ width: '75%' }}
              ></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Data Coverage</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">{totalPages} pages available</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
              <div 
                className="bg-blue-500 h-3 rounded-full transition-all duration-300" 
                style={{ width: '60%' }}
              ></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">User Engagement</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">{engagementRate}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
              <div 
                className="bg-purple-500 h-3 rounded-full transition-all duration-300" 
                style={{ width: '85%' }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow dark:shadow-gray-700">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">API Data Summary</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b dark:border-gray-700">
                <th className="pb-3 text-gray-900 dark:text-gray-100">Metric</th>
                <th className="pb-3 text-gray-900 dark:text-gray-100">Value</th>
                <th className="pb-3 text-gray-900 dark:text-gray-100">Source</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 dark:text-gray-300">
              <tr className="border-b dark:border-gray-700">
                <td className="py-3">Total Users</td>
                <td className="py-3 font-semibold">{totalUsers}</td>
                <td className="py-3 text-blue-600 dark:text-blue-400">API Response</td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <td className="py-3">Users Per Page</td>
                <td className="py-3 font-semibold">{usersPerPage}</td>
                <td className="py-3 text-blue-600 dark:text-blue-400">API Response</td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <td className="py-3">Total Pages</td>
                <td className="py-3 font-semibold">{totalPages}</td>
                <td className="py-3 text-blue-600 dark:text-blue-400">API Response</td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <td className="py-3">Current Page Users</td>
                <td className="py-3 font-semibold">{currentPageUsers}</td>
                <td className="py-3 text-green-600 dark:text-green-400">Calculated</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-4 pt-4 border-t dark:border-gray-700 flex justify-between items-center text-sm">
          <span className="text-gray-600 dark:text-gray-400">
            Last API call: {new Date().toLocaleString()}
          </span>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-600 dark:text-green-400">Live Data</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reports;
