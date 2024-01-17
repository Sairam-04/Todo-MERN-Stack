import React from "react";
import {Outlet } from "react-router-dom"
const MainContent = () => {
  return (
    <div className="maincontent bg-[#2A2D33] h-[calc(100vh-9.5vh)] px-5">
      <Outlet />
    </div>
    
  );
};

export default MainContent;
