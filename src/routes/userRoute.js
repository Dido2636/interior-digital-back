import {Router} from "express";
import { register, login } from "../controllers/userController";
import { auth } from "../middlewares/auth";


const userRouter = Router()

userRouter.get("/register", (req, res) => res.render("Inscription"))
userRouter.get("/login", (req, res) => res.render("Connexion"))

userRouter.post("/register", register)
userRouter.post("/login", login)


export default userRouter