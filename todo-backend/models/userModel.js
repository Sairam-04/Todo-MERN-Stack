const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const securityQuestions = [
  "What is your mother's name?",
  "In which city were you born?",
  "What is the name of your first pet?",
  "What is your favorite color?",
  "What is the name of your School?",
  "What is your favorite movie?",
  "Who is your favorite sports team?",
  "What is the birthplace of your father?"
];

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is Required"],
    maxLength: [30, "Name Cannot Exceed 30 characters"],
    minLength: [3, "Name should have more than 3 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is Required"],
    unique: true,
    validate: [validator.isEmail, "Please Enter a valid email"],
  },
  phoneNumber:{
    type: String,
    required: [true, "Email is Required"],
    minLength: [10, "MobileNumber should be 10 digits"],
    maxLength: [10, "MobileNumber should be 10 digits"],

  },
  password: {
    type: String,
    required: [true, "Password is Required"],
    minLength: [8, "Password should be greater than 8 characters"],
  },
  securityQuestion:{
    question: {
        type: String,
        required: [true, "Security Question is Required"],
        enum: securityQuestions
    },
    answer: {
        type: String,
        required: [true, "Security Answer is Required"],
    }
  }
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRE,
  });
  return token;
};

userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.compareAnswer = async function(enteredAnswer){
    return await bcrypt.compare(enteredAnswer, this.securityQuestion.answer)
}

module.exports = mongoose.model("User", userSchema);
