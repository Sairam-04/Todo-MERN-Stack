import React from 'react'
import Task from './Task'

const StarredComponent = () => {
  return (
    <div className='py-2 w-full h-[calc(100vh-9.5vh)] overflow-y-auto'>
      <div className='indicators w-full flex gap-3 justify-end px-2 sticky top-0 z-1'>
        <div className='flex gap-3 justify-end bg-gray-600 w-fit px-2 rounded-md shadow-sm shadow-gray-600'>
          <div className="title flex gap-3 items-center justify-center">
            <span className="h-2 w-2 rounded-full bg-[#3C79D6]"></span>
            <span>In Progress</span>
          </div>
          <div className="title flex gap-3 items-center justify-center">
            <span className="h-2 w-2 rounded-full bg-[#55DD4A]"></span>
            <span>Completed</span>
          </div>
          <div className="title flex gap-3 items-center justify-center">
            <span className="h-2 w-2 rounded-full bg-[#FFC123]"></span>
            <span>Up Coming</span>
          </div>
        </div>
      </div>
      <div className='taskslists flex gap-3 flex-wrap'>
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  )
}

export default StarredComponent
