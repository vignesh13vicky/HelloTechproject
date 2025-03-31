import { React, useState, useEffect } from "react";
import { Client } from "../../Client";
import { ToastContainer, toast } from "react-toastify";
import "../AdminServicesTitlecard/AdmServicesTitlecard.css";

const AdminServicesTitlecard = () => {
  const initialData = { servicestitle: "", servicesdescription: "" };

  const [image, setImage] = useState();
  const [user, setUser] = useState(initialData);
  // const [details, setDetails] = useState();

  const handleImage = (e) => {
    console.log(e.target.files);
    const actualFile = e.target.files[0];
    setImage(actualFile);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const submit = async (e) => {
    e.preventDefault();
    console.log("submit file");
    console.log(image);
    console.log(user);

    try {
      const formData = new FormData();

      formData.append("image", image);
      formData.append("servicestitle", user.servicestitle);
      formData.append("servicesdescription", user.servicesdescription);

      const fileUpload = await Client.post(
        "/servicestitle/servicestitlecard",
        formData
      );
      console.log(fileUpload);
      if (fileUpload.status === 200) {
        toast.success("Submitted Successfully!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          theme: "colored",
        });
        setUser(initialData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getUserData = async () => {
    try {
      const response = await Client.get("/servicestitle/servicestitlecardRead");
      console.log("Full Response:", response.data);

      if (response.status === 200 && response.data.users) {
        setUser(response.data.users);
      } else {
        console.log("No data received.");
      }
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    setImage();
    getUserData();
  }, []);
  return (
    <>
      <div className="containers m-4">
        <ToastContainer />
        <h1 className="text-center">Services Add</h1>
        <form className="ms-5 fileHandling">
          <div className="ms-2">
          <div className="mb-3 ">
            <label className="form-label">Image</label>
            <input
              className="form-control"
              type="file"
              name="image"
              onChange={handleImage}
              id="formFile"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Image Title</label>
            <input
              type="text"
              className="form-control"
              name="servicestitle"
              value={user.servicestitle}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label"> Image Title Description</label>
            <textarea
              rows="5"
              className="form-control"
              name="servicesdescription"
              value={user.servicesdescription}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary text-center"  onClick={submit}>
            Submit
          </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdminServicesTitlecard;
