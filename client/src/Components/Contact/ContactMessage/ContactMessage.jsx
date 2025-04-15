import { useState, useEffect } from "react";
import "../ContactMessage/ContactMessage.css";
import { Client } from "../../Client";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import ContactRead from "../ContactRead/ContactRead";

const ContactMessage = () => {
  const initialData = {
    name: "",
    mobile: "",
    email: "",
    date: "",
    message: "",
  };

  const [user, setUser] = useState(initialData);
  // const [details, setDetails] = useState();
const navigate = useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const submit = async (e) => {
    e.preventDefault(); // Prevent page reload
    console.log(user);

    try {
      const addNewUser = await Client.post("/user/userAdd", user,{withCredentials:true});
      console.log(addNewUser);

      if (addNewUser.status === 200) {
        toast.success("Submitted Successfully!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          theme: "colored",
        });
        // alert("Submitted Successfully");
        // getUserData();
        setUser(initialData);
      } else {

        toast.error("Not Submitted!!!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          theme: "colored"
        });
      }
    } catch (error) {
      if(error.status===401){
        toast.error("Plaease login")
        navigate("/login")
      }
      if(error.status===403){
        toast.error(error.response.data.message)
        // navigate("/login")
      }
      console.log(error);
    }
  };
  

  // const getUserData = async () => {
  //   try {
  //     const response = await Client.get("/userRead");
  //     console.log("Fetched Users:", response.data.users);

  //     if (response.status === 200) {
  //       setDetails(response.data.users);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching data");
  //   }
  // };

  useEffect(() => {
    // getUserData();
    const currentDateTime = new Date().toISOString().slice(0, 16);
    setUser((prev) => ({ ...prev, date: currentDateTime }));
  }, []);

  return (
    <div className="container mb-5">
      <div className="booking-section d-flex align-items-center justify-content-center">
        <div
          className="container d-flex flex-column flex-md-row align-items-center justify-content-between h-100 py-5"
          style={{ top: "50px", color: "white" }}
        >
          <div className="row g-3 align-items-center">
            {/* Left Side - Text Content */}
            <div className="col-md-6">
              <h6 className="text-uppercase fw-bold">Booking</h6>
              <h3 className="fw-bold">Online Booking</h3>
              <p className="lead">
                Booking a tour is an exciting way to explore new destinations
                and create memorable experiences. Simply enter your name, mobile
                number, desired location, travel dates, and any specific request
                you have in mind. The platform will present you with a list of
                available tours, complete with detailed information about the
                itinerary, accommodations, transportation, and pricing.{" "}
              </p>
            </div>

            {/* Right Side - Booking Form */}
            <div className="col-md-6">
              <div className="booking-form p-4 rounded">
                <h2 className="fw-bold mb-3 text-white">Book Now</h2>
                <form onSubmit={submit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Your Mobile"
                        name="mobile"
                        value={user.mobile}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-6">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your Email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-6">
                      <input
                        type="datetime-local"
                        className="form-control"
                        name="date"
                        value={user.date}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <textarea
                        className="form-control"
                        placeholder="Special Request"
                        rows="5"
                        name="message"
                        value={user.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary w-100">
                        Order Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pass `details` to `ContactRead` for displaying data */}
      {/* <ContactRead details={details} /> */}
      <ToastContainer />
    </div>
  );
};

export default ContactMessage;
