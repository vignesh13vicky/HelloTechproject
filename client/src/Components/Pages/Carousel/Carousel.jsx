import React from "react";
import Pottery1 from "../../../assets/pot1.webp";
import Pottery2 from "../../../assets/pot2.webp";
import Pottery3 from "../../../assets/pot3.webp";
import '../Carousel/Carousel.css'


const Carousel = () => {
  return (
    <div
      id="potteryCarousel"
      className="carousel slide carousel-fade m-0"
      data-bs-ride="carousel"
      data-bs-interval="5000" // Adjust the time interval for slide change
    >
      {/* Carousel Indicators */}
      <div className="carousel-indicators ind">
        <button
          type="button"
          data-bs-target="#potteryCarousel"
          data-bs-slide-to="0"
          className="active indicator-btn"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#potteryCarousel"
          data-bs-slide-to="1"
          className="indicator-btn"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#potteryCarousel"
          data-bs-slide-to="2"
          className="indicator-btn"
          aria-label="Slide 3"
        ></button>
      </div>

      {/* Carousel Images */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={Pottery1}
            className="pot1 d-block w-100 img-fluid"
            alt="Pottery Process 1"
            style={{ objectFit: "cover", filter: "contrast(40%)"  }}
          />
        </div>
        <div className="carousel-item">
          <img
            src={Pottery2}
            className="pot1 d-block w-100 img-fluid"
            alt="Pottery Process 2"
            style={{ objectFit: "cover", filter: "contrast(40%)"  }}
          />
        </div>
        <div className="carousel-item">
          <img
            src={Pottery3}
            className="pot1 d-block w-100 img-fluid"
            alt="Pottery Process 3"
            style={{ objectFit: "cover", filter: "contrast(40%)"  }}
          />
        </div>
      </div>

      {/* Carousel Controls */}
      {/* <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#potteryCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#potteryCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button> */}
    </div>
  );
};

export default Carousel;
