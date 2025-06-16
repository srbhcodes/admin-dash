import { useState, useCallback, useMemo } from "react";

export const useSearch = (items = [], searchKey = "") => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
  }, []);

  const filteredItems = useMemo(() => {
    if (!items?.length) return [];
    
    return items.filter((item) => {
      if (!searchQuery) return true;
      if (!searchKey) return true;
      
      const value = item[searchKey];
      if (typeof value === 'string') {
        return value.toLowerCase().includes(searchQuery.toLowerCase());
      }
      
      return false;
    });
  }, [items, searchQuery, searchKey]);

  return {
    filteredItems,
    handleSearch,
    hasActiveSearch: searchQuery.length > 0
  };
}; 