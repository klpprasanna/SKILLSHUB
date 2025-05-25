
import React from "react";

const LessonList = ({ lessons }) => {
  return (
    <div className="bg-white p-4 shadow rounded">
      <h4 className="text-md font-bold mb-2">Lessons</h4>
      <ul className="space-y-2">
        {lessons.map((lesson, idx) => (
          <li key={idx} className="border p-2 rounded bg-gray-100 hover:bg-gray-200">
            {lesson.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LessonList;
