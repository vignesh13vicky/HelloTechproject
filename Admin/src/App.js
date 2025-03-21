import "./App.css";
// import Workspace from "./Components/Workspace/Workspace";

// import SideBar from "./Components/SideBar/SideBar";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import Login from "./Components/Login/Login"
import { Route, Routes } from "react-router-dom";
import Dashboard2 from "./Components/Dashboard2";
import Error from '../src/Components/Error/Error'
// import AdminHome from "./Components/AdminHome/AdminHome";

function App() {
  return (
    <>
       <Routes>
    <Route path="/" element={<Login />}/>
    <Route path="/admin/*" element={<Dashboard2/>}/>
    <Route path="*" element={<Error/>} />
    {/* <Route path="/adminhome" element={<AdminHome/>}/> */}
    </Routes>
   

    

    </>
  );
}

export default App;
