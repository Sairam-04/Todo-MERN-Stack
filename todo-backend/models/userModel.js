const mongoose = require("mongoose");
const validator = require("validator")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, "Name is Required"],
        maxLength: [30, "Name Cannot Exceed 30 characters"],
        minLength: [5, "Name should have more than 5 characters"],
    },
    email:{
        type: String,
        required: [true, "Email is Required"],
        unique: true,
        validate: [validator.isEmail, "Please Enter a valid email"],
    },
    password:{
        type: String,
        required: [true, "Password is Required"],
        minLength: [8, "Password should be greater than 8 characters"],
    }
});

userSchema.methods.generateAuthToken = function (){
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRE
    });
    return token;
}

userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
}

module.exports = mongoose.model("User", userSchema);