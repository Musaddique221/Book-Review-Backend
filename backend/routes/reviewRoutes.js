import express from "express";

const router = express.Router();
import { protect } from "../middleware/authMiddleware.js";

import {
  createReview,
  updateReview,
  getReview,
  deleteReview,
} from "../controllers/reviewController.js";

router.post("/:id", protect, createReview);
router.put("/:id", protect, updateReview);
router.delete("/:id", protect, deleteReview);
router.get("/:id", protect, getReview);
export default router;
