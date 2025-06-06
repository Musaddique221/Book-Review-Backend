import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import userRoutes from "./routes/userRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use("/users", userRoutes);
app.use("/books", bookRoutes);
app.use("/reviews",reviewRoutes);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json("BOOK REVIEW BACKEND IS RUNNING");
});

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
