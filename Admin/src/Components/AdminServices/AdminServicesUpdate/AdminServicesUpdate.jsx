import {React,useEffect,useState} from 'react'
import { Client } from '../../Client';
// import { Link } from 'react-router-dom';


const AdminServicesUpdate = () => {
     const [details, setDetails] = useState([]);
    //  const [selectedId, setSelectedId] = useState(null);

       useEffect(() => {
        const getUserData = async () => {
            try {
              const response = await Client.get("/servicestitle/servicestitlecardRead");
           //    console.log("Full Response:", response.data);
          
              if (response.status === 200) {
               //  console.log("Setting Details:", response.data.getadminServicesTitlecardImageGetting);
                setDetails(response.data.getadminServicesTitlecardImageGetting);
              }
            } catch (error) {
              console.error("Error fetching data:", error.message);
            }
          };
          getUserData();
       }, [])
       
     
       
    //    const del = async () => {
    //     console.log("im from delete");
    //     if (!selectedId) {
    //       console.error("No user selected for deletion");
    //       return;
    //     }
      
    //     console.log("Deleting user with ID:", selectedId);
    //     try {
    //       const delRes = await Client.post(`/servicestitle/servicestitlecardDelete/${selectedId}`);
    //       console.log(delRes);
          
    //       setDetails(details.filter((user) => user._id !== selectedId));
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };
    //      useEffect(() => {
    //        getUserData();
    //      }, []);
       
  return (
   <>
   <div className="container mt-5 ">
      <div className="">
        <h1>Services Details</h1></div>

          <table className="contact_table table table-bordered table-striped">
          <thead>
            <tr className="table-primary">
              <th>Image</th>
              <th>Image Title</th>
              <th>Image Title Description</th>
              <th>Action</th>

            </tr>
          </thead>
          <tbody>
          {details.map((user, index) => (
              <tr key={index}>
               <td><img src={user.image.url} style={{height:"80px",width:"80px",objectFit:"cover"}} className="text-center img-thumbnail card-img-top rounded" alt="" /></td>
                <td>{user.servicestitle}</td>
                <td>{user.servicesdescription}</td>
                {/* <td>{user.image}</td> */}
                <td>
                      <button
                        type="button"
                        className="btn btn-danger btn-sm"
                        data-bs-toggle="modal"
                        data-bs-target="#deleteModal"
                        // onClick={() => setSelectedId(user._id)}
                      >
                        {/* <FaTrashAlt /> */}
                         Delete
                      </button>
                    </td>
              </tr>
            ))}          </tbody>
          </table>


   
    
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
            <div className="modal-body">
              Are you sure you want to delete this enquiry?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Cancel
              </button>
              <button type="button" className="btn btn-danger"
            //    onClick={del}
                data-bs-dismiss="modal">
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>


   </> 
    )
}

export default AdminServicesUpdate;
