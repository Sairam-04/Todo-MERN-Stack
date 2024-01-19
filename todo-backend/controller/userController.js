const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const sendToken = require("../utils/jwtToken");
exports.registerUser = async (req, res, next) => {
	try {
		const { name,phoneNumber, email,securityQuestion, password } = req.body;
		const user = new User({
			name,
			email,
			phoneNumber,
			password,
			securityQuestion
		});
		user.password = await bcrypt.hash(user.password, 10);
		user.securityQuestion.answer = await bcrypt.hash(user.securityQuestion.answer, 10);
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


exports.loginUser = async (req, res, next) => {
	try {
		const { email, password } = req.body;
		if (!email || !password) {
			return res.status(400).json({
				success: false,
				message: "Please Enter Valid Email or Password"
			})
		}
		const user = await User.findOne({ email: email }).select("+password");
		if (!user) {
			return res.status(404).json({
				success: false,
				message: "User Does not exist. Email or Password Invalid!"
			})
		}
		const isPasswordMatched = await user.comparePassword(password);
		if (!isPasswordMatched) {
			return res.status(404).json({
				success: false,
				message: "Password is Invalid!!"
			})
		}
		sendToken(user, 200, res);
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: "Internal Server Error"
		})
	}
}

exports.updateUser = async (req, res, next) => {
	try {
		const user_id = req.user._id;
		if (!user_id) {
			return res.status(400).json({
				success: false,
				message: "User Not Found"
			})
		}
		const newUserData = {
			name: req.body.name,
			email: req.body.email,
			lastName: req.body.lastName,
			phoneNumber: req.body.phoneNumber
		}
		const user = await User.findByIdAndUpdate(user_id, newUserData, {
			new: true,
			runValidators: true,
			useFindAndModify: true
		})
		return res.status(200).json({
			success: true,
			user
		})
	}
	catch (err) {
		console.log(err)
		return res.status(500).json({
			success: false,
			error: err
		})
	}
}

exports.getUser = async (req, res, next) =>{
	try{
		const user_id = req.user._id;
		if(!user_id){
			return res.status(400).json({
				success: false,
				message: "User Not Found"
			})
		}
		const user = await User.findById(user_id);
		return res.status(200).json({
			success: true,
			user
		})
	}catch(err){
		return res.status(500).json({
			success: false,
			error: err
		})
	}
}

exports.resetPassword = async (req, res, next) =>{
	try{
		const user_id = req.user._id;
		if(!user_id){
			return res.status(400).json({
				success: false,
				message: "User Not Found"
			})
		}
		const user = await User.findById(user_id);
		if(!user){
			return res.status(400).json({
				success: false,
				message: "User does not exists"
			})
		}
		const {answer} = req.body;
		const isAnswerMatched = await user.compareAnswer(answer);
		if(!isAnswerMatched){
			return res.status(400).json({
				success: false,
				message: "Security Answer is not matched"
			})
		}
		const {newPassword} = req.body;
		user.password = await bcrypt.hash(newPassword, 10);
		user.save();

		return res.status(200).json({
			success: true,
			message:"Password Saved Successfully"
		})
	}catch(err){
		console.log(err)
		return res.status(500).json({
			success: false,
			error: err
		})
	}
}