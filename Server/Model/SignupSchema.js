const mongoose = require("mongoose");

const Signup = new mongoose.Schema({
    name:{type:String, required:true ,unquie:true},
    email:{type:String, unquie:true },
    password:{type:String },
    otp: { type: String },  
    otpExpires: { type: Date },
    admin:{type:Boolean,default:false},
    verify: { type: Boolean, default: false },
},{ timestamps: true })

const SignupRegistration = mongoose.model('Signup Page',Signup);

module.exports = SignupRegistration