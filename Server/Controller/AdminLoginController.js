const SignupRegistration = require("../Model/SignupSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const secertKey = "secertIsPassword"
const expiryTime = "10m"

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

exports.login = async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(400).json({ message: 'All fields are require' });
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

        const checkUser = await SignupRegistration.findOne({ email });
        console.log(checkUser);

        if (!checkUser) {
           return res.status(401).json({
                message: "Invalid User",
            });
        }

        const checkPassWord = await bcrypt.compare(password, checkUser.password);
        console.log(checkPassWord);

        if (!checkPassWord) {
            return res.status(401).json({
                message: "Invalid Password",
            });
        }
        const role = checkUser.admin;
        console.log("User Role:", role);
        console.log("User Details:", checkUser);
        
        if (!checkUser.admin) {
            return res.status(403).json({
                message: "Not an authorized person",
            });
        }
        // res.status(200).json({
        //     message: "Success",
        //     id: checkUser._id,
        //     role
        // });
        const token = jwt.sign({ id: checkUser._id }, secertKey, {
            expiresIn: expiryTime,
        });
        console.log("admin Login", token);

        if (token) {
            res
                .status(200)
                .cookie("jwttoken", token, {
                    httpOnly: false,
                    sameSite: "none",
                    secure: true,
                })
                .json({ message: "success", role,role: checkUser.admin ? "admin" : "user",
                    userId: checkUser._id});
        }
    } catch (error) {
        // console.log("token not generated");

    }
};




// exports.Login = async (req,res)=>{
//     console.log(req.body);

//     console.log("new login from admin registration");
//     // const {email,password}=req.body;
//     const { user } = req.body;

//     if (!user) {
//       return res.status(400).json({ message: "Invalid request format" });
//   }

//   console.log("Extracted Email:", email);
//   console.log("Extracted Password:", password);


//     try{

//       if ( !email || !password) {
//         return res.status(400).json({ message: 'All fields are require' });
//       }
//       if (!emailRegex.test(email)) {
//         console.log("Email validation failed for:", email);
//         return res.status(400).json({ message: "Invalid email Enter Email address correctly" });
//       }
//       if (!passwordRegex.test(password)) {
//         return res.status(400).json({
//           message: "Password must be at least 6 characters long, include UPPERCASE, lowercase, number, and special_ch@r@cter,"
//         });
//       }
//       const existingUserEmail = await SignupRegistration.findOne({ email });
//       if (!existingUserEmail) {
//         return res.status(400).json({ message: "Email is already is not valid" });
//       }


//         const addNewUser = await AdminLogin.create({email,password})
//         if(addNewUser){
//             res.status(200).json
//             ({message:'success',})
//         }
//         console.log(addNewUser);

//     }

//     catch(error){
//         console.log(error);

//     } 
// }

// exports.getLogin = async (req, res) => {
//     console.log("Get User API hit");

//     try {
//       const getLogin = await AdminLogin.find();
//       console.log("Fetched Users:", getLogin);

//       res.status(200).json({
//         message: "Success",
//         users: getLogin,
//       });

//     } catch (error) {
//       console.error("Error fetching users:", error);
//       res.status(500).json({ message: "Server Error", error: error.message });
//     }
//   };


// // exports.getUser = async (req, res) => {
// //     console.log("Get User API hit");

// //     try {
// //       const getUser = await messageSchema.find();
// //       console.log("Fetched Users:", getUser);

// //       res.status(200).json({
// //         message: "Success",
// //         users: getUser,
// //       });

// //     } catch (error) {
// //       console.error("Error fetching users:", error);
// //       res.status(500).json({ message: "Server Error", error: error.message });
// //     }
// //   };

// // exports.Login = async (req, res) =>{
// //     console.log("rec body",req.body);
// //     const {email, password} = req.body;
// //     try {

// //         if(!email){
// //             return res.status(400).json({error: "email is required"})
// //         }

// //         const newLogin = new this.Login({ email, password });
// //         await newLogin.save();

// //         res.status(201).json({ message: "Product created successfully!", Login: newLogin });    } 
// //         catch (error) {
// //             res.status(500).json({ error: error.message});

// //     }
// // }

exports.verify = async (req, res) => {
    console.log(req.cookies);
    console.log("im from verify");

    try {
        // Fix incorrect condition for checking token
        if (!req.cookies || !req.cookies.jwttoken) {
            return res.status(401).json({ message: "Unauthorized", });
        }

        let token = req.cookies.jwttoken;
        const verifyJwt = jwt.verify(token, secertKey);
        console.log("Verified JWT:", verifyJwt);
        const { id } = verifyJwt;

        const checkUser = await SignupRegistration.findById(id);

        if (checkUser) {
            console.log('token iruku');

        }

        // Check if user exists before accessing properties
        if (!checkUser) {
            return res.status(401).json({ message: "Unauthorized user" });
        }

        const role = checkUser.admin;
        console.log("User Role:", role);
        console.log("User Details:", checkUser);

        res.status(200).json({
            message: "Success",
            id: checkUser._id,
            role
        });

    } catch (error) {
        console.error("JWT Verification Error:", error);
        return res.status(403).json({ message: "Invalid or expired token" });
    }
};