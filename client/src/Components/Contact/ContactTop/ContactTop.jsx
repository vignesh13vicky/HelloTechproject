import React from 'react'
import { Link } from 'react-router-dom'


const ContactTop = () => {
  return (
    <div>
       <div className="">
    <div
        className="abt"
        style={{
          position: "absolute",
          zIndex: "2",
          top: "45%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          color: "white",
          fontSize: "32px",
        }}
      >
        <p style={{ fontSize: "clamp(30px, 5vw, 50px)" }}>Contact</p>
      </div>
      <div
        className="abt"
        style={{
          position: "absolute",
          zIndex: "2",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          color: "white",
          fontSize: "32px",
          marginBottom: "45px",
        }}
      >
        <span style={{margin:"15px"}}>
          <Link to="/" style={{ fontSize: "clamp(10px, 5vw, 25px)",textDecoration:"none",color:"#ffa920" }}>Home</Link>
        </span>/
        <span style={{margin:"15px"}}>
          <Link  style={{ fontSize: "clamp(10px, 5vw, 25px)",textDecoration:"none",color:"white" }}>
            Contact
          </Link>
        </span>
      </div>
    </div>
    </div>
  )
}

export default ContactTop
