const SignupRegistration = require("../Model/SignupSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const secertKey="secertIsPassword"
const expiryTime = "10m"

const nameRegex = /^[a-zA-Z0-9._-]{3,16}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;


const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    auth: {
        user: "vigneshvicky13052003@gmail.com",
        pass: "tugz oanc mapj gagb",
    },
  });

exports.newSignupRegistration = async (req,res)=>{
    // const {name,email, password}=req.body;
    console.log("Received Request Body:", req.body);
    const { user } = req.body;
    console.log("new signup registration");
    // const salt = bcrypt.genSaltSync(10);
    // const hashPassword = bcrypt.hashSync(password,salt);

    if (!user) {
        return res.status(400).json({ message: "Invalid request format" });
    }

    const { name, email, password } = user; // Extract values from the 'user' object

    console.log("Extracted Name:", name);
    console.log("Extracted Email:", email);
    console.log("Extracted Password:", password);


    try{
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'All fields are require' });
          }
          if (!nameRegex.test(name)) {
            console.log("Name validation failed for:", name);
            return res.status(400).json({ message: " Invalid username! \n Username must be 3-16 characters long and can only contain letters, numbers, dots (.), underscores (_), and hyphens (-). \n It cannot start or end with '.' '_' or '-'." });
          }
          if (!emailRegex.test(email)) {
            console.log("Email validation failed for:", email);
            return res.status(400).json({ message: "Invalid email Enter Email address correctly" });
          }
          if (!passwordRegex.test(password)) {
            return res.status(400).json({
              message: "Password must be at least 6 characters long, include UPPERCASE, lowercase, number, and special_ch@r@cter,"
            });
          }

          const existingUserEmail = await SignupRegistration.findOne({ email });
    if (existingUserEmail) {
      return res.status(400).json({ message: "Email is already in registered" });
    }
    const existingUserName = await SignupRegistration.findOne({ name });
    if (existingUserName) {
      return res.status(400).json({ message: "UserName is already in registered" });
    }
    else {
      const otp = Math.floor(100000 + Math.random() * 900000);

      const mailOptions = {
        from: "vigneshvicky13052003@gmail.com",
        to: email,
        subject: "Your OTP for Verification",
        text: `Your OTP is ${otp}. It is valid for 5 minutes.`,
      };
      await transporter.sendMail(mailOptions);

        const addNewUser = await SignupRegistration({name,otp: otp, otpExpires: Date.now() + 5 * 60 * 1000, })
        await addNewUser.save()

      res.status(200).json({
        message: "User registered successfully! OTP sent to email."
      });
        console.log(addNewUser);
        console.log(otp);
    }
}
    catch(error){
        console.log(error); 
    }  
}


exports.SignupCheck = async (req,res)=>{
    try {
    const {name,email,password,otp, otpExpires}=req.body
    console.log(req.body);
   
    if (!email || !otp) {
        return res.status(400).json({ message: "Email and OTP are required" });
      }  

    const SignupCheck = await SignupRegistration.findOne({name});
    console.log(SignupCheck);

    if (!SignupCheck) {
        res.status(400).json({
            message:"Invalid User",
        })
    }

    if (otp === SignupCheck.otp) {
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt);
    const SignupCheckPassword = await SignupRegistration.findByIdAndUpdate( SignupCheck._id,
        {
          verify: true,
          password: hashPassword,
          otp: "",
          otpExpires: "",
          email: email,
          name: name,
        },
        {
          new: true,
        });
    console.log(SignupCheckPassword);
   }
   
   
    const token = jwt.sign({id:SignupCheck._id},secertKey,{
        expiresIn:expiryTime,
    })
    console.log("sigin",token);
    if (token) {
        res.status(200).cookie("jwttoken",token,{
            httpOnly:false,
            sameSite:"none",
            secure:true,
        })
        .json({message:"success",token:token })
    }
    } catch (error) {
        console.log(error);
        
    }
}

// exports.verify = async(req,res)=>{
//     console.log(req.cookies);
//     try {
//         if (!req.cookies && !req.cookies.jwttoken) {
//             res.status(401).json({
//                 message:"Unauthorised"
//             });

//         }
//         let token = req.cookies.jwttoken;
//         const verifyJwt = jwt.verify(token,secertKey);
//         console.log(verifyJwt);
//         const {id} = verifyJwt;

//         const SignupCheck = await SignupRegistration.findById(id);
//         // const role = SignupCheck.admin;
//         // console.log(role);
//         console.log(SignupCheck);
//         if (!SignupCheck) {
//             res.status(401).json({
//                 message:"unauthorised user",
//             })
//         }
//         res.status(200).json({
//             message:"success",
//             id:SignupCheck._id,
//             role
//         })
//     } catch (error) {
        
//     }
// }


exports.signOut = async(req,res)=>{
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


