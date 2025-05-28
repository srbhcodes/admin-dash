import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../utils/api";

export const useApiFetch = (page) => {
  return useQuery({
    queryKey: ["users", page],
    queryFn: () => fetchUsers(page),
    staleTime: 0,
    refetchOnWindowFocus: false,
  });
};
