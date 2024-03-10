import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";
import Decorator from "../models/decoratorModel";

export const getAlldecorator = async (req, res) => {
  try {
    const decorator = await Decorator.find();
    res.json(decorator);
  } catch (error) {
    res.json(error.message);
  }
};

export const createdecorator = async (req, res) => {
  const {name, email, password} = req.body;
  try {
    let newDecorator = await Decorator.create({name, email, password});
    console.log(newDecorator);
    res.json({ message: "Votre espcace de décorateur ", newDecorator });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const logindecorator = async (req, res) => {
  const { email, password } = req.body;
  try {
    const decorator = await Decorator.findOne({ email });
    if (decorator && (await bcrypt.compare(password, decorator.password))) {
      const token = jwt.sign(
        { email: decorator.email },
        process.env.JWT_secret
      );
      res.json({ token });
      console.log(token)
    } else {
      res.status(401).json({ error: "Vos identifiants sont invalides" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


