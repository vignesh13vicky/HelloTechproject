const SignupRegistration = require("../Model/SignupSchema");
const bcrypt = require("bcryptjs");
const nodemon = require("nodemon");

exports.newSignupRegistration = async (req,res)=>{
    console.log(req.body);
    
    console.log("new signup registration");
    const {name,email,password}=req.body;
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password,salt);
    try{
        const addNewUser = await SignupRegistration.create({name,email,password:hashPassword})
        if(addNewUser){
            res.status(200).json({message:'success',})
        }
        console.log(addNewUser);

    }
    
    catch(error){
        console.log(error);
        
    }
  
    
}