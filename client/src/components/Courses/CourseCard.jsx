
import React from "react";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ course }) => {
  const navigate = useNavigate();
  return (
    <div className="border rounded p-4 shadow hover:shadow-md cursor-pointer" onClick={() => navigate(`/course/player/${course.id}`)}>
      <h3 className="font-semibold text-lg">{course.title}</h3>
      <p className="text-sm text-gray-600">By {course.instructor}</p>
      <p className="text-blue-600 font-bold mt-2">${course.price}</p>
    </div>
  );
};

export default CourseCard;
