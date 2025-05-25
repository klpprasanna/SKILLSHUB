import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  questions: [{
    question: String,
    options: [String],
    correctAnswer: String,
    type: { type: String, enum: ['mcq', 'short'] }
  }]
});

export default quizSchema;
