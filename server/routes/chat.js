import express from 'express'

import { getMessagesByCourse } from "../controllers/chatController.js";
import { requireAuth } from "../middlewares/authMiddleware.js";

const chatRoutes = express.Router();

chatRoutes.get("/:courseId", requireAuth, getMessagesByCourse);

export default chatRoutes;
