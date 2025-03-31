import React from 'react'
import SideBar from "../Components/SideBar/SideBar";
import Workspace from "../Components/Workspace/Workspace"

const Dashboard2 = () => {
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
