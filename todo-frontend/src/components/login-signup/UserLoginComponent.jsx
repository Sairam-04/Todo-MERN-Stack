import React, { useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import { getUser } from "../../utils/localStorage";

const UserLoginComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (!(getUser() === null)) {
      navigate("/home");
    }
  }, []);
  return (
    <div className="flex flex-col gap-10 w-full h-screen bg-[#1B1D21] text-white py-2">
      <div className="logo flex gap-3 items-center px-3">
        <img src={logo} className="h-10 w-100" alt="Logo"></img>
        <div className="text-xl text-white font-medium"> Task Buddy </div>
      </div>
      <div className="containerlogin w-full h-[80vh] flex justify-center items-center">
        <div className="content w-1/2 bg-[#2A2D33] mx-auto p-4 rounded-lg backdrop-filter">
          <div className="btns flex justify-between">
            <Link
              to="/login"
              className={`w-1/2 text-center ${
                location.pathname === "/" || location.pathname === "/login"
                  ? "bg-[#7864F4] py-1 px-1 rounded-md text-white"
                  : ""
              }`}
            >
              Login
            </Link>
            <Link
              className={`w-1/2 text-center ${
                location.pathname === "/register"
                  ? "bg-[#7864F4] py-1 px-1 rounded-md text-white"
                  : ""
              }`}
              to="/register"
            >
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
