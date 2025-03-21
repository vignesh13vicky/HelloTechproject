import React from "react";
import "../Carousel_About/Carousel_About.css";
import Pottery1 from "../../../assets/pot1.webp";


const Carousel_About = () => {
  return (
    <>
      <div className=" " style={{position:"relative"}}>
        <img
          src={Pottery1}
          className="car d-block w-100  "
          alt="Pottery Process 2"
          style={{ objectFit: "cover", filter: "contrast(40%) blur(2px)" 
        }}
        />
      </div>
    </>
  );
};

export default Carousel_About;
