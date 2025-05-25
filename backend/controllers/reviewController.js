import Review from "../models/reviewModel.js";
import Book from "../models/BookModel.js";

const getReview = async (req, res) => {
  try {
    const { id: bookId } = req.params;
    const reviews = await Review.find({ book: bookId }).populate(
      "user",
      "name"
    );

    if (!reviews || reviews.length === 0) {
      return res
        .status(404)
        .json({ message: "No reviews found for this book" });
    }

    return res.status(200).json({
      message: "Reviews fetched successfully",
      reviews,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const bookId = req.params.id;
    const userId = req.user._id;

    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    const existingReview = await Review.findOne({ book: bookId, user: userId });
    if (existingReview) {
      return res
        .status(400)
        .json({ message: "You already reviewed this book" });
    }

    const review = await Review.create({
      book: bookId,
      user: userId,
      rating,
      comment,
    });

    res.status(201).json({ message: "Review created", review });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateReview = async (req, res) => {
  try {
    const reviewId = req.params.id;

    const review = await Review.findById(reviewId);
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    review.rating = req.body.rating || review.rating;
    review.comment = req.body.rating || review.rating;

    await review.save();
    res.status(200).json({ message: "Review updated", review });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteReview = async (req, res) => {
  try {
    const { reviewId } = req.params;

    const review = await Review.findById(reviewId);
    if (!review) return res.status(404).json({ message: "Review not found" });

    await Review.findByIdAndDelete(reviewId);
    res.status(200).json({ message: "Review deleted successfully", review });
  } catch (err) {
    res.status(500).json({ message: res.message });
  }
};

export { createReview, getReview, updateReview, deleteReview };
