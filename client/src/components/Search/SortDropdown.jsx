
import React from "react";

const SortDropdown = () => {
  return (
    <div className="mb-4">
      <select className="p-2 border rounded">
        <option>Sort by</option>
        <option value="price">Price</option>
        <option value="rating">Rating</option>
        <option value="popularity">Popularity</option>
      </select>
    </div>
  );
};

export default SortDropdown;
