import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Get URL params & navigation
import { Client } from "../../Client";
import Navbar from "../../Navbar/Navbar"
import ServicesTop from "../ServicesTop/ServicesTop";
import Carousel_About from "../../Pages/Carousel_About/Carousel_About";
import Footer from "../../Footer/Footer";
// import { FaIndianRupeeSign } from "react-icons/fa6";

const ServicesReadMore = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(details);
  

  console.log("id",id);
  

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await Client.get(`/servicestitle/servicestitlecardRead/${id}`);
        if (response.status === 200) {
          setDetails(response.data.getadminServicesTitlecardImageGettingOne);
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <>
    <ServicesTop/>
    <Navbar/>
    <Carousel_About/>
    <div className="container mt-4">
      
      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : details ? (
        <div className="container mt-2 mb-5 p-5  text-center">          
        <div className="mt-3">
            {details.image ? (
              <img
                src={details.image.url}
                alt=""
                className="rounded shadow"
                style={{ maxHeight: "450px", objectFit: "cover" }}
              />
            ) : (
              <p>No Image Available</p>
            )}
          </div>

          <div className="mt-3">
            <h4 className="fw-semibold">{details.servicestitle}</h4>
           
            <h5>{details.servicesdescription}</h5>
          </div>

          <div className="mt-3">
            <button
              className="btn btn-outline-primary fw-bold px-4 py-2"
              style={{ borderRadius: "25px" }}
              onClick={() => navigate(-1)}
            >
              Back to details
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center text-danger">details not found.</div>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default ServicesReadMore;



