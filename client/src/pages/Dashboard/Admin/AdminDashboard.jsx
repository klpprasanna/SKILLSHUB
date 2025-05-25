
import React, { useState } from "react";
import {
  UsersIcon,
  ExclamationTriangleIcon,
  Cog6ToothIcon,
  ChartBarIcon,
  TrashIcon,
  EyeSlashIcon
} from "@heroicons/react/24/solid";

const AdminDashboard = () => {
  const [users] = useState([
    { id: 1, name: "Alice", role: "learner", status: "active" },
    { id: 2, name: "Bob", role: "instructor", status: "blocked" }
  ]);

  const [reviews] = useState([
    { id: 1, course: "React Basics", flaggedBy: "user123", reason: "Spam" },
    { id: 2, course: "Node.js API", flaggedBy: "user456", reason: "Inappropriate" }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 p-8">
      <h1 className="text-3xl font-extrabold text-blue-900 mb-6">🛠 Admin Dashboard</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Site Analytics */}
        <div className="bg-white p-6 rounded-xl shadow border border-blue-200">
          <div className="flex items-center mb-4">
            <ChartBarIcon className="w-6 h-6 text-blue-600 mr-2" />
            <h2 className="text-xl font-bold text-blue-800">Platform Analytics</h2>
          </div>
          <ul className="text-gray-700 space-y-1">
            <li>👤 Active users: <strong>120</strong></li>
            <li>💰 Total revenue: <strong>$25,000</strong></li>
            <li>📚 Top course: <strong>React Basics</strong></li>
          </ul>
        </div>

        {/* Settings */}
        <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
          <div className="flex items-center mb-4">
            <Cog6ToothIcon className="w-6 h-6 text-gray-600 mr-2" />
            <h2 className="text-xl font-bold text-gray-700">System Settings</h2>
          </div>
          <ul className="text-gray-700 space-y-1">
            <li>💸 Default pricing tier: $49</li>
            <li>📁 Categories: Programming, Design, Business</li>
            <li>📆 Monthly payout schedule: Enabled</li>
          </ul>
        </div>
      </div>

      {/* Users Table */}
      <div className="mt-10 bg-white p-6 rounded-xl shadow border border-blue-100">
        <div className="flex items-center mb-4">
          <UsersIcon className="w-6 h-6 text-blue-600 mr-2" />
          <h2 className="text-xl font-bold text-blue-800">User Management</h2>
        </div>
        <table className="w-full text-sm text-left text-gray-700">
          <thead>
            <tr className="bg-gray-100 border-b text-gray-600">
              <th className="p-2">Name</th>
              <th className="p-2">Role</th>
              <th className="p-2">Status</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-b hover:bg-gray-50">
                <td className="p-2">{u.name}</td>
                <td className="p-2 capitalize">{u.role}</td>
                <td className="p-2 capitalize">{u.status}</td>
                <td className="p-2 flex gap-2">
                  <button className="text-red-500 hover:text-red-700">
                    <TrashIcon className="w-5 h-5" title="Delete" />
                  </button>
                  <button className="text-yellow-600 hover:text-yellow-800">
                    <EyeSlashIcon className="w-5 h-5" title="Block" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Review Moderation */}
      <div className="mt-10 bg-white p-6 rounded-xl shadow border border-red-200">
        <div className="flex items-center mb-4">
          <ExclamationTriangleIcon className="w-6 h-6 text-red-500 mr-2" />
          <h2 className="text-xl font-bold text-red-700">Flagged Reviews</h2>
        </div>
        <ul className="space-y-3">
          {reviews.map((r) => (
            <li key={r.id} className="border-b pb-2">
              <p><strong>{r.course}</strong> flagged by {r.flaggedBy} - <em>{r.reason}</em></p>
              <div className="text-sm mt-1 text-gray-600">
                <button className="mr-4 text-indigo-600 hover:underline">Review</button>
                <button className="text-red-600 hover:underline">Remove</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
