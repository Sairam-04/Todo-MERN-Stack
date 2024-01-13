const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const sendToken = require("../utils/jwtToken");
exports.registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({
      name,
      email,
      password,
    });
    user.password = await bcrypt.hash(user.password, 10);
    await user.save();
    sendToken(user, 200, res);
  } catch (error) {
    if (error.code === 11000 && error.keyPattern && error.keyPattern.email) {
      return res.status(400).json({
        success: false,
        message: "Email is already in use. Please choose a different email.",
      });
    }
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};


exports.loginUser = async (req, res, next) =>{
    try{
        const {email, password} = req.body;
        if(!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please Enter Valid Email or Password"
            })
        }
        const user = await User.findOne({email: email}).select("+password");
        if(!user){
            return res.status(404).json({
                success: false,
                message: "User Does not exist. Email or Password Invalid!"
            })
        }
        const isPasswordMatched = await user.comparePassword(password);
        if(!isPasswordMatched){
            return res.status(404).json({
                success: false,
                message: "Password is Invalid!!"
            })
        }
        sendToken(user, 200, res);
    }catch(error){
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}