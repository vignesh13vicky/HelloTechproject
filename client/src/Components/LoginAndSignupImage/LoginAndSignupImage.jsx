import React from 'react'
import LoginImage from "../../assets/About_Pot.webp"

const LoginAndSignupImage = () => {
  return (
    <div>
       <div className="">
            <img src={LoginImage} alt='' style={{position:"relative",width:'100%',height:"100vh",objectFit: "cover", filter: "contrast(70%) blur(0px)"}}/>
        </div>
    </div>
  )
}

export default LoginAndSignupImage
