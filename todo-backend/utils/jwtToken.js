const sendToken = (user, statusCode, res) =>{
    const token = user.generateAuthToken();
    return res.status(statusCode).json({
        success: true,
        user,
        token
    })
};

module.exports = sendToken;