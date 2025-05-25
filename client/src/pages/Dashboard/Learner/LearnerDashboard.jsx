import React from "react";
import {
  AcademicCapIcon,
  CheckCircleIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const LearnerDashboard = () => {
  const navigate = useNavigate();

  const courses = [
    {
      id: "react101",
      title: "React for Beginners",
      progress: 60,
      lastAccessed: "2025-05-23",
      thumbnail: "https://via.placeholder.com/300x180.png?text=React+Course",
    },
    {
      id: "mongo202",
      title: "MongoDB Bootcamp",
      progress: 30,
      lastAccessed: "2025-05-20",
      thumbnail: "https://via.placeholder.com/300x180.png?text=MongoDB+Course",
    },
  ];

  const certificates = [
    {
      title: "React for Beginners",
      issuedOn: "2025-05-10",
      link: "/certificate/react101",
    },
  ];

  const reviews = [
    {
      course: "React for Beginners",
      rating: 5,
      comment: "Amazing introduction to React!",
    },
    {
      course: "MongoDB Bootcamp",
      rating: 4,
      comment: "Good content but could use more quizzes.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 p-8">
      <h1 className="text-3xl font-extrabold text-indigo-800 mb-6">
        🎓 Learner Dashboard
      </h1>

      {/* Enrolled Courses */}
      <div className="mb-10 bg-white p-6 rounded-xl shadow-lg border border-indigo-100">
        <div className="flex items-center mb-4">
          <CheckCircleIcon className="w-6 h-6 text-indigo-600 mr-2" />
          <h2 className="text-xl font-bold text-indigo-700">Your Enrolled Courses</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden shadow hover:shadow-md transition cursor-pointer"
              onClick={() => navigate(`/course/player/${course.id}`)}
            >
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">{course.title}</h3>
                <div className="w-full bg-gray-200 h-3 rounded">
                  <div
                    className="h-3 bg-indigo-500 rounded"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  {course.progress}% complete • Last accessed {course.lastAccessed}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificates */}
      <div className="mb-10 bg-white p-6 rounded-xl shadow-lg border border-yellow-100">
        <div className="flex items-center mb-4">
          <AcademicCapIcon className="w-6 h-6 text-yellow-500 mr-2" />
          <h2 className="text-xl font-bold text-yellow-600">Certificates Earned</h2>
        </div>
        {certificates.length > 0 ? (
          <ul className="space-y-3">
            {certificates.map((cert, idx) => (
              <li key={idx} className="flex justify-between items-center border-b pb-2">
                <div>
                  <p className="font-medium text-gray-800">{cert.title}</p>
                  <p className="text-sm text-gray-500">Issued on {cert.issuedOn}</p>
                </div>
                <button
                  onClick={() => navigate(cert.link)}
                  className="text-indigo-600 hover:underline text-sm"
                >
                  View PDF →
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No certificates yet</p>
        )}
      </div>

      {/* Reviews */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
        <div className="flex items-center mb-4">
          <StarIcon className="w-6 h-6 text-yellow-400 mr-2" />
          <h2 className="text-xl font-bold text-gray-700">Your Reviews</h2>
        </div>
        {reviews.length > 0 ? (
          <ul className="space-y-4">
            {reviews.map((review, idx) => (
              <li key={idx} className="border-b pb-2">
                <p className="font-semibold text-gray-800">{review.course}</p>
                <div className="flex items-center text-yellow-500 text-sm">
                  {"★".repeat(review.rating)}{" "}
                  {"☆".repeat(5 - review.rating)}
                </div>
                <p className="text-sm text-gray-600 mt-1 italic">"{review.comment}"</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No reviews submitted yet</p>
        )}
      </div>
    </div>
  );
};

export default LearnerDashboard;
