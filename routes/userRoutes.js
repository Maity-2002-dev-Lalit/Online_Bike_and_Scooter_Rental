import { protect } from "../middleware/auth.js";
import { getUserData } from "../controllers/userController.js";
import express from "express";
import { registerUser,loginUser } from "../controllers/userController.js";
const userRouter=express.Router();
userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)
userRouter.get('/data',protect,getUserData)
export default  userRouter;
