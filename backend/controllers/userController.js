import User from "../models/UserModel.js";
import bcrypt from "bcryptjs";
import genrateToken from "../utils/generateToken.js";

const signupUser = async (req, res) => {
  try {
    const { name, email, phoneNumber, password } = req.body;

    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
      res.status(400).json({ message: "User Already Exist" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      phoneNumber,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User Created Sucessfully",
      _id: user.id,
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
      token: genrateToken(user.id),
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ message: "User Not Found" });

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch)
      return res.status(400).json({ message: "Entered Wrong Password" });

    res.status(201).json({
      message: "User Fetched Successfully",
      _id: user.id,
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
      token: genrateToken(user._id),
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export { loginUser, signupUser };
