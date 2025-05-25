
import React from "react";

const StarRating = ({ rating, setRating, readonly = false }) => {
  const handleClick = (val) => {
    if (!readonly && setRating) setRating(val);
  };

  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => handleClick(star)}
          className={`cursor-pointer text-xl ${rating >= star ? "text-yellow-400" : "text-gray-300"}`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
