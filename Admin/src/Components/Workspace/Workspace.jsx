import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Dashboard2 from '../Dashboard2'
import AdminHome from "../AdminHome/AdminHome"
import AdminContact from "../AdminContact/AdminContact";
import AdminServices from "../AdminServices/AdminServices"
import AdminServicesUpdate from '../AdminServices/AdminServicesUpdate/AdminServicesUpdate';

const Workspace = () => {
  return (
   <>
   <Routes>
       {/* <Route path='/dahboard' element={<Dashboard2/>} /> */}
       <Route  path='/adminhome' element={<AdminHome />}/>
       <Route  path='/admincontact' element={<AdminContact />}/>
       <Route  path='/adminservices' element={<AdminServices />}/>
       <Route  path='/adminservicesUpdate' element={<AdminServicesUpdate />}/>
   </Routes>
   </>
  )
}

export default Workspace
