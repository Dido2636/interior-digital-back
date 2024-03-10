import {Router} from "express";
import { createUser, loginUser } from "../controllers/userController";

const userRouter = Router()

userRouter.post("/register", createUser)
userRouter.get("/login", loginUser)


export default userRouter