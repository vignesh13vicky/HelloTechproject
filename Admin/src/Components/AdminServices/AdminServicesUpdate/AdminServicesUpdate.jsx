import { React, useEffect, useState } from "react";
import { Client } from "../../Client";

const AdminServicesUpdate = () => {
  const [details, setDetails] = useState([]);
  //  const [selectedId, setSelectedId] = useState(null);

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

  useEffect(() => {
    getUserData();
  }, []);

  const del = async (id) => {
    console.log("im from delete");
    try {
      const delRes = await Client.post(`/servicestitle/serviceDelete/${id}`);
      if (delRes.status === 200) {
        getUserData();
      }
      console.log(delRes);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container mt-5 ">
        <div className="">
          <h1>Services Details</h1>
        </div>

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
                <td>
                  <img
                    src={user.image.url}
                    style={{
                      height: "80px",
                      width: "80px",
                      objectFit: "cover",
                    }}
                    className="text-center img-thumbnail card-img-top rounded"
                    alt=""
                  />
                </td>
                <td>{user.servicestitle}</td>
                <td>{user.servicesdescription}</td>
                {/* <td>{user.image}</td> */}
                <td>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => {
                      del(user._id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminServicesUpdate;
