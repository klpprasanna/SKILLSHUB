import express from 'express'
import http from 'http'
import mongoose from 'mongoose'
import morgan from 'morgan'
import cookieParser from 'cookie-parser';
import cors from 'cors'
import 'dotenv/config'
import { Server } from 'socket.io';
import passport from 'passport';
import authRoutes from './routes/auth.js';
import courseRoutes from './routes/course.js';
import paymentRoutes from './routes/payment.js';
import progressRoutes from './routes/progress.js';
import certificateRoutes from './routes/certificate.js';
import chatRoutes from './routes/chat.js';
import adminRoutes from './routes/admin.js';



const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL,
    credentials: true
  }
});

// ✅ Middleware
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(passport.initialize()); // 

// ✅ Routes
app.get('/', (req, res) => res.send('SkillShareHub API Running'));
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/certificate', certificateRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/admin', adminRoutes);


// ✅ MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error("Mongo error:", err));

// ✅ Socket.io Integration
io.on("connection", (socket) => {
  console.log("New socket connection:", socket.id);

  socket.on("joinRoom", (roomId) => {
    socket.join(roomId);
    console.log(`User joined room ${roomId}`);
  });

  socket.on("sendMessage", ({ roomId, message }) => {
    io.to(roomId).emit("receiveMessage", message);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
