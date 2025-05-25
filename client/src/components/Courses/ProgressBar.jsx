
import React from "react";

const ProgressBar = ({ percent }) => {
  return (
    <div className="mt-4">
      <div className="w-full bg-gray-200 h-3 rounded">
        <div className="h-3 bg-blue-500 rounded" style={{ width: percent + "%" }}></div>
      </div>
      <p className="text-sm text-gray-500">{percent}% Complete</p>
    </div>
  );
};

export default ProgressBar;
