import { User } from "../models/user.js";
import Jwt from "jsonwebtoken";

export const isAuthenticated = async (req,res,next)=>{

    const token = req.cookies.token;
    // console.log(token);
    if(!token)
    return res.status(404).json({
        success:"true",
        message:"Login First"
    });

    const decoded = Jwt.verify(token,process.env.JWT_SECRET);

    req.user = await User.findById(decoded._id);
    next();
}