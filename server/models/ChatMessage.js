import mongoose from "mongoose";

const chatMessageSchema = new mongoose.Schema({
  courseId: { type: String, required: true },
  senderId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  senderName: String,
  text: String,
  timestamp: { type: Date, default: Date.now }
});

export default chatMessageSchema;
