import express from "express";
import {getMyProfile, login, logout, register,} from "../Controllers/user.js"
import { isAuthenticated } from "../middlewares/auth.js";
const router = express.Router();

// app.get use router.get because need to add prifix /users all time
// /users/all to /all because add prifix in userRouter 
router.post("/new", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/me",isAuthenticated, getMyProfile)

export default router;
