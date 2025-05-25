import express from 'express'

import { generateCertificate } from "../controllers/certificateController.js";
import { requireAuth } from "../middlewares/authMiddleware.js";

const certificateRoutes = express.Router();
certificateRoutes.get("/:courseId", requireAuth, generateCertificate);

export default certificateRoutes;
