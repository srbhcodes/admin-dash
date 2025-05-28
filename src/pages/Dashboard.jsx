import React, { Suspense } from "react";
import SummaryCard from "../components/SummaryCard";
import SkeletonLoader from "../components/SkeletonLoader";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../utils/api";

const Dashboard = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["users", 1],
    queryFn: () => fetchUsers(1),
  });

  if (isLoading) return <p className="text-center py-8 text-gray-900 dark:text-gray-100">Loading...</p>;
  if (isError)
    return (
      <p className="text-center py-8 text-red-500">Error: {error.message}</p>
    );

  const totalUsers = data?.total || 0;
  const totalPages = data?.total_pages || 0;
  const usersPerPage = data?.per_page || 0;
  const activeUsers = Math.floor(totalUsers * 0.75);

  const recentUsers = data?.data?.slice(0, 3) || [];

  return (
    <div className="p-4 space-y-6">
      <header className="bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 text-white p-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-2">Welcome to Admin Dashboard</h1>
        <p className="text-blue-100">Here's what's happening with your users today.</p>
      </header>

      <section className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-4 rounded-lg">
        <div className="flex items-center space-x-2">
          <span className="text-yellow-600 dark:text-yellow-400 font-medium">📡 Data Source:</span>
          <code className="bg-yellow-100 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded text-sm">
            @https://reqres.in/api/users
          </code>
        </div>
        <p className="text-yellow-700 dark:text-yellow-300 text-sm mt-2">
          Real-time data fetched from REQRes API
        </p>
      </section>

      <Suspense fallback={<SkeletonLoader />}>
        <section>
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Quick Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <SummaryCard title="Total Users" value={totalUsers} />
            <SummaryCard title="Active Users" value={activeUsers} />
            <SummaryCard title="Total Pages" value={totalPages} />
            <SummaryCard title="Users per Page" value={usersPerPage} />
          </div>
        </section>
      </Suspense>

      <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow dark:shadow-gray-700">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Recent Users from API</h2>
        <div className="space-y-3">
          {recentUsers.map((user) => (
            <div key={user.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded">
              <div className="flex items-center space-x-3">
                <img 
                  src={user.avatar} 
                  alt={`${user.first_name} ${user.last_name}`}
                  className="w-10 h-10 rounded-full"
                  loading="lazy"
                />
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-100">
                    {user.first_name} {user.last_name}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{user.email}</p>
                </div>
              </div>
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm">
                ID: {user.id}
              </span>
            </div>
          ))}
        </div>
        
        <div className="mt-4 pt-4 border-t dark:border-gray-700">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-400">API Status:</span>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-600 dark:text-green-400">Connected</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm mt-1">
            <span className="text-gray-600 dark:text-gray-400">Last Updated:</span>
            <span className="text-gray-700 dark:text-gray-300">{new Date().toLocaleTimeString()}</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
