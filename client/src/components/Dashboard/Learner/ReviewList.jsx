
import React from "react";

const ReviewList = () => {
  const reviews = [
    { course: "React Basics", rating: 5, comment: "Great course!" },
    { course: "Node.js API", rating: 4, comment: "Very helpful." }
  ];

  return (
    <div className="bg-white p-4 shadow rounded">
      <h3 className="text-lg font-semibold mb-2">Your Reviews</h3>
      <ul className="space-y-2">
        {reviews.map((rev, idx) => (
          <li key={idx}>
            <p className="font-medium">{rev.course}</p>
            <p className="text-yellow-500">{"★".repeat(rev.rating)}</p>
            <p className="text-sm">{rev.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;
