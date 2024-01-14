const express = require("express");
const { registerUser, loginUser, updateUser, getUser } = require("../controller/userController");
const userRouter = express.Router();
const Authorization = require("../middleware/auth");
userRouter.route("/register").post(registerUser);
userRouter.route("/login").post(loginUser);
userRouter.route("/update-me").put(Authorization, updateUser);
userRouter.route("/me").get(Authorization, getUser);
module.exports = userRouter;