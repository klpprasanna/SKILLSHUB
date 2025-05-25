import React, { useState } from "react";
import LessonList from "../../../components/Courses/LessonList";
import ProgressBar from "../../../components/Courses/ProgressBar";
import ReviewForm from "../../../components/Reviews/ReviewForm";
import ReviewList from "../../../components/Reviews/ReviewList";

const CoursePlayer = () => {
  const lessons = [
    { title: "Intro", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Hooks", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
  ];

  const [reviews, setReviews] = useState([]);

  const handleNewReview = (newReview) => {
    setReviews((prev) => [...prev, newReview]);
  };

  return (
    <div className="p-6 grid md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <iframe title="video" src={lessons[0].videoUrl} className="w-full h-72 rounded" allowFullScreen />
        <ProgressBar percent={60} />
        <div className="mt-6">
          <ReviewForm onSubmit={handleNewReview} />
          <ReviewList reviews={reviews} />
        </div>
      </div>
      <LessonList lessons={lessons} />
    </div>
  );
};

export default CoursePlayer;
