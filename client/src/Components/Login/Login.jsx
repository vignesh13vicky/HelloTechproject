import { React, useState, useEffect } from "react";
import "../Login/Login.css";
import { ToastContainer, toast } from "react-toastify";
import LoginAndSignupImage from "../LoginAndSignupImage/LoginAndSignupImage";
import { Client } from "../Client";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const initialData = { email: "", password: "" };
  const navigate = useNavigate();
  const [user, setUser] = useState(initialData);
  const [visible, setVisible] = useState(false);
  const [token, setToken] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const tokens = Cookies.get("jwttoken");
    console.log(tokens);
    setToken(tokens);
  }, []);

  //  const tokens = Cookies.get("jwttoken");
  //     console.log(tokens);
  //     setToken(tokens);

  const submit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const addNewUser = await Client.post("/login/loginuser", user);
      console.log(addNewUser);
      if (addNewUser.status === 200) {
        toast.success("submitted successfully!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          theme: "colored",
        });
        // alert("submitted successfully")

        setUser(initialData);
        // Cookies.set("jwttoken", addNewUser.data.token);
        // const token = Cookies.get("jwttoken");
        // console.log(token);
        navigate("/");
        // verify();
      }
      if (addNewUser.status === 401) {
        alert("Unexpected response from server.");
        // navigate("/signup");
      }
    } catch (error) {
      console.log(error);
   toast.warning(error.response.data.message,{
          position:'top-center',
          autoClose:3000,
          hideProgressBar:false,
          closeOnClick:true,
          pauseOnHover:false,
          draggable:true,
          theme:"colored",
                  })      // if (error.status === 401) {
      //   alert("Unexpected response from server.");
      //   navigate("/signup");
      // }

      // if (error.response) {
      //   alert(error.response.data?.message || "Login failed!");
      // } else {
      //   alert("Server error or no response received.");
      // }
    }
  };

  // const verify = async () => {
  //   try {
  //     const verifyToken = await Client.get("/login/loginverify",{withCredentials:true});
  //     console.log(verifyToken);

  //     const role = verifyToken.data.role;
  //     console.log(role);

  //     if (verifyToken.status === 200) {
  //       if (role) {
  //         // navigate("http://localhost:3001");

  //         window.open("http://localhost:3001", "_blank");
  //       } else {
  //         navigate("/");
  //       }
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const verify = async()=>{
  //   try {
  //     const verifyToken = await Client.post("/signup/verify",{withCredentials:true,
  //     })
  //     console.log(verifyToken);

  //     const role = verifyToken.data.role;
  //     console.log(role);
  //     if(verifyToken.status === 200){
  //       if(role==="admin"){
  //         navigate('/admin/adminhome');
  //         // window.location.href = "http://localhost:3001/admin/adminhome";
  //       }
  //       else{
  //         navigate('/');
  //       }
  //     }

  //   } catch (error) {

  //   }
  // }

  return (
    <>
      <LoginAndSignupImage />
      <div className="container">
        <ToastContainer />
        <div className="contain_login d-flex justify-content-center align-items-center">
          <div
            className="whole_login 
"
            style={{
              top: "150px",
              position: "absolute",
              zIndex: "5",
              width: "310px",
            }}
          >
            {/* <div className="login_page"> */}
            <form>
              <h3 className="mb-3 text-center" style={{ fontWeight: "bolder" }}>
                Login page
              </h3>
              <div className="mb-3 ">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your Email Address"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <div className="position-relative">
                  <input
                    // type="password"
                    type={visible ? "text" : "password"}
                    placeholder="Enter Your Password"
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
              <div className="submit_button-whole">
                <button
                  type="submit"
                  className="submit_button"
                  onClick={submit}
                >
                  Submit
                </button>
              </div>
              <div className="">
                <p className="text-center mt-3 mb-0 small text-light">
                  Don't have an account?
                  <Link
                    to="/signup"
                    style={{ color: "#ffa920", textDecoration: "underline" }}
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </form>
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default Login;
