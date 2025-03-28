const SignupRegistration = require("../Model/SignupSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const secertKey="secertIsPassword"
const expiryTime = "10m"

exports.login = async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;
    try {
      const checkUser = await SignupRegistration.findOne({ email });
      console.log(checkUser);
  
      if (!checkUser) {
        res.status(401).json({
          message: "Invalid User",
        });
      }
  
      const checkPassWord = await bcrypt.compare(password, checkUser.password);
      console.log(checkPassWord);
  
      if (!checkPassWord) {
        res.status(401).json({
          message: "Invalid Password",
        });
      }
  
      const token = jwt.sign({ id: checkUser._id }, secertKey, {
        expiresIn: expiryTime,
      });
      console.log("Login",token);
  
      if (token) {
        res
          .status(200)
          .cookie("jwttoken", token, {
            httpOnly: true,
            sameSite: "none",
            secure: true,
          })
          .json({ message: "success",token:token });
      }
    } catch (error) {
        // console.log("token not generated");
        
    }
  };


  exports.verify = async (req, res) => {
    console.log(req.cookies);
  
    try {
      if (!req.cookies && !req.cookies.jwttoken) {
        res.status(401).json({
          message: "Unauthorised",
        });
      }
      let token = req.cookies.jwttoken;
      const verifyJwt = jwt.verify(token, secretKey);
      console.log(verifyJwt);
      const { id } = verifyJwt; 
  
      const checkUser = await SignupRegistration.findById(id);
      const role=checkUser.admin;
      console.log(role);
      
      console.log(checkUser);
  
      if (!checkUser) {
        res.status(401).json({
          message: "unauthorised user",
        });
      }
  
      res.status(200).json({
        message: "success",
        id: checkUser._id,
        role
      });
    } catch (error) {}
  };