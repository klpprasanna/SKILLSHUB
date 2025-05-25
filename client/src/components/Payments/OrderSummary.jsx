
import React from "react";

const OrderSummary = ({ course }) => {
  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h3 className="text-lg font-semibold">Course Summary</h3>
      <p className="mt-2">Course: <strong>{course.title}</strong></p>
      <p>Price: <strong>${course.price}</strong></p>
    </div>
  );
};

export default OrderSummary;
