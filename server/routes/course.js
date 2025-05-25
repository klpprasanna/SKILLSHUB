import express from 'express';
import {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse
} from '../controllers/courseController.js';
import {requireAuth, requireRole } from "../middlewares/authMiddleware.js";
const courseRoutes=express.Router();


courseRoutes.get("/", getAllCourses);
courseRoutes.get("/:id", getCourseById);

// Instructor protected routes
courseRoutes.post("/", requireAuth, requireRole("instructor"), createCourse);
courseRoutes.put("/:id", requireAuth, requireRole("instructor"), updateCourse);
courseRoutes.delete("/:id", requireAuth, requireRole("instructor"), deleteCourse);

export default courseRoutes;
