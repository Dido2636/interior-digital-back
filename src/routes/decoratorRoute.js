import {Router} from "express";
import { createdecorator, logindecorator } from "../controllers/decoratorController";

const decoratorRouter = Router()



decoratorRouter.post("/register", createdecorator);
decoratorRouter.post("/login", logindecorator);


export default decoratorRouter