import { memo, useState, useEffect } from "react";
import useDebounce from "../hooks/useDebounce";

const SearchBar = ({ onSearch, placeholder = "Search users by name..." }) => {
  const [input, setInput] = useState("");
  const debouncedInput = useDebounce(input, 300);
 
  useEffect(() => {
    onSearch(debouncedInput.trim());
  }, [debouncedInput, onSearch]);

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={input}
      onChange={(e) => setInput(e.target.value)}
      className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
    />
  );
};

export default memo(SearchBar);
