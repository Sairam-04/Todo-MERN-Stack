import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation();
  const [title, setTitle] = useState('');
  useEffect(() => {
    if (location.pathname === '/') {
      setTitle('Home');
    } else if (location.pathname === '/my-tasks') {
      setTitle('My Tasks');
    } else if (location.pathname === '/starred') {
      setTitle('Starred');
    } else if (location.pathname === '/settings') {
      setTitle('Settings');
    } else {
      setTitle('Home');
    }
  }, [location.pathname]);

  return (
    <div className='header bg-[#2A2D33] flex justify-between items-center h-[9.5vh] px-5 py-2 border-b-[1px] border-[#6C717B] sticky top-0'>
      <div className='navleft text-2xl font-bold'>
        {title}
      </div>
      <div className='navright flex gap-3 items-center'>
        <div class="relative text-gray-600 focus-within:text-gray-400">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button>
          </span>
          <input type="search" name="q" class="py-2 text-sm text-white bg-[#2A2D33] rounded-2xl pl-10 focus:outline-none focus:bg-[#2A2D33] focus:text-white border border-[#6C717B]" placeholder="Search..." autocomplete="off" />
        </div>
        <div className='notifications'>
          <i className="bi bi-bell-fill text-xl"></i>
        </div>
        <div className="avatar placeholder cursor-pointer">
          <div className="bg-white text-black rounded-full w-8 h-8 flex justify-center items-center">
            <span className="text-xl font-bold">D</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
