import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from "../../assets/Logo.svg"
import { removeUser } from '../../utils/localStorage';

const SideBar = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const logout = () =>{
        removeUser();
        navigate("/login");
    }
    return (
        <div className='sidebar bg-[#0f1114] flex flex-col gap-6 h-full px-2 py-3 text-[#6C717B]'>
            <div className="logo flex gap-3 items-center">
                <img src={logo} className='h-10 w-100' alt='Logo'></img>
                <div className='text-xl text-white font-medium'> Task Buddy </div>
            </div>

            <ul className='sidebarlist py-4 flex flex-col gap-3'>
                <li className={`flex gap-3 ${location.pathname === "/home" ? "bg-[#7864F4] py-1 px-1 rounded-md text-white" : ""} `}>
                    <Link to="/home" className='flex gap-3'>
                        <div>
                            <i className="bi bi-house-fill"></i>
                        </div>
                        <div>
                            Home
                        </div>
                    </Link>
                </li>
                <li className={`flex gap-3 ${location.pathname.includes("/my-tasks") ? "bg-[#7864F4] py-1 px-1 rounded-md text-white" : ""} `}>
                    <Link to="/home/my-tasks" className='flex gap-3'>
                        <div>
                            <i className="bi bi-file-text"></i>
                        </div>
                        <div>
                            My Tasks
                        </div>
                    </Link>
                </li>
                <li className={`flex gap-3 ${location.pathname.includes("/starred") ? "bg-[#7864F4] py-1 px-1 rounded-md text-white" : ""} `}>
                    <Link to="/home/starred" className='flex gap-3'>
                        <div>
                            <i className="bi bi-star-fill"></i>
                        </div>
                        <div>
                            Starred
                        </div>
                    </Link>
                </li>
                <li className={`flex gap-3 ${location.pathname.includes("/settings") ? "bg-[#7864F4] py-1 px-1 rounded-md text-white" : ""} `}>
                    <Link to="/home/settings" className='flex gap-3'>

                        <div>
                            <i className="bi bi-gear-fill"></i>
                        </div>
                        <div>
                            Settings
                        </div>
                    </Link>
                </li>
                <li className='flex gap-3'>
                    <div
                        onClick={() => logout()}
                        className='flex gap-3 cursor-pointer'>
                        <div>
                            <i className="bi bi-box-arrow-right"></i>
                        </div>
                        <div>
                            Logout
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default SideBar
