import React from "react";
import Navbar from "../Navbar/Navbar";
import Carousel from "../Pages/Carousel/Carousel";
import Footer from "../Footer/Footer";
// import About from '../About/About'

// import "../Home/Home.css";
import HomeAbout from "./HomeAbout/HomeAbout";
import HomeTop from "./HomeTop/HomeTop";
import ServicesContent from "../Services/ServicesContent/ServicesContent";
import ServicesProduct from "../Services/ServicesProduct/ServicesProduct";

const Home = () => {

  

  return (
    <>
    
   <HomeTop/>
      <Navbar />
      <Carousel />
     <HomeAbout/>
     <ServicesContent/>
     <ServicesProduct/>
      <Footer />
    </>
  );
};

export default Home;
