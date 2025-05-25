import mongoose from "mongoose";

const ProgressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  completedLessons: [String], // lesson IDs or titles
  percentage: Number
});

export default ProgressSchema;
