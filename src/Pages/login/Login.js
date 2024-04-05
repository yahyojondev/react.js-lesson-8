import React, { useState ,memo } from 'react'
import { NavLink } from 'react-router-dom'
import { FaRegEye  } from "react-icons/fa";

function Login() {
  const [word,setWord]= useState("")
  return (
    <div className="login">
      <div className="container">
         <div className="login__wrapper">
            <h1 className="login__title">Login YN</h1>
            <div className="login__form">
                <input value="Nabijonovdev003" type="text" className="login__username" />
                <div className="passwor__wrapper">
                  
                  <input value="saber2303" type="text" className="login__password" />
                  <FaRegEye />
                </div>
                <NavLink to={"/admin"} className="login__btn">Login</NavLink>
            </div>
            <a className='Link__more' href="#">link more</a>
         </div>
      </div>
    </div>
  )
}

export default Login