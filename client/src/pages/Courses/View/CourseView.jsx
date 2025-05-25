
import React from "react";
import CourseCard from "../../../components/Courses/CourseCard";

const CourseView = () => {
  const courses = [
    { id: 1, title: "React Basics", instructor: "John", price: 50 },
    { id: 2, title: "Node API", instructor: "Jane", price: 70 }
  ];

  return (
    <div className="p-6 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseView;
