import React from 'react'
import Navbar from '../Navbar/Navbar'
// import { Link } from "react-router-dom";
import Carousel_About from '../Pages/Carousel_About/Carousel_About'
import Footer from '../Footer/Footer';
import ServicesProduct from './ServicesProduct/ServicesProduct';
import ServicesContent from './ServicesContent/ServicesContent';
import ServicesTop from './ServicesTop/ServicesTop';


const Services = () => {
  return (
    <>
      <Navbar/> 
      <Carousel_About/>
     <ServicesTop/>
      <div className="container">
        <ServicesContent/>
<ServicesProduct/>
      </div>
      <Footer/>
    
    </>
  
  )
}

export default Services
