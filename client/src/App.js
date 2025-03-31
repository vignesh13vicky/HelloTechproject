import { Route, Routes } from 'react-router-dom';
// import { useEffect } from 'react';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop ';
import ServicesReadMore from './Components/Services/ServicesReadMore/ServicesReadMore'
import Error from './Components/Error/Error';
import { ToastContainer } from 'react-toastify';// import Home from "../../Admin/admin/src/Component/Home/Home"
import Otp from './Components/OTP/Otp';
// import AdminHome from '../../Admin/admin/src/Component/Home/AdminHome';


function App() {
  return (
    <>
     <ScrollToTop/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/readmore/:id" element={<ServicesReadMore />} />
      <Route path='/*'element={<Error/>} />
      
      {/* <Route path="/adminhome" element={() => { window.location.href = "http://localhost:3001"; return null; }} /> */}
      </Routes>
      <ToastContainer />
    </>
   
  );
}

export default App;
