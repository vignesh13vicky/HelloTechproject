import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'
import Carousel_About from '../Pages/Carousel_About/Carousel_About'
import Footer from '../Footer/Footer'
import ContactTop from './ContactTop/ContactTop'
import ContactContent from './ContactContent/ContactContent'
import ContactQuery from './ContactQuery/ContactQuery'
import ContactMessage from './ContactMessage/ContactMessage'
import ContactRead from './ContactRead/ContactRead'

const Contact = () => {
  return (
    <>
   
         <ContactTop/>
      <Navbar/>
      <Carousel_About/>
      <ContactContent/>
      <ContactQuery/>
      <ContactMessage/> 
      {/* <ContactRead/> */}
      <Footer/>
    </>
  )
}

export default Contact
