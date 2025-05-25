
import React from "react";

const SearchBar = ({ keyword, setKeyword }) => {
  return (
    <input
      type="text"
      value={keyword}
      onChange={(e) => setKeyword(e.target.value)}
      placeholder="Search courses..."
      className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-indigo-300"
    />
  );
};

export default SearchBar;
