import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import { Link, Outlet, useLocation } from "react-router-dom";

const UserLoginComponent = () => {
  const location = useLocation();
  return (
    <div className="containerlogin w-full h-screen flex justify-center items-center bg-[#1B1D21] text-white">
      <div className="content w-1/2 bg-[#2A2D33] mx-auto p-4 rounded-lg">
        <div className="btns flex justify-between">
          <Link
            to="/login"
            className={`w-1/2 text-center ${
              (location.pathname === "/" || location.pathname === "/login") ? 
              "bg-[#7864F4] py-1 px-1 rounded-md text-white" : ""
            }`}
          >
            Login
          </Link>
          <Link 
            className={`w-1/2 text-center ${
              (location.pathname === "/register") ? 
              "bg-[#7864F4] py-1 px-1 rounded-md text-white" : ""
            }`} 
            to="/register">
            SignUp
          </Link>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default UserLoginComponent;
