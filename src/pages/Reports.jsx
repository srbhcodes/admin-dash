import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../utils/api";
import Spinner from "../components/Spinner";

const Reports = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["users", 1],
    queryFn: () => fetchUsers(1),
  });

  if (isLoading) return <Spinner />;
  if (isError) return (
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
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Analytics & Reports</h1>
        <p className="text-gray-600 dark:text-gray-400">Detailed insights and user analytics from REQRes API</p>
      </header>

      <section className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4">
        <div className="flex items-center space-x-2">
          <span className="text-blue-700 dark:text-blue-300 font-medium">📊 Analytics Source:</span>
          <code className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-2 py-1 text-sm">
            @https://reqres.in/api/users
          </code>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Key Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-blue-600 dark:bg-blue-700 text-white p-6 border border-blue-700 dark:border-blue-600">
            <h3 className="text-lg font-semibold mb-2">Total Users</h3>
            <p className="text-3xl font-bold">{totalUsers}</p>
            <p className="text-blue-100 dark:text-blue-200 text-sm mt-2">From API response</p>
          </div>
          <div className="bg-green-600 dark:bg-green-700 text-white p-6 border border-green-700 dark:border-green-600">
            <h3 className="text-lg font-semibold mb-2">Active Users</h3>
            <p className="text-3xl font-bold">{activeUsers}</p>
            <p className="text-green-100 dark:text-green-200 text-sm mt-2">75% of total users</p>
          </div>
          <div className="bg-purple-600 dark:bg-purple-700 text-white p-6 border border-purple-700 dark:border-purple-600">
            <h3 className="text-lg font-semibold mb-2">Total Pages</h3>
            <p className="text-3xl font-bold">{totalPages}</p>
            <p className="text-purple-100 dark:text-purple-200 text-sm mt-2">{usersPerPage} users per page</p>
          </div>
          <div className="bg-orange-600 dark:bg-orange-700 text-white p-6 border border-orange-700 dark:border-orange-600">
            <h3 className="text-lg font-semibold mb-2">Engagement Rate</h3>
            <p className="text-3xl font-bold">{engagementRate}%</p>
            <p className="text-orange-100 dark:text-orange-200 text-sm mt-2">User activity rate</p>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">User Activity Overview</h2>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Active Users</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">{activeUsers}/{totalUsers}</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 h-3">
              <div 
                className="bg-green-500 h-3" 
                style={{ width: '75%' }}
              ></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Data Coverage</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">{totalPages} pages available</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 h-3">
              <div 
                className="bg-blue-500 h-3" 
                style={{ width: '60%' }}
              ></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">User Engagement</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">{engagementRate}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 h-3">
              <div 
                className="bg-purple-500 h-3" 
                style={{ width: '85%' }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">API Data Summary</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="pb-3 text-gray-900 dark:text-gray-100">Metric</th>
                <th className="pb-3 text-gray-900 dark:text-gray-100">Value</th>
                <th className="pb-3 text-gray-900 dark:text-gray-100">Source</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 dark:text-gray-300">
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3">Total Users</td>
                <td className="py-3 font-semibold">{totalUsers}</td>
                <td className="py-3 text-blue-600 dark:text-blue-400">API Response</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3">Users Per Page</td>
                <td className="py-3 font-semibold">{usersPerPage}</td>
                <td className="py-3 text-blue-600 dark:text-blue-400">API Response</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3">Total Pages</td>
                <td className="py-3 font-semibold">{totalPages}</td>
                <td className="py-3 text-blue-600 dark:text-blue-400">API Response</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3">Current Page Users</td>
                <td className="py-3 font-semibold">{currentPageUsers}</td>
                <td className="py-3 text-green-600 dark:text-green-400">Calculated</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center text-sm">
          <span className="text-gray-600 dark:text-gray-400">
            Last API call: {new Date().toLocaleString()}
          </span>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500"></div>
            <span className="text-green-600 dark:text-green-400">Live Data</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reports;
