import { useState, useEffect } from "react";
import { Client } from "../Client";
import "../AdminContact/AdminContact.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AdminContact = () => {
  const [details, setDetails] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(7);
  const navigate = useNavigate()
  

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const response = await Client.get("/user/userRead");
      // console.log("Fetched Data:", response.data.users);
      console.log(response);
      
      if (response.status === 200) {
        setDetails(response.data.getUser);
      }
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const del = async () => {
    if (!selectedId) {
      console.error("No user selected for deletion");
      return;
    }

    try {
      await Client.post(`/user/userDel/${selectedId}`);
      setDetails(details.filter((user) => user._id !== selectedId));
      toast.error("Deleted Successfully!",{
        position:'top-center',
        autoClose:3000,
        hideProgressBar:false,
        closeOnClick:true,
        pauseOnHover:false,
        draggable:true,
        theme:"colored",
                })
      verify()
                
    } catch (error) {
      console.log(error);
       if(error.status===401){
        // toast.warning("Plaease login!",{
        //   position:'top-center',
        //   autoClose:3000,
        //   hideProgressBar:false,
        //   closeOnClick:true,
        //   pauseOnHover:false,
        //   draggable:true,
        //   theme:"colored",
        //           })         
                       alert("Plaease login")
              navigate("/")
            }
    }
  };

  const verify = async () => {
  try {
    const verifyToken = await Client.get("/login/loginverify");
    console.log(verifyToken);

    const role = verifyToken.data.role;
    console.log(role);

    if (verifyToken.status === 200) {
      if (role) {
        navigate("/admin/adminhome");

        // window.open("http://localhost:3001", "_blank");
      }
    }
  } catch (error) {
    console.log(error);
    alert(error.response.message)
  }
};

  // Pagination Logic
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = details.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(details.length / postPerPage);

  return (
    <>
      <div className="container m-5">
      <ToastContainer />
      <h1 className="text-center">Contact Message</h1>
        {details.length === 0 ? (
          <p>No messages available.</p>
        ) : (
          <div className="table-responsive ms-4">
          <table className="contact_table table table-bordered table-striped">
            <thead>
            <tr className="table-primary text-center">
            <th>Name</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Date</th>
                <th>Message</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentPost.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.mobile}</td>
                  <td>{user.email}</td>
                  <td>{new Date(user.date).toLocaleDateString()}</td>
                  <td 
                    style={{
                      maxWidth: "300px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {user.message}
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm"
                      data-bs-toggle="modal"
                      data-bs-target="#deleteModal"
                      onClick={() => setSelectedId(user._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        )}

        {/* Pagination */}
        <div className="pagination-container d-flex justify-content-center align-items-center mt-3">
  <button 
    className="nav-button" 
    disabled={currentPage === 1} 
    onClick={() => setCurrentPage(1)}
  >
    First
  </button>

  <button 
    className="nav-button" 
    disabled={currentPage === 1} 
    onClick={() => setCurrentPage(currentPage - 1)}
  >
    Prev
  </button>

  {[...Array(totalPages)].map((_, index) => (
    <button
      key={index + 1}
      className={`page-button ${currentPage === index + 1 ? "active" : ""}`}
      onClick={() => setCurrentPage(index + 1)}
    >
      {index + 1}
    </button>
  ))}

  <button 
    className="nav-button" 
    disabled={currentPage === totalPages} 
    onClick={() => setCurrentPage(currentPage + 1)}
  >
    Next
  </button>

  <button 
    className="nav-button" 
    disabled={currentPage === totalPages} 
    onClick={() => setCurrentPage(totalPages)}
  >
    Last
  </button>
</div>


        {/* Delete Confirmation Modal */}
        <div
          className="modal fade"
          id="deleteModal"
          tabIndex="-1"
          aria-labelledby="deleteModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="deleteModalLabel">
                  Confirm Delete
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">Are you sure you want to delete this enquiry?</div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button type="button" className="btn btn-danger" onClick={del} data-bs-dismiss="modal">
                  Confirm Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminContact;
