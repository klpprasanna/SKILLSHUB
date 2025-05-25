
import React from "react";

const ProgressTracker = () => {
  const progress = [
    { course: "React Basics", percent: 60 },
    { course: "MongoDB Bootcamp", percent: 30 }
  ];

  return (
    <div className="bg-white p-4 shadow rounded mb-4">
      <h3 className="text-lg font-semibold mb-2">Course Progress</h3>
      <ul>
        {progress.map((item, idx) => (
          <li key={idx} className="mb-3">
            <p className="font-medium">{item.course}</p>
            <div className="w-full bg-gray-200 h-3 rounded">
              <div className="bg-blue-600 h-3 rounded" style={{ width: `${item.percent}%` }}></div>
            </div>
            <p className="text-sm text-gray-500">{item.percent}% complete</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgressTracker;
