import React from "react";
// import "../About/About.css";
import COL from "../../assets/col_img1.jpeg";
import AboutImg from "../../assets/Aboutcol1.webp";
import { FaArrowRight } from "react-icons/fa";
// import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer"
import Carousel_About from "../Pages/Carousel_About/Carousel_About";
import { Link } from "react-router-dom";
// import { useInView } from "react-intersection-observer";

const About = () => {
  // const { ref, inView } = useInView({
  //     triggerOnce: false, // Animation triggers every time it enters the view
  //     threshold: 0.3, // Starts animation when 30% of the element is visible
  //   });

  return (
    <>
      <Navbar />
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
        <p style={{ fontSize: "clamp(30px, 5vw, 50px)" }}>About Us</p>
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
          <Link to="/" style={{ fontSize: "clamp(10px, 5vw, 25px)",textDecoration:"none",color:"#ffa920"}}>Home</Link>
        </span>/
        <span style={{margin:"15px"}}>
          <Link  style={{ fontSize: "clamp(10px, 5vw, 25px)",textDecoration:"none",color:"white" }}>
            About
          </Link>
        </span>
      </div>
      {/* <div className="abt" style={{position:"absolute",zIndex:"2",top:"40%",left:"50%",transform:"translate(-50%,-50%)",color:"white",fontSize: "32px",marginBottom:"45px" }}>
      </div> */}

      <Carousel_About />
      {/* <div className="container p-5 "> 
      //  </motion.div> 
        <div className="row ">
          <div className="col-lg-6 col-sm-12 common ">
          <motion.div
              className="about-us-content1"
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <img src={COL} alt=" " className="ab_img " />
            </motion.div>
          </div>

          <div className="col-lg-6 col-sm-12 common p-5 para">
          <motion.div
              className="about-us-content1"
              initial={{ y: -200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            
            >
              <div className="about-us">
                <span>ABOUT US</span>
                <span>
                  <div className="line1"></div>
                  <div className="line2"></div>
                </span>
              </div>
              </motion.div>
              <motion.div
              className="about-us-content1"
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <h2>
                Welcome to{" "}
                <span style={{ color: "#ffa920", fontWeight: "bold" }}>
                  Designers
                </span>
              </h2>
              </motion.div>
              <motion.div
              className="about-us-content1"
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <p>
                we take pride in offering unique, high-quality pottery that adds
                warmth and charm to every home. Each piece in our collection is
                carefully shaped by skilled artisans, ensuring that no two
                creations are exactly alike. From beautifully glazed mugs and
                bowls to exquisite vases and decorative pieces, our pottery
                reflects the dedication and artistry poured into every design.
              </p>              </motion.div>
              
              <motion.div
              className="about-us-content1"
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <p>
                {" "}
                We believe in sustainability and authenticity, using
                eco-friendly materials and traditional techniques to craft items
                that are both durable and aesthetically pleasing. Thank you for
                supporting handmade art and being part of our story. Visit us
                and experience the beauty of handcrafted pottery where every
                piece tells a story of passion and creativity.
              </p>              </motion.div>

              <div className="row d-flex"> 
                <div className="col-lg-6 col-sm-12 d-flex justify-content-center ">
                  <div className="">
           
                    <p>
                      {" "}
                      <FaArrowRight
                        className="m-2"
                        style={{ color: "#ffa920" }}
                      />
                      Product1
                    </p>
                    <p>
                      <FaArrowRight
                        className="m-2"
                        style={{ color: "#ffa920" }}
                      />
                      Product2
                    </p>
                    <p>
                      {" "}
                      <FaArrowRight
                        className="m-2"
                        style={{ color: "#ffa920" }}
                      />
                      Product3
                    </p>
                  </div>
                 </div> 
                <div className="col-lg-6 col-sm-12">
                  <div className="">
                    <p>
                      <FaArrowRight
                        className="m-2"
                        style={{ color: "#ffa920" }}
                      />
                      Product4
                    </p>
                    <p>
                      <FaArrowRight
                        className="m-2"
                        style={{ color: "#ffa920" }}
                      />
                      Product5
                    </p>
                    <p>
                      <FaArrowRight
                        className="m-2"
                        style={{ color: "#ffa920" }}
                      />
                      Product6
                    </p>
                  </div>
                </div>
                    </motion.div>
              </div>
             </motion.div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-sm-12 common  para">
          <motion.div
              className="about-us-content1"
              initial={{ y: -200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
>
              <div className="about-us">
                <span>Who We Are</span>
                <span>
                  <div className="line1"></div>
                  <div className="line2"></div>
                </span>
              </div>
              <h2>
                Why &nbsp;
                <span style={{ color: "#ffa920", fontWeight: "bold" }}>
                  Designers
                </span>
              </h2>

              <div className="row d-flex">
                <div className="col-lg-6 col-sm-12 p-5 para">
                  <div className="">
                    <p>
                      {" "}
                      <FaArrowRight
                        className="m-2"
                        style={{ color: "#ffa920" }}
                      />
                      <span style={{ color: "#ffa920", fontWeight: "bold" }}>
                        Handcrafted Excellence
                      </span>{" "}
                      – Every product is meticulously shaped by skilled
                      artisans, ensuring unique and high-quality designs.
                    </p>
                    <p>
                      <FaArrowRight
                        className="m-2"
                        style={{ color: "#ffa920" }}
                      />
                      <span style={{ color: "#ffa920", fontWeight: "bold" }}>
                        Authentic & Sustainable Materials
                      </span>
                      – We use eco-friendly, locally sourced clay and natural
                      glazes to promote sustainability.{" "}
                    </p>
                    <p>
                      {" "}
                      <FaArrowRight
                        className="m-2"
                        style={{ color: "#ffa920" }}
                      />
                      <span style={{ color: "#ffa920", fontWeight: "bold" }}>
                        Custom Creations
                      </span>
                      – Offering personalized pottery for special occasions,
                      home décor, and gifting.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <div className="">
                    <p>
                      <FaArrowRight
                        className="m-2"
                        style={{ color: "#ffa920" }}
                      />
                      <span style={{ color: "#ffa920", fontWeight: "bold" }}>
                        Timeless Designs
                      </span>
                      – A blend of traditional and contemporary aesthetics to
                      complement any space.
                    </p>
                    <p>
                      <FaArrowRight
                        className="m-2"
                        style={{ color: "#ffa920" }}
                      />
                      <span style={{ color: "#ffa920", fontWeight: "bold" }}>
                        Workshops & Community Engagement
                      </span>
                      – We conduct pottery classes and events to spread the joy
                      of ceramic art.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="col-lg-6 col-sm-12 common">
            <img src={AboutImg} alt="" className="AboutImg" />
          </div>
        </div>
      </div> */}

      {/* <div className="container-fluid">
        <div className="row ">
          <div className="col-12 col-lg-6 col-md-6">
            <motion.div
              className="about-us-content1"
              style={{   display: 'flex',
                alignitems: 'center',
                fontweight: 'bold',
                color: '#ffa920',
                fontsize: '16px'}}
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <img src={COL} alt=" " className="ab_img mt-3" />
            </motion.div>
          </div>
          <div className="col-12 col-lg-6 col-md-6 abtct  ">
            <motion.div
              className="about-us-content1"
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div className="about-us">
                <span>ABOUT US</span>
                <span>
                  <div className="line1" style={{width:"80px",height:"3px",marginLeft:"10px",backgroundColor:"#ffa920"}}></div>
                  <div className="line2" style={{width:"45px",height:"2px",marginLeft:"10px",marginTop:"5px",backgroundColor:"#ffa920"}}></div>
                </span>
              </div>
            </motion.div>
            <motion.div
              className="about-us-content1"
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <h2>
                Welcome to{" "}
                <span style={{ color: "#ffa920", fontWeight: "bold" }}>
                  Designers
                </span>
              </h2>
              <p>
                we take pride in offering unique, high-quality pottery that adds
                warmth and charm to every home. Each piece in our collection is
                carefully shaped by skilled artisans, ensuring that no two
                creations are exactly alike. From beautifully glazed mugs and
                bowls to exquisite vases and decorative pieces, our pottery
                reflects the dedication and artistry poured into every design.
              </p>
            </motion.div>
            <motion.div
              className="about-us-content1"
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <p>
                We believe in sustainability and authenticity, using
                eco-friendly materials and traditional techniques to craft items
                that are both durable and aesthetically pleasing. Thank you for
                supporting handmade art and being part of our story. Visit us
                and experience the beauty of handcrafted pottery where every
                piece tells a story of passion and creativity.
              </p>
            </motion.div>
            <motion.div
              className="about-us-content1"
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            > 
            <div className="col-6 col-lg-6 col-md-6   d-flex">
            <div className="col-6 col-lg-6 col-md-6  product13">
          <p>
                <FaArrowRight
                  // className="m-2"
                  style={{ color: "#ffa920" }}
                />
                Product1
              </p>
              <p>
                <FaArrowRight
                  // className="m-2"
                  style={{ color: "#ffa920" }}
                />
                Product2
              </p>
              <p>
                <FaArrowRight
                  // className="m-2"
                  style={{ color: "#ffa920" }}
                />
                Product3
              </p>
            </div>
            <div className=" product46">
           
              <p>
                <FaArrowRight
                  // className="m-2"
                  style={{ color: "#ffa920" }}
                />
                Product4
              </p>
              <p>
                <FaArrowRight
                  // className="m-2"
                  style={{ color: "#ffa920" }}
                />
                Product5
              </p>
              <p>
                <FaArrowRight
                  // className="m-2"
                  style={{ color: "#ffa920" }}
                />
                Product6
              </p>
            </div>
          </div>
              </motion.div>
          </div>
          
        </div>
        <div className="row ">
          <div className="col-12 col-lg-6 col-md-6 abtct1">
            <motion.div
              className="about-us-content1"
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div className="about-us">
                <span>Who We Are</span>
                <span>
                  <div className="line1"></div>
                  <div className="line2"></div>
                </span>
              </div>
            </motion.div>

            <motion.div
              className="about-us-content1"
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <h2>
                Why &nbsp;
                <span style={{ color: "#ffa920", fontWeight: "bold" }}>
                  Designers
                </span>
              </h2>
            </motion.div>
             <div className="col-lg-6"> 
              <motion.div
                className="about-us-content1"
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <p>
                  {" "}
                  <FaArrowRight
                    // className="m-2"
                    style={{ color: "#ffa920" }}
                  />
                  <span style={{ color: "#ffa920", fontWeight: "bold" }}>
                    Handcrafted Excellence
                  </span>{" "}
                  – Every product is meticulously shaped by skilled artisans,
                  ensuring unique and high-quality designs.
                </p>
                <p>
                  <FaArrowRight
                    // className="m-2"
                    style={{ color: "#ffa920" }}
                  />
                  <span style={{ color: "#ffa920", fontWeight: "bold" }}>
                    Authentic & Sustainable Materials
                  </span>
                  – We use eco-friendly, locally sourced clay and natural glazes
                  to promote sustainability.{" "}
                </p>
                <p>
                  {" "}
                  <FaArrowRight
                    // className="m-2"
                    style={{ color: "#ffa920" }}
                  />
                  <span style={{ color: "#ffa920", fontWeight: "bold" }}>
                    Custom Creations
                  </span>
                  – Offering personalized pottery for special occasions, home
                  décor, and gifting.
                </p>
              </motion.div>
            {/* </div> */}
      {/* <div className="col-lg-6"> 
              <motion.div
                className="about-us-content1"
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <p>
                  <FaArrowRight
                    // className="m-2"
                    style={{ color: "#ffa920" }}
                  />
                  <span style={{ color: "#ffa920", fontWeight: "bold" }}>
                    Timeless Designs
                  </span>
                  – A blend of traditional and contemporary aesthetics to
                  complement any space.
                </p>
                <p>
                  <FaArrowRight
                    // className="m-2"
                    style={{ color: "#ffa920" }}
                  />
                  <span style={{ color: "#ffa920", fontWeight: "bold" }}>
                    Workshops & Community Engagement
                  </span>
                  – We conduct pottery classes and events to spread the joy of
                  ceramic art.
                </p>
              </motion.div>
            {/* </div> 
          </div>
          <div className="col-12 col-lg-6 col-md-6 ">
            <motion.div
              className="about-us-content1"
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <img src={AboutImg} alt="" className="About_Img mb-3" />
            </motion.div>
          </div>
        </div>
      </div> */}
      <div className="container text-start mt-5">
       
        <div className="row mb-5 d-flex align-items-center">
        <div className="col-12 col-lg-6">
        {/* <motion.div
              className="about-us-content1"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >  */}
            <img src={COL} alt="" className="home_img11" />         
             {/* </motion.div> */}

          </div>

          {/* <motion.div
              className="about-us-content1"
              initial={{ y: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            > */}
          <div
            className="col-12 col-lg-6 home_about11"
            style={{ fontSize: "1.1rem", lineHeight: "1.7rem" }}
          >
            <div className="d-flex">
              <span
                className=""
                style={{ color: "#ffa920", fontWeight: "bold" }}
              >
                ABOUT US
              </span>
              <span>
                <div className="line1" style={{ color: "#ffa920" }}></div>
                <div className="line2" style={{ color: "#ffa920" }}></div>
              </span>
            </div>

            <h2>
              Welcome to{" "}
              <span style={{ color: "#ffa920", fontWeight: "bold" }}>
                Designers
              </span>
            </h2>
            <p>
              we take pride in offering unique, high-quality pottery that adds
              warmth and charm to every home. Each piece in our collection is
              carefully shaped by skilled artisans, ensuring that no two
              creations are exactly alike. From beautifully glazed mugs and
              bowls to exquisite vases and decorative pieces, our pottery
              reflects the dedication and artistry poured into every design.
            </p>
            <p>
              We believe in sustainability and authenticity, using eco-friendly
              materials and traditional techniques to craft items that are both
              durable and aesthetically pleasing. Thank you for supporting
              handmade art and being part of our story. Visit us and experience
              the beauty of handcrafted pottery where every piece tells a story
              of passion and creativity.
            </p>
            {/* </div> */}
            <div className="d-flex">
              <div className="col-6  ">
                <p>
                  <FaArrowRight
                    // className="m-2"
                    style={{ color: "#ffa920" }}
                  />
                  Product1
                </p>
                <p>
                  <FaArrowRight
                    // className="m-2"
                    style={{ color: "#ffa920" }}
                  />
                  Product2
                </p>
                <p>
                  <FaArrowRight
                    // className="m-2"
                    style={{ color: "#ffa920" }}
                  />
                  Product3
                </p>
              </div>
              <div className="col-6">
                <p>
                  <FaArrowRight
                    // className="m-2"
                    style={{ color: "#ffa920" }}
                  />
                  Product4
                </p>
                <p>
                  <FaArrowRight
                    // className="m-2"
                    style={{ color: "#ffa920" }}
                  />
                  Product5
                </p>
                <p>
                  <FaArrowRight
                    // className="m-2"
                    style={{ color: "#ffa920" }}
                  />
                  Product6
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* </motion.div> */}

        <div className="row mb-5 d-flex align-items-center">
          <div
            className="col-12 col-lg-6 home_about1"
            style={{ fontSize: "1.1rem", lineHeight: "1.7rem" }}
          >
            {/* <motion.div
              className="about-us-content1"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            > */}
            <div className="d-flex">
              <span
                className=""
                style={{ color: "#ffa920", fontWeight: "bold" }}
              >
                Who We Are
              </span>
              <span>
                <div className="line1" style={{ color: "#ffa920" }}></div>
                <div className="line2" style={{ color: "#ffa920" }}></div>
              </span>
            </div>

            <h2>
              Why &nbsp;
              <span style={{ color: "#ffa920", fontWeight: "bold" }}>
                Designers
              </span>
            </h2>
            {/* </motion.div> */}
            {/* <motion.div
                className="about-us-content1"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              > */}
            <p>
              <FaArrowRight
                // className="m-2"
                style={{ color: "#ffa920" }}
              />
              <span style={{ color: "#ffa920", fontWeight: "bold" }}>
                Handcrafted Excellence
              </span>{" "}
              – Every product is meticulously shaped by skilled artisans,
              ensuring unique and high-quality designs.
            </p>
            <p>
              <FaArrowRight
                // className="m-2"
                style={{ color: "#ffa920" }}
              />
              <span style={{ color: "#ffa920", fontWeight: "bold" }}>
                Authentic & Sustainable Materials
              </span>
              – We use eco-friendly, locally sourced clay and natural glazes to
              promote sustainability.{" "}
            </p>
            <p>
              <FaArrowRight
                // className="m-2"
                style={{ color: "#ffa920" }}
              />
              <span style={{ color: "#ffa920", fontWeight: "bold" }}>
                Custom Creations
              </span>
              – Offering personalized pottery for special occasions, home décor,
              and gifting.
            </p>
            <p>
              <FaArrowRight
                // className="m-2"
                style={{ color: "#ffa920" }}
              />
              <span style={{ color: "#ffa920", fontWeight: "bold" }}>
                Timeless Designs
              </span>
              – A blend of traditional and contemporary aesthetics to complement
              any space.
            </p>
            <p>
              <FaArrowRight
                // className="m-2"
                style={{ color: "#ffa920" }}
              />
              <span style={{ color: "#ffa920", fontWeight: "bold" }}>
                Workshops & Community Engagement
              </span>
              – We conduct pottery classes and events to spread the joy of
              ceramic art.
            </p>

            {/* </motion.div> */}
          </div>
          <div className="col-12 col-lg-6">
            {/* <motion.div
              className="about-us-content1"
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            > */}
            <img src={AboutImg} alt="" className="home_img1  mb-3" />
            {/* </motion.div> */}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default About;
