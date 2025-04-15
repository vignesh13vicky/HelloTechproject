import React, { useState,useEffect } from 'react'
import LoginAndSignupImage from '../LoginAndSignupImage/LoginAndSignupImage'
import '../Login/Login.css'
import { Client } from '../Client'
import {useNavigate } from 'react-router-dom'
import { FaEye,FaEyeSlash  } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie";


const Login = ({ setToken }) => {

  const navigate = useNavigate();

  const initialData = {email:"",password:""}
  const [user, setUser] = useState(initialData)
  // const [password,setPassword] = useState("")
  const [visible,setVisible] = useState(false)

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setUser((prev)=>({...prev,[name]:value}))
  }

const submit = async(e)=>{
  e.preventDefault();
  console.log(user);
  try {
    const addNewUser = await Client.post("/adminlogin/adminloginadmin",user,{withCredentials:true});
    console.log(addNewUser);
    if(addNewUser.status === 200){
      toast.success("submitted successfully!",{
        position:'top-center',
        autoClose:3000,
        hideProgressBar:false,
        closeOnClick:true,
        pauseOnHover:false,
        draggable:true,
        theme:"colored",
                })
      // alert("submitted successfully")
      // verify();
      const token = Cookies.get("jwttoken"); // or response.data.token if sent directly
      console.log("Token:", token);
      setToken(token);
      setUser(initialData);
      // navigate("/admin/adminhome")
          const role = user.role;
      if (!role) {
                navigate("/admin/adminhome");
        
                // window.open("http://localhost:3001", "_blank");
              } else {
                window.open("http://localhost:3000", "_blank");
              }
    }
  } catch (error) {
    console.log(error);
  //  alert(error.response.data.message)
   toast.warning(error.response.data.message,{
          position:'top-center',
          autoClose:3000,
          hideProgressBar:false,
          closeOnClick:true,
          pauseOnHover:false,
          draggable:true,
          theme:"colored",
                  })
    
  }
  
}

// const verify = async () => {
//   try {
//     const verifyToken = await Client.get("/login/loginverify",{withCredentials:true});
//     console.log(verifyToken);

//     const role = verifyToken.data.role;
//     console.log(role);

//     if (verifyToken.status === 200) {
//       if (role) {
//         navigate("/admin/adminhome");

//         // window.open("http://localhost:3001", "_blank");
//       } else {
//         window.open("http://localhost:3000", "_blank");
//       }
//     }
//   } catch (error) {
//     console.log(error);
//     alert(error.response.message)
//   }
// };



  return (
   <>
   <LoginAndSignupImage/>
   <div className="container">
    <ToastContainer/>
    <div className='contain_login d-flex justify-content-center align-items-center'>
       
      <div className="whole_login 
" style={{top:"150px",position:"absolute",zIndex:"5",width:"310px"}}>
        {/* <div className="login_page"> */}
        {/* <form> */}
          <h3 className="mb-3 text-center"style={{fontWeight:"bolder"}}>Login page</h3>
          <div className="mb-3 ">
            <label  className="form-label text-white">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              placeholder='Enter your Email Address'
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
          <label  className="form-label text-white">
          Password
            </label>
            <div className="position-relative">
            <input
              // type="password"
              type={visible ? "text":"password"}
              placeholder='Enter Your Password'
              className="form-control"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
          <span
                className="position-absolute end-0 top-50 translate-middle-y me-3"
                style={{ cursor: "pointer" }}
                onClick={() => setVisible(!visible)}
              >
                {visible ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
          </div>
<div className="submit_button-whole"> <button type="submit" className="submit_button" 
          onClick={submit}
          >
            Submit
          </button></div>
         
        {/* </form> */}
      </div>
    {/* </div> */}
    </div>
    </div>
   </>
  )
}

export default Login

