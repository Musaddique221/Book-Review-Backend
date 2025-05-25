import Book from "../models/BookModel.js";

const createBook = async (req, res) => {
  try {
    const { title, genre, author, description } = req.body;

    const newBook = new Book({
      title,
      genre,
      author,
      description,
      user: req.user._id,
    });
    await newBook.save();

    res
      .status(201)
      .json({ message: "New book is created sucessfully", newBook });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(201).json({ message: "All books are fetched", books });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id, "36");

    const singleBook = await Book.findById(id);
    if (!singleBook) return res.status(404).json({ message: "Book not found" });

    res
      .status(201)
      .json({ message: "Single Book is fetched succesfully", singleBook });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export { createBook, getAllBooks, getBookById };
