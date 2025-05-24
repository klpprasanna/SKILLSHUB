const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  category: String,
  instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  content: [
    {
      title: String,
      videoUrl: String,
      resources: [String]
    }
  ]
});

module.exports = mongoose.model('Course', CourseSchema);
