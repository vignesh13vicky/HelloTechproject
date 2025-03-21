import React from "react";
import "../About/About.css";
import COL from "../../assets/col_img1.jpeg";
import AboutImg from "../../assets/Aboutcol1.webp";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Abcpy = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <motion.div
              className="about-us-content1"
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <img src={COL} alt=" " className="ab_img " />
            </motion.div>
          </div>
          <div class="col-lg-6 col-sm-12 para1">
            <motion.div
              className="about-us-content1"
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div class="about-us">
                <span>ABOUT US</span>
                <span>
                  <div class="line1"></div>
                  <div class="line2"></div>
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
                <span style={{ color: "#ffc569", fontWeight: "bold" }}>
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
          </div>
          <div className="col-lg-6">
            <div className="col-lg-6">
              <p>
                <FaArrowRight
                  // className="m-2"
                  style={{ color: "#ffc569" }}
                />
                Product1
              </p>
              <p>
                <FaArrowRight
                  // className="m-2"
                  style={{ color: "#ffc569" }}
                />
                Product2
              </p>
              <p>
                {" "}
                <FaArrowRight
                  // className="m-2"
                  style={{ color: "#ffc569" }}
                />
                Product3
              </p>
            </div>
            <div className="col-lg-6">
              <p>
                <FaArrowRight
                  // className="m-2"
                  style={{ color: "#ffc569" }}
                />
                Product4
              </p>
              <p>
                <FaArrowRight
                  // className="m-2"
                  style={{ color: "#ffc569" }}
                />
                Product5
              </p>
              <p>
                <FaArrowRight
                  // className="m-2"
                  style={{ color: "#ffc569" }}
                />
                Product6
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <motion.div
              className="about-us-content1"
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div class="about-us">
                <span>Who We Are</span>
                <span>
                  <div class="line1"></div>
                  <div class="line2"></div>
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
                <span style={{ color: "#ffc569", fontWeight: "bold" }}>
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
                    style={{ color: "#ffc569" }}
                  />
                  <span style={{ color: "#ffc569", fontWeight: "bold" }}>
                    Handcrafted Excellence
                  </span>{" "}
                  – Every product is meticulously shaped by skilled artisans,
                  ensuring unique and high-quality designs.
                </p>
                <p>
                  <FaArrowRight
                    // className="m-2"
                    style={{ color: "#ffc569" }}
                  />
                  <span style={{ color: "#ffc569", fontWeight: "bold" }}>
                    Authentic & Sustainable Materials
                  </span>
                  – We use eco-friendly, locally sourced clay and natural glazes
                  to promote sustainability.{" "}
                </p>
                <p>
                  {" "}
                  <FaArrowRight
                    // className="m-2"
                    style={{ color: "#ffc569" }}
                  />
                  <span style={{ color: "#ffc569", fontWeight: "bold" }}>
                    Custom Creations
                  </span>
                  – Offering personalized pottery for special occasions, home
                  décor, and gifting.
                </p>
              </motion.div>
            </div>
            <div className="col-lg-6">
              <motion.div
                className="about-us-content1"
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <p>
                  <FaArrowRight
                    // className="m-2"
                    style={{ color: "#ffc569" }}
                  />
                  <span style={{ color: "#ffc569", fontWeight: "bold" }}>
                    Timeless Designs
                  </span>
                  – A blend of traditional and contemporary aesthetics to
                  complement any space.
                </p>
                <p>
                  <FaArrowRight
                    // className="m-2"
                    style={{ color: "#ffc569" }}
                  />
                  <span style={{ color: "#ffc569", fontWeight: "bold" }}>
                    Workshops & Community Engagement
                  </span>
                  – We conduct pottery classes and events to spread the joy of
                  ceramic art.
                </p>
              </motion.div>
            </div>
          </div>
          <div className="col-lg-6">
            <motion.div
              className="about-us-content1"
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <img src={AboutImg} alt="" className="AboutImg" />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Abcpy;
