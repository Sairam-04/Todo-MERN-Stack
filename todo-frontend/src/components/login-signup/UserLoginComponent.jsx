import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import { Link, Outlet, useLocation } from "react-router-dom";
import logo from "../../assets/taskLogo.png"

const UserLoginComponent = () => {
  const location = useLocation();
  return (
    <div className="flex flex-col gap-10 w-full h-screen bg-[#1B1D21] text-white py-2">
      <div className="logo px-3">
        <img src={logo} className='h-10 w-100' alt='Logo'></img>
      </div>
      <div className="containerlogin w-full flex justify-center items-center">
      <div className="content w-1/2 bg-[#2A2D33] mx-auto p-4 rounded-lg backdrop-filter">
          <div className="btns flex justify-between">
            <Link
              to="/login"
              className={`w-1/2 text-center ${(location.pathname === "/" || location.pathname === "/login") ?
                "bg-[#7864F4] py-1 px-1 rounded-md text-white" : ""
                }`}
            >
              Login
            </Link>
            <Link
              className={`w-1/2 text-center ${(location.pathname === "/register") ?
                "bg-[#7864F4] py-1 px-1 rounded-md text-white" : ""
                }`}
              to="/register">
              SignUp
            </Link>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserLoginComponent;
