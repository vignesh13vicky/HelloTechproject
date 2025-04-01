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


  // exports.verify = async (req, res) => {
  //   console.log(req.cookies);
  
  //   try {
  //     if (!req.cookies && !req.cookies.jwttoken) {
  //       res.status(401).json({
  //         message: "Unauthorised",
  //       });
  //     }
  //     let token = req.cookies.jwttoken;
  //     const verifyJwt = jwt.verify(token, secretKey);
  //     console.log(verifyJwt);
  //     const { id } = verifyJwt; 
  
  //     const checkUser = await SignupRegistration.findById(id);
  //     const role=checkUser.admin;
  //     console.log(role);
      
  //     console.log(checkUser);
  
  //     if (!checkUser) {
  //       res.status(401).json({
  //         message: "unauthorised user",
  //       });
  //     }
  
  //     res.status(200).json({
  //       message: "success",
  //       id: checkUser._id,
  //       role
  //     });
  //   } catch (error) {}
  // };


  // exports.verify = async (req, res) => {
  //   console.log(req.cookies);
  //   console.log("im from verify");
  
  //   try {
  //     if (!req.cookies && !req.cookies.jwttoken) {
  //       res.status(401).json({
  //         message: "Unauthorised",
  //       });
  //     }
  //     let token = req.cookies.jwttoken;
  //     const verifyJwt = jwt.verify(token, secretKey);
  //     console.log(verifyJwt);
  //     const { id } = verifyJwt; 
  
  //     const checkUser = await SignupRegistration.findById(id);
  //     const role=checkUser.admin;
  //     console.log(role);
      
  //     console.log(checkUser);
  
  //     if (!checkUser) {
  //       res.status(401).json({
  //         message: "unauthorised user",
  //       });
  //     }
  
  //     res.status(200).json({
  //       message: "success",
  //       id: checkUser._id,
  //       role
  //     });
  //   } catch (error) {}
  // };


exports.verify = async (req, res,next) => {
    console.log(req.cookies);
    console.log("im from verify");

    try {
        // Fix incorrect condition for checking token
        if (!req.cookies || !req.cookies.jwttoken) {
            return res.status(401).json({ message: "Unauthorized" ,});
        }

        let token = req.cookies.jwttoken;
        const verifyJwt = jwt.verify(token, secertKey);
        console.log("Verified JWT:", verifyJwt);
        const { id } = verifyJwt;

        const checkUser = await SignupRegistration.findById(id);

        if(checkUser){
          console.log('token iruku');
          
          next()
        }

        // Check if user exists before accessing properties
        // if (!checkUser) {
        //     return res.status(401).json({ message: "Unauthorized user" });
        // }

        // const role = checkUser.admin;
        // console.log("User Role:", role);
        // console.log("User Details:", checkUser);

        // res.status(200).json({
        //     message: "Success",
        //     id: checkUser._id,
        //     role
        // });

    } catch (error) {
        console.error("JWT Verification Error:", error);
        return res.status(403).json({ message: "Invalid or expired token" });
    }
};

exports.logout = async(req,res)=>{
  try {
      res.status(200).cookie("jwttoken","",{
          httpOnly:true,
          sameSite:"none",
          secure:true,
          expires:new Date(0)
      })
      .json({message:"success"})
  } catch (error) {
      console.log(error);
      
  }
}
