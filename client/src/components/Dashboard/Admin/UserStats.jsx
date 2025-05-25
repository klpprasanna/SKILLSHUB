
import React from "react";

const UserStats = () => {
  return (
    <div className="bg-white p-4 shadow rounded mb-4">
      <h3 className="text-lg font-semibold mb-2">User Stats</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center">
          <p className="text-2xl font-bold text-blue-600">80</p>
          <p>Learners</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-green-600">20</p>
          <p>Instructors</p>
        </div>
      </div>
    </div>
  );
};

export default UserStats;
