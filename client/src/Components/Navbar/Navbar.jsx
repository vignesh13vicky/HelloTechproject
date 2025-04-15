import React, { useEffect, useState } from "react";
import "../Navbar/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/0.png";
import "../Navbar/Navbar.css";
import Cookies from "js-cookie";
import { Client } from "../Client";

export const Navbar = () => {
  // const [sticky, setSticky] = useState(false);
  // const [menuOpen, setMenuOpen] = useState(false);
  // const toggleMenu = () => {
  //   setMenuOpen((prev) => !prev);
  // };
  // const closeMenu = () => {
  //   setMenuOpen(false);
  // };
  // useEffect(() => {
  //    const handleScroll = () => {
  //      if (window.scrollY > 50) {
  //        setSticky(true);
  //      } else {
  //        setSticky(false);
  //      }
  //    };
  //   window.addEventListener("scroll", () => {
  //     window.scrollY > 50 ? setSticky(true) : setSticky(false);
  //   });
  //   window.addEventListener("scroll", () => {
  //     window.scrollY > 60 ? setSticky(true) : setSticky(false);
  //   });
  // }, []);

  document.addEventListener("DOMContentLoaded", function () {
    let currentPage = window.location.pathname.split("/").pop(); // Get current page filename
    let navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach((link) => {
      if (link.getAttribute("to") === currentPage) {
        link.classList.add("active");
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("nav ul");

    hamburger.addEventListener("click", function () {
      navMenu.classList.toggle("show");
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const currentLocation = window.location.pathname;
    const navItems = document.querySelectorAll("nav ul li");

    navItems.forEach((item) => {
      const link = item.querySelector("a");
      if (link.href.includes(currentLocation)) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  });

  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [token, setToken] = useState();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 10); // Sticky when scrollY > 60
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log("hiiiiiiiiiiiiiiii");

    const tokens = Cookies.get("jwttoken");
    // const tokens = document.cookie;
    console.log(tokens);
    setToken(tokens);
  }, []);

  console.log(token);

  const navigate = useNavigate();

  const logout = async () => {
    // e.preventDefault();
    // console.log(user);
    try {
      const addNewUser = await Client.post("/signup/logout");
      console.log(addNewUser);
      if (addNewUser.status === 200) {
        // alert("submitted successfully")
        Cookies.remove("jwttoken");
        setToken(null);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(token);

  return (
    <>
      <header className="d-flex justify-content-space-around ">
        {/* <div className="">

      </div> */}
        {/* <nav className={`nav-container ${sticky ? "dark-nav" : ""}`}> */}
        <nav className={sticky ? "sticky-nav" : ""}>
          <div className="nav-logo">
            <img src={logo} alt="logo" className="logo"></img>
          </div>

          <div
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <div className="ham" onClick={closeMenu}>
            <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
              <li>
                <Link to="/" className="active" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={closeMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={closeMenu}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={closeMenu}>
                  Contact
                </Link>
              </li>
              {/* <li> */}

              {/* </li> */}
              <div className=" bngp m-2">
                {/* {token ===undefined ? ( */}
                {token ? (
                  <button onClick={logout} className="btn-border-login">
                    Logout
                  </button>
                ) : (
                  <div className="">
                    <button
                      onClick={() => {
                        navigate("/login");
                      }}
                      className="btn-border-login"
                    >
                      Login
                    </button>
                    <button
                      onClick={() => {
                        navigate("/signup");
                      }}
                      className="btn-border-signup "
                    >
                      Signup
                    </button>
                  </div>
                )}

                {/* <button onClick={()=>{navigate("/login")}} className="btn-border-login">
                  Login
                </button> */}
                {/* <button onClick={()=>{navigate("/signup")}} className="btn-border-signup ">
                  Signup
                </button> */}
              </div>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
