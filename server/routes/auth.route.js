import express from "express";
import {
  registerUser,
  loginUser,
  getMe,
  forgotPassword,
  resetPassword,
  updateDetails,
  updatePassword,
  logout,
} from "../controller/auth.js";
import { protect } from "../middleware/auth.js";

const authRouter = express.Router();

authRouter.post("/register", registerUser);
authRouter.post("/login", loginUser);
authRouter.get("/logout", logout);
authRouter.get("/me", protect, getMe);
authRouter.post("/forgotpassword", forgotPassword);
authRouter.put("/updatedetails", protect, updateDetails);
authRouter.put("/updatepassword", protect, updatePassword);
authRouter.put("/forgotpassword/:resetpassword", resetPassword);

export default authRouter;
