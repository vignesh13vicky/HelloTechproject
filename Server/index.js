const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path= require("path")
const cookieParser= require('cookie-parser')
const app = express();

app.use(express.json());
app.use(cookieParser());

const allowedUrl = {
  origin: ["http://localhost:3000","http://localhost:3001"],
  // origin: ["https://hello-techproject-client.vercel.app","https://hello-techproject-admin.vercel.app"],
  method: ["POST","GET"], 
  credentials: true,};
app.use(cors(allowedUrl));

const userRoute = require("./Route/RegistrationRoutes");
app.use("/user", userRoute);

const loginRoute = require("./Route/LoginRoutes");
app.use("/login",loginRoute)

const signupRoute = require("./Route/SignupRouter");
app.use("/signup", signupRoute);

const adminLoginRoute = require("./Route/AdminLoginRoutes");
app.use('/adminlogin', adminLoginRoute)



const servicesTitleRoute = require ("./Route/AdminServicesTitlecardRoutes");
app.use('/servicestitle', servicesTitleRoute)

app.use("/images",express.static(path.join(__dirname,"public/images")))

// app.get("/vignesh",(req,res)=>{
// res.send("wewlcome to server");
// });

const port = 7777;
const mongo_url = "mongodb+srv://vigneshvicky13052003:8072503704@cluster0.6udwy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(mongo_url)
  .then(() => {
    console.log("mongo connected");
    app.listen(port, () => {
      console.log(`server runnning successfully ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("backend is running");
});

module.exports = app;