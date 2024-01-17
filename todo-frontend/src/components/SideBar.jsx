import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SideBar = () => {
    const location = useLocation();
    return (
        <div className='sidebar bg-[#1B1D21] flex flex-col gap-6 h-full px-2 py-3 text-[#6C717B]'>
            <div className="logo text-white">
                Task Buddy
            </div>

            <ul className='sidebarlist py-4 flex flex-col gap-3'>
                <li className={`flex gap-3 ${location.pathname === "/" ? "bg-[#7864F4] py-1 px-1 rounded-md text-white" : ""} `}>
                    <Link to="/" className='flex gap-3'>
                        <div>
                            <i className="bi bi-house-fill"></i>
                        </div>
                        <div>
                            Home
                        </div>
                    </Link>
                </li>
                <li className={`flex gap-3 ${location.pathname === "/my-tasks" ? "bg-[#7864F4] py-1 px-1 rounded-md text-white" : ""} `}>
                    <Link to="/my-tasks" className='flex gap-3'>
                        <div>
                            <i className="bi bi-file-text"></i>
                        </div>
                        <div>
                            My Tasks
                        </div>
                    </Link>
                </li>
                <li className={`flex gap-3 ${location.pathname === "/starred" ? "bg-[#7864F4] py-1 px-1 rounded-md text-white" : ""} `}>
                    <Link to="/starred" className='flex gap-3'>
                        <div>
                            <i className="bi bi-star-fill"></i>
                        </div>
                        <div>
                            Starred
                        </div>
                    </Link>
                </li>
                <li className={`flex gap-3 ${location.pathname === "/settings" ? "bg-[#7864F4] py-1 px-1 rounded-md text-white" : ""} `}>
                    <Link to="/settings" className='flex gap-3'>

                        <div>
                            <i className="bi bi-gear-fill"></i>
                        </div>
                        <div>
                            Settings
                        </div>
                    </Link>
                </li>
                <li className='flex gap-3'>
                    <Link to="/" className='flex gap-3'>
                        <div>
                            <i className="bi bi-box-arrow-right"></i>
                        </div>
                        <div>
                            Logout
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default SideBar
