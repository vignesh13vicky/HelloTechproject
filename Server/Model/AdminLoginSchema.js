const mongoose = require ("mongoose");

const loginregistrationSchema = new mongoose.Schema({
    email:{type:String, required:true},
    password:{type:String, required:true},

});

const AdminLogin = mongoose.model("Adminlogin",loginregistrationSchema);

module.exports = AdminLogin;

