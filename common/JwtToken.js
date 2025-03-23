const jwt  = require("jsonwebtoken");
require("dotenv").config();
const createJWT =  (data) =>{
   const token = jwt.sign(data, process.env.SRT);
   return token;
}
module.exports = createJWT;


