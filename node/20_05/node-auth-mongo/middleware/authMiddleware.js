let JWT = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

let authMiddleware = (req, res, next) => {
let authHeader = req.headers.authorization;

if(!authHeader){
    return res.json({
        message:'No token provided';
    })
}

let token = authHeader.split(' ')[1];
let decoded = JWT.verify(token, JWT_SECRET);
req.user = decoded;



    next();
};

module.exports = authMiddleware;

