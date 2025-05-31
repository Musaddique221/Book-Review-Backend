import express from "express";

const router = express.Router();
import { protect } from "../middleware/authMiddleware.js";

import {
  createReview,
  updateReview,
  getReview,
  deleteReview,
} from "../controllers/reviewController.js";

router.post("/:id/reviews", protect, createReview);
router.get("/:id/reviews", getReview);

router.put("/:id", protect, updateReview);
router.delete("/:id", protect, deleteReview);

export default router;
