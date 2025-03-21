import React, { useState } from 'react'
import '../Login/Login.css'
import LoginAndSignupImage from '../LoginAndSignupImage/LoginAndSignupImage'
import { Client } from '../Client'
import {useNavigate } from 'react-router-dom'

const Login = () => {

const initialData = {email:"",password:""}
const navigate = useNavigate();
const [user, setUser] = useState(initialData)

const handleChange=(e)=>{
  const {name,value}=e.target;
  setUser((prev)=>({...prev,[name]:value}))
}

const submit = async(e)=>{
  // e.preventDefault();
  console.log(user);
  try {
    const addNewUser = await Client.post("/login",user,{withCredentials:true,});
    console.log(addNewUser);
    if(addNewUser.status === 200){
      alert("submitted successfully")
      setUser(initialData);
      verify();
    }
  } catch (error) {
    console.log(error.response.data.message);
    alert(error.response.data.message)
    
  }
  
}

const verify = async()=>{
  try {
    const verifyToken = await Client.get("/signup/verify",{withCredentials:true,
    })
    console.log(verifyToken);
    
    const role = verifyToken.data.role;
    console.log(role);
    if(verifyToken.status === 200){
      if(role){
        navigate('/adminhome');
      }
      else{
        navigate('/');
      }
    }
    
  } catch (error) {
    
  }
}
  return (
    <>
    <LoginAndSignupImage/>
    <div className="container">
    <div className='contain_login d-flex justify-content-center align-items-center'>
       
      <div className="whole_login 
" style={{top:"150px",position:"absolute",zIndex:"5",width:"310px"}}>
        {/* <div className="login_page"> */}
        <form>
          <h3 className="mb-3 text-center"style={{fontWeight:"bolder"}}>Login page</h3>
          <div className="mb-3 ">
            <label  className="form-label">
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
            <label className="form-label">
              Password
            </label>
            <input
              type="password"
              placeholder='Enter Your Password'
              className="form-control"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
          </div>
<div className="submit_button-whole"> <button type="submit" className="submit_button" 
          onClick={submit}
          >
            Submit
          </button></div>
         
        </form>
      </div>
    {/* </div> */}
    </div>
    </div>
    </>
  )
}

export default Login
