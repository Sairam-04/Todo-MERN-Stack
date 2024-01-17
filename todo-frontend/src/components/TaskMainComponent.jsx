import React from 'react'
import Header from './Header'
import MainContent from './MainContent'
import SideBar from './SideBar'
import {Outlet} from "react-router-dom"

const TaskMainComponent = () => {
  return (
    <div className='maincomponent w-full h-screen flex text-white overflow-hidden font-poppins'>
      <div className='sidebardiv w-[20%] h-screen'>
        <SideBar />
      </div>
      <div className='rightcontent w-[80%]'>
        <Header />
        <MainContent></MainContent>
      </div>
    </div>
  )
}

export default TaskMainComponent
