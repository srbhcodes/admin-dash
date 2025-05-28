import { useEffect } from "react";

export const usePagination = (page, setPage, totalPages) => {
  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages, setPage]);

  const onPrevious = () => {
    setPage((old) => Math.max(old - 1, 1));
  };

  const onNext = () => {
    setPage((old) => (old < totalPages ? old + 1 : old));
  };

  return { onPrevious, onNext };
};
