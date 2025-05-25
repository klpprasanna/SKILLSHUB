import React from "react";
import { BookOpenIcon } from "@heroicons/react/24/outline";

const CourseListInstructor = () => {
  const courses = [
    { title: "React Basics", enrolled: 35 },
    { title: "Node.js API", enrolled: 20 }
  ];

  return (
    <div className="bg-white p-6 shadow-lg rounded-xl mb-6 border border-gray-200">
      <h3 className="text-2xl font-bold text-indigo-700 mb-4 flex items-center gap-2">
        <BookOpenIcon className="w-6 h-6 text-indigo-500" />
        Your Courses
      </h3>
      <ul className="space-y-4">
        {courses.map((course, idx) => (
          <li
            key={idx}
            className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition flex justify-between items-center border border-gray-200 shadow-sm"
          >
            <div>
              <p className="text-lg font-semibold text-gray-800">{course.title}</p>
              <p className="text-sm text-gray-500">{course.enrolled} enrolled</p>
            </div>
            <button className="text-sm text-indigo-600 hover:underline">
              View
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseListInstructor;
