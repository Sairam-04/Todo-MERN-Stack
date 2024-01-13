const jwt = require("jsonwebtoken")

module.exports = (req, res, next) =>{
    try{
        const token = req.header("x-auth-token");
        if(!token) return res.status(403).json({
            success: false,
            message: "Access Denied"
        });

        const decodedToken = jwt.verify(token,process.env.JWT_SECRET_KEY);
        req.user = decodedToken;
        next();
    }catch(err){
        res.status(400).json({
            success: false,
            message: "Token deosnot match"
        });
    }
}