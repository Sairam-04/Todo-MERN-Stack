import React from 'react'

const Header = () => {
  return (
    <div className='header bg-[#2A2D33] flex justify-between items-center h-[8vh] px-5 py-2 border-b-[1px] border-[#6C717B]'>
      <div className='navleft'>
        Home
      </div>
      <div className='navright flex gap-3'>
        <div className='searchbox'>
          <input type="text" />
        </div>
        <div className='notifications'>
          noti
        </div>
        <div className='userprofile'>
          profile
        </div>
      </div>
    </div>
  )
}

export default Header
