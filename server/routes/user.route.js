import express from "express";
import { protect, authorize } from "../middleware/auth.js";
import {
  createUser,
  deleteUser,
  updateUser,
  getAllUsers,
  getUser,
} from "../controller/user.js";

const userRouter = express.Router();

userRouter.use(protect);
userRouter.use(authorize("admin"));

userRouter.route("/").get(getAllUsers).post(createUser);
userRouter.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

export default userRouter;
