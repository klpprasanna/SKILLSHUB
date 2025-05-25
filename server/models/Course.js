import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema({
  title: String,
  videoUrl: String,
  resources: [String],
});

const quizSchema = new mongoose.Schema({
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  questions: [{
    question: String,
    options: [String],
    correctAnswer: String,
    type: { type: String, enum: ['mcq', 'short'] }
  }]
});

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  category: String,
  price: Number,
  instructor: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  lessons: [lessonSchema],
  quiz: [quizSchema],
  tags: [String],
  thumbnail: String,
  rating: { type: Number, default: 0 },
  enrolledCount: { type: Number, default: 0 },
  status: { type: String, enum: ["draft", "published"], default: "draft" }
}, { timestamps: true });

const Course = mongoose.model('Course', courseSchema);

// module.exports = mongoose.model('Course', courseSchema);
export default Course;