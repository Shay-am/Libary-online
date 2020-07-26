
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();


const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader.split(' ')[1];
  
  if (!token)
    return res.status(401).json({
      msg: "Access Denied!"
    });
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    console.log(verified);
    req.user = verified;
    next();
  } catch (err) {
    return res.status(401).json({
      err
    });
  }
};

module.exports = { verifyToken };