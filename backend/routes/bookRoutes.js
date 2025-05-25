import express from "express";
import {
  createBook,
  getAllBooks,
  getBookById,
} from "../controllers/bookController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createBook);
router.get("/", getAllBooks);
router.get("/:id", getBookById);

export default router;
