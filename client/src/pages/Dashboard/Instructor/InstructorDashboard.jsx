import React, { useState } from "react";
import {
  CurrencyDollarIcon,
  BookOpenIcon,
  ChartBarIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";

const InstructorDashboard = () => {
  const [courses, setCourses] = useState([
    {
      title: "React Basics",
      enrollments: 35,
      rating: 4.5,
    },
    {
      title: "Advanced Node.js",
      enrollments: 20,
      rating: 4.2,
    },
  ]);
  const [earnings, setEarnings] = useState(1250);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-50 p-8">
      <h1 className="text-3xl font-extrabold text-indigo-800 mb-6">👩‍🏫 Instructor Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Courses Summary */}
        <div className="bg-white border border-indigo-100 shadow-xl p-6 rounded-xl col-span-2">
          <div className="flex items-center mb-4">
            <BookOpenIcon className="w-6 h-6 text-indigo-600 mr-2" />
            <h2 className="text-xl font-bold text-indigo-700">Manage Your Courses</h2>
          </div>
          <ul className="space-y-3">
            {courses.map((course, idx) => (
              <li key={idx} className="p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-lg font-semibold text-gray-800">{course.title}</p>
                    <p className="text-sm text-gray-500">
                      {course.enrollments} enrolled • ⭐ {course.rating}
                    </p>
                  </div>
                  <button className="text-sm text-indigo-600 hover:underline flex items-center">
                    <PencilSquareIcon className="w-4 h-4 mr-1" />
                    Edit
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Earnings Summary */}
        <div className="bg-white border border-green-100 shadow-xl p-6 rounded-xl">
          <div className="flex items-center mb-4">
            <CurrencyDollarIcon className="w-6 h-6 text-green-600 mr-2" />
            <h2 className="text-xl font-bold text-green-700">Earnings</h2>
          </div>
          <p className="text-4xl font-extrabold text-green-600">${earnings.toLocaleString()}</p>
          <p className="text-sm text-gray-500 mt-1">This month</p>
        </div>
      </div>

      {/* Course Creation Form */}
      <div className="mt-10 bg-white border border-gray-200 shadow-xl p-6 rounded-xl">
        <div className="flex items-center mb-4">
          <PencilSquareIcon className="w-6 h-6 text-indigo-500 mr-2" />
          <h2 className="text-xl font-bold text-indigo-700">Create a New Course</h2>
        </div>
        <form className="grid gap-4 md:grid-cols-2">
          <input type="text" placeholder="Course Title" className="border p-2 rounded" />
          <input type="text" placeholder="Category" className="border p-2 rounded" />
          <input type="text" placeholder="Tags (comma separated)" className="border p-2 rounded" />
          <input type="number" placeholder="Price (USD)" className="border p-2 rounded" />
          <textarea placeholder="Course Description" className="border p-2 rounded md:col-span-2"></textarea>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 md:col-span-2">
            Save Course
          </button>
        </form>
      </div>

      {/* Export & Analytics */}
      <div className="mt-10 bg-white border border-indigo-200 shadow-xl p-6 rounded-xl">
        <div className="flex items-center mb-4">
          <ChartBarIcon className="w-6 h-6 text-indigo-600 mr-2" />
          <h2 className="text-xl font-bold text-indigo-700">Course Performance</h2>
        </div>
        <p className="text-sm text-gray-600 mb-2">
          Download analytics or view learner feedback and engagement reports.
        </p>
        <button className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600">
          Export Analytics
        </button>
      </div>
    </div>
  );
};

export default InstructorDashboard;
