
import React, { useState } from "react";
import StarRating from "./StarRating";

const ReviewForm = ({ onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ rating, comment });
    setRating(0);
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded mb-4">
      <h3 className="font-semibold mb-2">Leave a Review</h3>
      <StarRating rating={rating} setRating={setRating} />
      <textarea
        placeholder="Your comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="w-full p-2 border rounded mt-2"
        required
      />
      <button type="submit" className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Submit
      </button>
    </form>
  );
};

export default ReviewForm;
