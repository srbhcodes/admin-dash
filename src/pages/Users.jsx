import { Suspense, useState, useEffect, memo } from "react";
import Pagination from "../components/Pagination";
import Spinner from "../components/Spinner";
import SkeletonLoader from "../components/SkeletonLoader";
import TableRow from "../components/TableRow";
import SearchBar from "../components/SearchBar";
import { useApiFetch } from "../hooks/useApiFetch";
import { usePagination } from "../hooks/usePagination";
import { useSearch } from "../hooks/useSearch";

const UsersTable = memo(({ filteredItems }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
      <thead>
        <tr className="bg-gray-200 dark:bg-gray-700 text-left">
          <th className="p-3">Avatar</th>
          <th className="p-3">Name</th>
          <th className="p-3">Email</th>
        </tr>
      </thead>
      <tbody>
        {filteredItems.map((user) => (
          <TableRow key={user.id} user={user} />
        ))}
      </tbody>
    </table>
  </div>
));

const Users = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  
  const { data, isLoading, isError, error } = useApiFetch(page);
  
  useEffect(() => {
    if (data?.total_pages) {
      setTotalPages(data.total_pages);
    }
  }, [data?.total_pages]);
  
  const { onPrevious, onNext } = usePagination(page, setPage, totalPages);
  const { filteredItems, handleSearch, hasActiveSearch } = useSearch(
    data?.data || [], 
    "first_name"
  );

  if (isLoading) return <Spinner />;
  if (isError) return (
    <div className="text-red-500 text-center py-4">
      Failed to fetch users: {error.message}
    </div>
  );

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Users (Page {page})</h1>

      <div>
        <SearchBar onSearch={handleSearch} />
        {hasActiveSearch && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Showing {filteredItems.length} filtered result(s)
          </p>
        )}
      </div>

      <Suspense fallback={<SkeletonLoader />}>
        <UsersTable filteredItems={filteredItems} />
      </Suspense>

      {totalPages > 1 && (
        <Pagination
          page={page}
          totalPages={totalPages}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      )}
    </div>
  );
};

export default Users;
