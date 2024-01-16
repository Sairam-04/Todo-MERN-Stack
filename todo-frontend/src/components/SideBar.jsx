import React from 'react'

const SideBar = () => {
    return (
        <div className='sidebar bg-[#1B1D21] flex flex-col gap-6 h-full px-2 py-3'>
            <div className="logo">
                Task Buddy
            </div>

            <ul className='sidebarlist py-4 flex flex-col gap-3'>
                <li className='flex gap-3 bg-[#7864F4] py-2 px-1 rounded-md cursor-pointer'>
                    <div>
                        <i className="bi bi-house-fill"></i>
                    </div>
                    <div>
                        Home
                    </div>
                </li>
                <li className='flex gap-3'>
                    <div>
                        <i className="bi bi-file-text"></i>
                    </div>
                    <div>
                        My Tasks
                    </div>
                </li>
                <li className='flex gap-3'>
                    <div>
                        <i className="bi bi-star-fill"></i>
                    </div>
                    <div>
                        Starred
                    </div>
                </li>
                <li className='flex gap-3'>
                    <div>
                        <i className="bi bi-gear-fill"></i>
                    </div>
                    <div>
                        Settings
                    </div>
                </li>
                <li className='flex gap-3'>
                    <div>
                        <i className="bi bi-box-arrow-right"></i>
                    </div>
                    <div>
                        Logout
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default SideBar
