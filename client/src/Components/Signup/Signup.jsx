import React, { useState } from "react";
import LoginAndSignupImage from "../LoginAndSignupImage/LoginAndSignupImage";
import "../Signup/Signup.css";
import { Client } from "../Client";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const navigate = useNavigate();
  const initialData = { name: "", email: "", password: "" };
  const [user, setUser] = useState(initialData);
  const [visible, setVisible] = useState(false);
  // const [errors, setErrors] = useState({ name: false, email: false, password: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
    // setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const submit = async (e) => {
    e.preventDefault();

    // let newErrors = { name: false, email: false, password: false };

    // if (!user.name.trim()) newErrors.name = true;
    // if (!user.email.trim()) newErrors.email = true;
    // if (!user.password.trim()) newErrors.password = true;

    // setErrors(newErrors);

    // If any field has an error, stop submission
    // if (Object.values(newErrors).includes(true)) {
    //   alert("Please fill in all fields correctly.");
    //   return;
    // }

    console.log(user);

    try {
      const addNewUser = await Client.post("/signup/signupAdd", { user });
      console.log("Response:", addNewUser);

      if (addNewUser.status === 200) {
        toast.success("Submitted Successfully!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          theme: "colored",
        });
        // alert(response.data.message)

        setUser(initialData);
        // Cookies.set("jwttoken", addNewUser.data.token);
        // Delay navigation until toast is visible
        setTimeout(() => navigate("/otp", { state: { user } }), 1000);
      }

      console.log(addNewUser);
    } catch (error) {
      console.error("Error Response:", error.response?.data || error.message);

      // const errorMessage = error.response?.data?.message || "Something went wrong!";

      // toast.error(errorMessage, {
      //   position: "top-center",
      //   autoClose: 3000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: false,
      //   draggable: true,
      //   theme: "colored",
      // });
      // console.log("Error Response:", error.response?.data || error.message);
      // console.log(error);
      toast.warning(error.response.data.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "colored",
      });
      // if (error.response?.status === 400) {
      //   setTimeout(() => navigate("/login"), 2000);
      // }

      // alert(error.response.data.message);
    }
  };

  return (
    <>
      <LoginAndSignupImage />
      <div className="contain_signup d-flex justify-content-center align-items-center">
        <div
          className="whole_signup"
          style={{
            top: "85px",
            position: "absolute",
            zIndex: "5",
            width: "315px",
          }}
        >
          {/* <form> */}
          <ToastContainer />
          <h3 className="mb-3 text-center">Registration page</h3>
          <div className="mb-3 ">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              // className={`form-control input-field  ${errors.name ? "error" : ""}`}
              placeholder="Enter Your Name"
              name="name"
              value={user.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              // className={`form-control input-field ${errors.email ? "error" : ""}`}
              placeholder="Enter Your Email"
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
                className="form-control"
                // className={`form-control input-field ${errors.password ? "error" : ""}`}
                placeholder="Enter Your Password"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
              <span
                className="position-absolute end-0 top-50 translate-middle-y me-3"
                // className="position-absolute top-50 end-0 translate-middle-y me-3 text-black"
                style={{ cursor: "pointer" }}
                onClick={() => setVisible(!visible)}
              >
                {visible ? <FaEye /> : <FaEyeSlash />}
              </span>
              
            </div>
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

          <button type="button" className="submit_button" onClick={submit}>
            Submit
          </button>
          <div className="">
            <p className="text-center mt-3 mb-0 small text-light">
              Already have an account?{" "}
              <Link
                to="/login"
                style={{ color: "#ffa920", textDecoration: "underline" }}
              >
                Login here
              </Link>
            </p>
          </div>

          {/* </form> */}
        </div>
      </div>
    </>
  );
};

export default Signup;
