import React, { useState } from "react";
import LoginAndSignupImage from "../LoginAndSignupImage/LoginAndSignupImage";
import "../Signup/Signup.css";
import { Client } from "../Client";


const Signup = () => {
  const initialData = { name: "", email: "", password: "" };
  const [user, setUser] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const submit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const addNewUser = await Client.post('/signup/signupAdd', user);
      console.log(addNewUser);

      if (addNewUser.status === 200) {
        alert("Registration successful! Redirecting to login...");
        setUser(initialData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <LoginAndSignupImage/>
    <div className="contain_signup d-flex justify-content-center align-items-center">
      <div className="whole_signup" style={{top:"85px",position:"absolute",zIndex:"5",width:"315px",}}>
        {/* <form> */}
          <h3 className="mb-3 text-center">Registration page</h3>
    
          <div className="mb-3 ">
            <label className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder='Enter Your Name'
              name="name"
              value={user.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              placeholder='Enter Your Email'
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
              className="form-control"
              placeholder='Enter Your Password'
              name="password"
              value={user.password}
              onChange={handleChange}
            />
          </div>

          {/* <div className="mb-3">
            <label className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder='Confirm Your Password'
              // name="cpassword"
              // value={user.cpassword}
              onChange={handleChange}
            />
          </div> */}

          <button type="submit" className="submit_button" onClick={submit}>
            Submit
          </button>
        {/* </form> */}
        </div>
      </div>
    </>
  )
}

export default Signup
