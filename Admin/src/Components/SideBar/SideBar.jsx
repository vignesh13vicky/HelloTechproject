import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaHome, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AiFillProduct } from "react-icons/ai";
import { SiGooglemessages } from "react-icons/si";
import { Client } from '../Client'

import "../SideBar/SideBar.css"

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const navigate = useNavigate();

const logout = async()=>{
  // e.preventDefault();
  // console.log(user);
  try {
    const addNewUser = await Client.post("/login/logout",{withCredentials:true});
    console.log(addNewUser);
    if(addNewUser.status === 200){
      // alert("submitted successfully")
navigate("/")


    }
  } catch (error) {
    console.log(error);
   
    
  }
  
}

  return (
  <>
  <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        <FaBars />
      </button>

<div className="d-flex justify-content-center"></div>

      <ul className="sidebar-list">
        {/* <li>
<h2>Admin Panel</h2></li> */}
<li>
          <Link to="/admin/adminhome" >
            <FaHome className="icon" />
            {isOpen && "Dashboard"}
          </Link>
        </li>
      
        <li>
          <Link to="/admin/admincontact">
            <SiGooglemessages 
            className="icon" />
            {isOpen && "Enquiry Contact"}
          </Link>
        </li>
        <li>
          <Link to="/admin/adminservices">
          <AiFillProduct className="icon" />
            {isOpen && "Services"}
          </Link>
        </li>
        <li>
          <Link to="/admin/adminservicesupdate">
          <AiFillProduct className="icon" />
            {isOpen && "ServicesUpdate"}
          </Link>
        </li>
      </ul>
    <div className="logout">
      <button className="btn btn-warning" onClick={logout}>
        <FaSignOutAlt className="icon"/> logout
      </button>
    </div>
    </div>

  </>
  )
}

export default SideBar
