import { React, useState, useEffect } from "react";
import { Client } from "../Client";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Cookies from "js-cookie";

const Otp = () => {
  const [otp, setOtp] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user; // ✅ Use optional chaining
  // const [token,setToken] = useState()
  // useEffect(() => {
  //   if (!user) {
  //     alert("User data missing! Redirecting to signup.");
  //     navigate("/signup"); // ✅ Redirect to signup if user data is missing
  //   }
  // }, [user, navigate]);

  // useEffect(() => {
  //   const tokens = Cookies.get("jwttoken");
  //   console.log(tokens);
  //   setToken(tokens);
  // },[]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOtp(value);
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    if (otp.length !== 6) {
      alert("Please enter a valid 6-digit OTP.");
    } else {
      console.log("OTP submitted:", otp);
    }
    try {
      const verifyOpUser = await Client.post("/signup/signcheck", {
        name: user.name,
        password: user.password,
        email: user.email,
        otp: otp,
        otpExpires: user.otpExpires,
      });
      if (verifyOpUser.status === 200 && verifyOpUser.data) {
        toast.success("Otp verified!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          theme: "colored",
        });
        // alert("Otp verified")
        //     Cookies.set("jwttoken", verifyOpUser.data.token);
        // setToken(verifyOpUser.data.token);
        // const token = Cookies.get("jwttoken");
        const token = verifyOpUser.data.token;
        localStorage.setItem("jwttoken",token)
        console.log(token);
        navigate("/");
      }
    } catch (err) {
      // if(err.response.status===500){
      console.log(err);
      // alert("Invalid OTP");
    }
  };

  return (
    <>
     <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-light">
  <div className="card shadow p-4" style={{ maxWidth: "400px", width: "100%" }}>
    <ToastContainer />
    <h4 className="mb-4 text-center">Verify OTP</h4>

    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter OTP"
        name="otp"
        value={otp.otp}
        onChange={handleChange}
      />
    </div>

    <div className="d-grid">
      <button
        className="submit_button"
        onClick={handleOtpSubmit}
      >
        Verify
      </button>
    </div>
  </div>
</div>

    </>
  );
};

export default Otp;
