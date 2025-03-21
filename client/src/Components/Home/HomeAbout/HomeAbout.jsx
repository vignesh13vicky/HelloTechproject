import React from 'react'
import COL1 from "../../../assets/col_img1.jpeg";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import '../HomeAbout/HomeAbout.css'
import {Link} from "react-router-dom"

const HomeAbout = () => {
  return (
   <>
   <div className="container">
   {/* <div className="row home_row">
        <div className="col-md-12  col-sm-12 col-lg-6 home_col1">
         <motion.div
            className="about-us-content1"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
             <img src={COL1} alt="" className="home_img" />
             </motion.div>
        </div>
        <div className="col-md-12  col-sm-12 col-lg-6 home_col2">
          {/* <motion.div
            className="about-us-content1"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          > 
            <div className="about-us1">
              <span style={{color:'#ffa920' , fontWeight: "bold"}}>ABOUT US</span>
              <span>
                <div className="line1" style={{color:'#ffa920'}}></div>
                <div className="line2" style={{color:'#ffa920'}}></div>
              </span>
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
                We believe in sustainability and authenticity, using
                eco-friendly materials and traditional techniques to craft items
                that are both durable and aesthetically pleasing. Thank you for
                supporting handmade art and being part of our story. Visit us
                and experience the beauty of handcrafted pottery where every
                piece tells a story of passion and creativity.
              </p>
            </div>

            <div className="col-md-12  col-sm-12 col-lg-6  d-flex">
              <div className="product13">
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
          {/* </motion.div> 
        </div>
      </div> */}

<div className="container text-start mt-5">
  <div className="row d-flex align-items-center">

    <div className="col-12 col-lg-6">
    <motion.div
              className="about-us-content1"
              initial={{ scale:0, opacity: 0 }}
              whileInView={{scale:1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            
            >
             <img src={COL1} alt="" className="home_img" />
             </motion.div>

    </div>
    <div className="col-12 col-lg-6 " style={{fontSize:"1.1rem", lineHeight:"1.7rem"}}>
    {/* <motion.div
              className="about-us-content1"
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            
            > */}
  <div className="d-flex">
  <span className='' style={{color:'#ffa920' , fontWeight: "bold"}}>ABOUT US</span>
              <span>
                <div className="line1" ></div>
                <div className="line2" ></div>
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
                We believe in sustainability and authenticity, using
                eco-friendly materials and traditional techniques to craft items
                that are both durable and aesthetically pleasing. Thank you for
                supporting handmade art and being part of our story. Visit us
                and experience the beauty of handcrafted pottery where every
                piece tells a story of passion and creativity.
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
           
            <Link to='/about' className="link-style">Read More...</Link>

           
            
    {/* </motion.div> */}
    </div>
    </div>
   
  </div>
</div>
   </>
  )
}

export default HomeAbout
