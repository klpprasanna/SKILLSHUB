
import React from "react";

const FilterPanel = () => {
  return (
    <div className="w-full md:w-64 bg-white p-4 border rounded shadow">
      <h3 className="font-semibold text-lg mb-2">Filters</h3>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Price</label>
        <input type="range" min="0" max="200" className="w-full" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Rating</label>
        <select className="w-full border p-2 rounded">
          <option>Any</option>
          <option>4★ & up</option>
          <option>3★ & up</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Category</label>
        <select className="w-full border p-2 rounded">
          <option>All</option>
          <option>Programming</option>
          <option>Design</option>
          <option>Marketing</option>
        </select>
      </div>
    </div>
  );
};

export default FilterPanel;
