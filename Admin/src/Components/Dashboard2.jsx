import { useState,useEffect } from "react";
import Cookies from "js-cookie";import SideBar from "../Components/SideBar/SideBar";
import Workspace from "../Components/Workspace/Workspace"

const Dashboard2 = () => {
  // const [token, setToken] = useState(null);


  // const authToken = Cookies.get("jwttoken"); // Get token from cookies
  // console.log(authToken);
  
  //   useEffect(() => {
     
  //           setToken(authToken);
  //         }, [])
  //         console.log(token);
  return (
  <>
  
  <div className="container ">
    <div className="row ">
      <div className="col-2">
        <SideBar />
      </div>
      <div className="col-10 ms-5">
        <Workspace />
      </div>
    </div>
    </div>
  </>
  )
}

export default Dashboard2
