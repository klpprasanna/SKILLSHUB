const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  googleId: String,
  role: { type: String, enum: ['admin', 'instructor', 'learner'], default: 'learner' }
});

module.exports = mongoose.model('User', UserSchema);
