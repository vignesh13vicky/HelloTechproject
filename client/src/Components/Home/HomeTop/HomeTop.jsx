// import React from 'react'
// import '../HomeTop/HomeTop.css'

// const HomeTop = () => {

//   return (
//     <div>
//        <div className="abt1" style={{position:"absolute",zIndex:"2",top:"40%",left:"50%",transform:"translate(-50%,-50%)",color:"white",marginBottom:"45px" }}>
//       <p1  style={{fontSize: "clamp(5px, 5vw, 40px)"}}>Home</p1>
//       </div>
//     <div className="abt2" style={{position:"absolute",zIndex:"5",top:"45%",left:"50%",transform:"translate(-50%,-50%)",color:"white",marginTop:"10px",marginBottom:"5px" }}>
//       <p2  style={{fontSize: "clamp(0px, 5vw, 20px)" }}> Get a Creative Designs of Pots</p2>
//       </div>
//       {/* <div className="abt2">
//   <p2>Get a Creative Designs of Pots</p2>
// </div> */}

//     <div className="abt3" style={{position:"absolute",zIndex:"2",top:"50%",left:"50%",transform:"translate(-50%,-50%)",color:"white",marginTop:"30px"}}>
     
//       <button style={{fontSize: "clamp(5px, 5vw, 20px)",borderRadius:"10px",padding:"7px" }} className="conct">Contact</button>
//       </div>
//     </div>
//   )
// }

// export default HomeTop


import React from 'react';
import '../HomeTop/HomeTop.css';
import { useNavigate } from 'react-router-dom';

const HomeTop = () => {
  const navigate = useNavigate();
  return (
    <div className="home-contai">
      {/* <span className="abt1" style={{position:"absolute",zIndex:"2",top:"40%",left:"50%",transform:"translate(-50%,-50%)",color:"white",marginBottom:"45px",fontSize: "clamp(5px, 5vw, 40px)" }}>
        Home
      </span> */}
<div className="">
  <div className="abt_home">Home</div>
{/* <span className="abt1"></span> */}


<div className="abt_designs" >
Get a Creative Designs of Pots
</div>

{/* style={{position:"absolute",zIndex:"2",top:"45%",left:"50%",transform:"translate(-50%,-50%)",color:"white",marginTop:"10px",marginBottom:"5px",fontSize: "clamp(0px, 5vw, 20px)"}} */}

<div className="abt_contact" >
  <button style={{fontSize: "clamp(5px, 5vw, 20px)",borderRadius:"10px",padding:"7px" }} className="conct" onClick={() => navigate("/contact")} >Contact</button>
</div>
</div>

{/* style={{position:"absolute",zIndex:"2",top:"49%",left:"50%",transform:"translate(-50%,-50%)",color:"white",marginTop:"30px"}} */}
    </div>
  );
}

export default HomeTop;
// 