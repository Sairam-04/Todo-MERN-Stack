import React from 'react'
import Task from './Task'

const StarredComponent = () => {
  return (
    <div className='py-2 w-full flex gap-3 flex-wrap h-[calc(100vh-9.5vh)] overflow-y-auto'>
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
  )
}

export default StarredComponent
