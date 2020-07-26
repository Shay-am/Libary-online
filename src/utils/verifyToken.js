
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
console.log(process.env.JWT_SECRET)

const verifyToken = (req, res, next) => {
  // const token = req.headers["x-access-token"] || req.headers["autorization"];
  const authHeader = req.headers.authorization;
  const token = authHeader.split(' ')[1];
  console.log(token)
  // if (!token)
  //   return res.status(401).json({
  //     msg: "Access Denied!"
  //   });
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