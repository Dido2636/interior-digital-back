import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";
import User from "../models/userModel";

export const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let newUser = await User.create({ name, email, password });
    console.log(newUser);
    res.json({
      message: "Vous etes inscrit, vous pouvez vous connectez",
      newUser,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET);
      console.log(user);
      res.json({ token, message: "Bienvenue dans votre espace déco", user });
    } else {
      res.status(401).json({ error: "Vos identifiants ne sont pas correct" });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getAllUser = async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (error) {
    res.json(error.message);
  }
};


