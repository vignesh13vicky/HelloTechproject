const mongoose = require("mongoose");

const Signup = new mongoose.Schema({
    name:{type:String, required:true },
    email:{type:String, required:true },
    password:{type:String, required:true },
})

const SignupRegistration = mongoose.model('SignupPage',Signup);

module.exports = SignupRegistration