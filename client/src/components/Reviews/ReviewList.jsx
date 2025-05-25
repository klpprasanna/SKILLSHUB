
import React from "react";
import StarRating from "./StarRating";

const ReviewList = ({ reviews }) => {
  return (
    <div className="bg-white p-4 shadow rounded">
      <h3 className="font-semibold mb-2">Reviews</h3>
      {reviews.length === 0 && <p className="text-gray-500">No reviews yet.</p>}
      <ul className="space-y-4">
        {reviews.map((rev, idx) => (
          <li key={idx} className="border-b pb-2">
            <StarRating rating={rev.rating} readonly />
            <p className="text-sm mt-1">{rev.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;
