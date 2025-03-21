import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Client } from "../../Client";

const ServicesProduct = () => {
  const [details, setDetails] = useState([]);
console.log(details);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await Client.get("/servicestitle/servicestitlecardRead");
        if (response.status === 200) {
          setDetails(response.data.getadminServicesTitlecardImageGetting);
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
    getUserData();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Our Services</h2>
      {details.length === 0 ? (
        <p className="text-center">No services available.</p>
      ) : (
        <div className="row">
          {details.map((user, index) => (
            
            
            <div key={index} className="col-md-6 col-lg-4 mb-4 text-center">
              <div className="card border-0">
              <Link to={`/readmore/${user._id}`} style={{listStyle:"none",textDecoration:"none",color:"black"}}>
                <img
                  src={user.image.url}
                  alt="Service"
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />                </Link>

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{user.servicestitle}</h5>
                  {/* <p className="card-text text-muted">{user.servicesdescription}</p> */}
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServicesProduct;
