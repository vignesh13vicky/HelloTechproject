import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelopeOpen, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const ContactQuery = () => {
  return (
    <div className="container ">
      <div className="d-flex justify-content-center align-items-center  mb-5">
        <h1 style={{ fontWeight: "bolder" }}>Contact For Any Query</h1>
      </div>
      {/* <div className="d-flex justify-content-space-between align-items-center"> */}
      <div className="row d-flex justify-content-center align-items-center mb-5">
      <div className="col-12 col-md-6 col-lg-4 mb-2">
          
          <div
            className="address"
            style={{ fontSize: "clamp(0px, 5vw, 20px)" }}
          >
            Address
          </div>
          <div>
            <Link to=" " style={{ textDecoration: "none", color: "black",fontSize: "clamp(0px, 5vw, 15px)" }}>
              <FaLocationDot className="Icons" /> 100/4,Vayalcheri, Thiruppuvanam,
              Sivagangai - 630611.
            </Link>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-2 ">
          <div className="">
            <div
              className="number"
              style={{ fontSize: "clamp(0px, 5vw, 20px)" }}
            >
              Mobile Number
            </div>
            <div>
              <Link
                to="tel:+918072503704"
                style={{ textDecoration: "none", color: "black",fontSize: "clamp(0px, 5vw, 15px)" }}
              >
                <FaPhoneAlt className="Icons" />
                +91 80725-03704
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="email" style={{ fontSize: "clamp(0px, 5vw, 20px)" }}>
            Email
          </div>
          <div>
            <Link
              to="mailto:vigneshvicky13052003@gmail.com"
              target="_blank"
              style={{ textDecoration: "none", color: "black",fontSize: "clamp(0px, 5vw, 15px)" }}
            >
              <FaEnvelopeOpen className="Icons" />{" "}
              vigneshvicky13052003@gmail.com
            </Link>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default ContactQuery;
