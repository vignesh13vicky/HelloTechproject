import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import Login from "./Components/Login/Login"
import { Route, Routes } from "react-router-dom";
import Dashboard2 from "./Components/Dashboard2";
import Error from '../src/Components/Error/Error';
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
// import AdminHome from "./Components/AdminHome/AdminHome";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    //     const authToken = Cookies.get("jwttoken"); 
    // console.log(authToken);
    setToken(token);
  }, [])
  console.log(token);

  return (
    <>
      {/* {token !== null && ( */}
      <Routes>
        {token ? (
          <Route path="/admin/*" element={<Dashboard2 />} />
        ) : (
          <Route path="/" element={<Login setToken={setToken} />} />
        )}
        <Route path="*" element={<Error />} />
      </Routes>
      {/* )} */}

      {/* <Routes>
       {token ? (
        <Route path="/admin/*" element={<Dashboard2/>}/>
         ) : (   
        <Route path="/" element={<Login />}/>
         )} 
    <Route path="*" element={<Error/>} />
    {/* <h1>Hello FRom error</h1> 

    </Routes> */}
    </>
  );
}

export default App;