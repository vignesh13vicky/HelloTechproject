import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
// import { IconName } from "react-icons/fa";
import { motion } from "framer-motion";
import "../FooterTopContact/FooterTopContact.css";

const FooterTopContact = () => {
  return (
    <>
      <motion.div
        className="about-us-content1"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <footer
          style={{ backgroundColor: "#14141f", width: "100%", height: "100%" }}
        >
          {/* <div className="container footerhead"> */}
          {/* <div className="row mt-5 mb-5 foot">
            <div className="col-md-3   col-sm designtop">
              <div className="design">Designers</div>
              <div className="designpara">
                We work to ensure people's Satisfying pots shapes and styles and
                Customer Satisfaction with our company specializing in providing
                unforgettable moments by Pots.
              </div>
            </div>
            <div className="col-md-3   col-sm">
              <div className="">
                <div className="links">links</div>
                <div className="">
                  <div className="">
                  <FaAngleRight 
                                       // className="m-2"
                                       style={{ color: "#ffa920" }}
                                     /> <Link to="/">Home</Link>
                  </div>
                  <div className="">
                  <FaAngleRight 
                                       // className="m-2"
                                       style={{ color: "#ffa920" }}
                                     /><Link to="/">About</Link>
                  </div>
                  <div className="">
                  <FaAngleRight 
                                       // className="m-2"
                                       style={{ color: "#ffa920" }}
                                     /><Link to="/">Services</Link>
                  </div>
                  <div className="">
                  <FaAngleRight 
                                       // className="m-2"
                                       style={{ color: "#ffa920" }}
                                     /><Link to="/">Contact</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3   col-sm">
              <div className="">
                <div className="">
                contact
                  </div>
                <div className="">
                <FaLocationDot />30 A, Sekkangkanni Road,Near Income Tax Office,(Opp) NBS Super market Kumbakonam - 612001.
                </div>
              </div>
              </div>
          </div>*/}
          {/* <div className="row row-cols-1 row-cols-md-3   row-cols-lg-3 row-cols-xl-3 g-3"> */}
          {/* <div className="row d-flex justify-content-between mb-">
            <div className="d-flex justify-content-evenly ">
 <div className="col-12 col-md-6 col-lg-4 ms-1 bs-border-color">
    <div className="design">
      <div className="stline1"></div>
      Designers
    </div>
    <div className="designpara">
      We work to ensure people's Satisfying pots shapes and styles and
      Customer Satisfaction with our company specializing in providing
      unforgettable moments by Pots.
    </div>
  </div>

//   {/* Links Section 
  <div className="col-12 col-md-6 col-lg-4 ms-5 border border-primary">
    <div className="links text-center" >
      <div className="stline1"></div>
      Links
    </div>
    <div>
      <div>
        <FaAngleRight className='Icons' style={{ color: "#ffa920" }} />
        <Link to="/">Home</Link>
      </div>
      <div>
        <FaAngleRight className='Icons' style={{ color: "#ffa920" }} />
        <Link to="/">About</Link>
      </div>
      <div>
        <FaAngleRight className='Icons' style={{ color: "#ffa920" }} />
        <Link to="/">Services</Link>
      </div>
      <div>
        <FaAngleRight className='Icons' style={{ color: "#ffa920" }} />
        <Link to="/">Contact</Link>
      </div>
    </div>
  </div>

  {/* Contact Section 
  <div className="col-12 col-lg-4 border border-primary">
    <div>
      <div className="stline1"></div>
      Contact
    </div>
    <div>
      <Link to="/">
        <FaLocationDot className='Icons' /> 30 A, Sekkangkanni Road, Near Income Tax
        Office, (Opp) NBS Super Market, Kumbakonam - 612001.
      </Link>                
    </div>
    <div>
      <Link to="tel:+918072503704">
        <FaPhoneAlt className='Icons' /> +91 80725-03704
      </Link>
    </div>
    <div>
      <Link to="https://wa.me/8072503704?text=Hello%20there!" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className='Icons' /> +91 80725-03704
      </Link>
    </div>
    <div>
      <Link to="mailto:vigneshvicky13052003@gmail.com" target="_blank" rel="noopener noreferrer">
        <FaEnvelope className='Icons' /> vigneshvicky13052003@gmail.com
      </Link>
    </div>
    <div>
      <Link to='https://www.linkedin.com/in/vignesh-m-26365a219/' target="_blank" rel="noopener noreferrer">
        <FaLinkedin className='Icons' /> Vignesh.M
      </Link>
    </div>
  </div>
</div>
            </div> */}

          {/* </div> */}

          {/* <div className="container fotcontainer r ">
    
    <div className="col">
        <div className="mt-5">
            <div className="design ">
        <div className="stline1"></div>
       <div className="designers">Designers</div> 
      </div>
      <div className="designpara">
       <p> We work to ensure people's Satisfying pots shapes and styles and Customer Satisfaction with our company specializing in providing unforgettable moments by Pots.</p>
      </div></div>
      
    </div>

    <div className="col">
        <div className=" mt-5">
        <div className="link  ">
        <div className="stline1"></div>
        <div className="Links">Links</div>
      </div>
      <div>
        <div><FaAngleRight className='Icons' style={{ color: "#ffa920" }} /> <Link to="/">Home</Link></div>
        <div><FaAngleRight className='Icons' style={{ color: "#ffa920" }} /> <Link to="/">About</Link></div>
        <div><FaAngleRight className='Icons' style={{ color: "#ffa920" }} /> <Link to="/">Services</Link></div>
        <div><FaAngleRight className='Icons' style={{ color: "#ffa920" }} /> <Link to="/">Contact</Link></div>
      </div>
        </div>
        
     
    </div>

    <div className="col">
      
      <div className='mt-5 mb-5 '>
      <div>
        <div className="stline1"></div>
        <div className="contact">Contact</div> 
      </div>
      <div><Link to="/"><FaLocationDot className='Icons' /> 30 A, Sekkangkanni Road, Kumbakonam - 612001.</Link></div>
      <div><Link to="tel:+918072503704"><FaPhoneAlt className='Icons' /> +91 80725-03704</Link></div>
      <div><Link to="https://wa.me/8072503704" target="_blank"><FaWhatsapp className='Icons' /> +91 80725-03704</Link></div>
      <div><Link to="mailto:vigneshvicky13052003@gmail.com" target="_blank"><FaEnvelope className='Icons' /> vigneshvicky13052003@gmail.com</Link></div>
      <div><Link to='https://www.linkedin.com/in/vignesh-m-26365a219/' target="_blank"><FaLinkedin className='Icons' /> Vignesh.M</Link></div>
    </div>

  </div>
  </div>


        </div> */}
          {/* 
<div className="container">
  <div className="d-flex flex-column flex-md-row justify-content-evenly align-items-start">
    <div className="">
    <div className="mt-5 flex-fill">
      <div className="design">
        <div className="stline1"></div>
        <div className="designers">Designers</div> 
      </div>
      <div className="designpara">
        <p>We work to ensure people's Satisfying pots shapes and styles and Customer Satisfaction with our company specializing in providing unforgettable moments by Pots.</p>
      </div>
    </div>

    <div className="mt-5 flex-fill">
      <div className="link">
        <div className="stline1"></div>
        <div className="Links">Links</div>
      </div>
      <div>
        <div><FaAngleRight className='Icons' style={{ color: "#ffa920" }} /> <Link to="/">Home</Link></div>
        <div><FaAngleRight className='Icons' style={{ color: "#ffa920" }} /> <Link to="/">About</Link></div>
        <div><FaAngleRight className='Icons' style={{ color: "#ffa920" }} /> <Link to="/">Services</Link></div>
        <div><FaAngleRight className='Icons' style={{ color: "#ffa920" }} /> <Link to="/">Contact</Link></div>
      </div>
    </div>

    <div className="mt-5 flex-fill">
      <div>
        <div className="stline1"></div>
        <div className="contact">Contact</div> 
      </div>
      <div><Link to="/"><FaLocationDot className='Icons' /> 30 A, Sekkangkanni Road, Kumbakonam - 612001.</Link></div>
      <div><Link to="tel:+918072503704"><FaPhoneAlt className='Icons' /> +91 80725-03704</Link></div>
      <div><Link to="https://wa.me/8072503704" target="_blank"><FaWhatsapp className='Icons' /> +91 80725-03704</Link></div>
      <div><Link to="mailto:vigneshvicky13052003@gmail.com" target="_blank"><FaEnvelope className='Icons' /> vigneshvicky13052003@gmail.com</Link></div>
      <div><Link to='https://www.linkedin.com/in/vignesh-m-26365a219/' target="_blank"><FaLinkedin className='Icons' /> Vignesh.M</Link></div>
    </div>
</div>
  </div>
</div>*/}

          <div className="container mt-5 " style={{ overflow: "hidden" }}>
            <div className="row whole ">
              {/* Column 1: Designers */}
              <div className="col-12 col-md-3  ">
                <div className="mt-5">
                  <div className="design mb-3">
                    <div className="stline1">
                      <div className="designers ms-3">Designers</div>
                    </div>
                  </div>
                  <div className="designpara">
                    <p>
                      We work to ensure people's Satisfying pots shapes and
                      styles and Customer Satisfaction with our company
                      specializing in providing unforgettable moments by Pots.
                    </p>
                  </div>
                </div>
              </div>

              {/* Column 2: Links */}
              <div className="col-12 col-md-3  ">
                <div className="mt-5">
                  <div className="link mb-3">
                    <div className="stline1">
                      <div className="Links ms-3">Links</div>
                    </div>
                  </div>
                  <div className="linkspart">
                    <div>
                      <FaAngleRight
                        className="Icons"
                        style={{ color: "#ffa920" }}
                      />
                      <Link to="/">Home</Link>
                    </div>
                    <div>
                      <FaAngleRight
                        className="Icons"
                        style={{ color: "#ffa920" }}
                      />
                      <Link to="/about">About</Link>
                    </div>
                    <div>
                      <FaAngleRight
                        className="Icons"
                        style={{ color: "#ffa920" }}
                      />
                      <Link to="/services">Services</Link>
                    </div>
                    <div>
                      <FaAngleRight
                        className="Icons"
                        style={{ color: "#ffa920" }}
                      />
                      <Link to="/contact">Contact</Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 3: Contact */}
              <div className="col-12 col-md-3  ">
                <div className="mt-5 mb-3">
                  <div className="mb-3">
                    <div className="stline1">
                      <div className="contact ms-3">Contact</div>
                    </div>
                  </div>
                  <div>
                    <Link to=" ">
                      <div className="contact_icon">
                        <span>
                          <FaLocationDot className="Icons_contact" />
                        </span>
                        <div className="contact_item">
                          <span className="">
                            100/4,Vayalcheri, Thiruppuvanam, Sivagangai -
                            630611.
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link to="tel:+918072503704">
                      <div className="contact_icon">
                      <span>  <FaPhoneAlt className="Icons_contact" /></span>
                        <div className="contact_text">
                          <span className="">+91 80725-03704 </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link to="https://wa.me/8072503704" target="_blank">
                      <div className="contact_icon">
                      <span> <FaWhatsapp className="Icons_contact" /></span>
                        <div className="contact_text">                           <span className="">
                        +91 80725-03704</span></div>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="mailto:vigneshvicky13052003@gmail.com"
                      target="_blank"
                    >
                      <div className="contact_icon">
                      <span>  <FaEnvelope className="Icons_contact" /></span>
                        <div className="contact_text">
                        <span>    vigneshvicky13052003@gmail.com</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="https://www.linkedin.com/in/vignesh-m-26365a219/"
                      target="_blank"
                    >
                      <div className="contact_icon">
                      <span> <FaLinkedin className="Icons_contact" /></span>
                        <div className="contact_text"><span>Vignesh.M</span></div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3  ms-auto">
                <div className="mt-5 mb-3">
                  <div className="mb-3">
                    <div className="stline1">
                      <div className="contact ms-3">Location</div>
                    </div>
                    <div className="mt-3">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.093048531432!2d78.2587573745059!3d9.758185677150031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00de43be819863%3A0xc581a5a2fb257697!2sVayalcheri%20Rd%2C%20Tamil%20Nadu%20630610!5e0!3m2!1sen!2sin!4v1741690235255!5m2!1sen!2sin"
                        width="150"
                        height="150"
                        style={{ marginLeft: "20px" }}
                        loading="lazy"
                      ></iframe>

                      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.093048531432!2d78.2587573745059!3d9.758185677150031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00de43be819863%3A0xc581a5a2fb257697!2sVayalcheri%20Rd%2C%20Tamil%20Nadu%20630610!5e0!3m2!1sen!2sin!4v1741690235255!5m2!1sen!2sin" width="600" height="450" style="border:0;"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center p-3">
            <hr className="custom-line" />
            <div className="">
              <span style={{ color: "white" }}>Designed By</span> &nbsp;
              <span className="vignesh">
                <a
                  href="https://www.linkedin.com/in/vignesh-m-26365a219/"
                  target="_blank"
                  rel="noreferrer"
                >
                  VIGNESH
                </a>
              </span>
            </div>
          </div>

          {/* <div> */}
          {/* <hr className="custom-line" /> */}
          {/* </div> */}
        </footer>
      </motion.div>
    </>
  );
};

export default FooterTopContact;
