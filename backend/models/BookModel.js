import mongoose, { Schema } from "mongoose";

const bookSchema = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    requied: true,
  },

  bookName: {
    type: String,
    required: true,
  },
  author: {
    type: Strig,
  },
  reviews: {
    type: String,
  },
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
