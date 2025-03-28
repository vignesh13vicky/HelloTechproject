import React, { useState } from 'react'
import LoginAndSignupImage from '../LoginAndSignupImage/LoginAndSignupImage'
import '../Login/Login.css'
import { Client } from '../Client'
import {useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();

  const initialData = {email:"",password:""}
  const [user, setUser] = useState(initialData)
  

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setUser((prev)=>({...prev,[name]:value}))
  }

const submit = async(e)=>{
  // e.preventDefault();
  console.log(user);
  try {
    const addNewUser = await Client.get("/adminlogin/adminloginget",user);
    console.log(addNewUser);
    if(addNewUser.status === 200){
      alert("submitted successfully")
navigate("/admin/adminhome")
      setUser(initialData);
      // verify();

    }
  } catch (error) {
    console.log(error);
   
    
  }
  
}

// const getLogin = async () => {
//     try {
//       const response = await Client.get("/userRead");
//       console.log("Fetched Users:", response.data.users);

//       if (response.status === 200) {
//         setDetails(response.data.users);
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error.response?.data || error.message);
//     }
//   };


  return (
   <>
   <LoginAndSignupImage/>
   <div className="container">
    <div className='contain_login d-flex justify-content-center align-items-center'>
       
      <div className="whole_login 
" style={{top:"150px",position:"absolute",zIndex:"5",width:"310px"}}>
        {/* <div className="login_page"> */}
        {/* <form> */}
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
         
        {/* </form> */}
      </div>
    {/* </div> */}
    </div>
    </div>
   </>
  )
}

export default Login

