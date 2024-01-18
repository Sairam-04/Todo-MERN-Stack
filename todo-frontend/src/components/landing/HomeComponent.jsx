import React, { useState } from 'react'
import DisplayTasks from './DisplayTasks'
import ShowModal from './ShowModal';

const HomeComponent = () => {
  const [createtaskbtn, setCreateTaskBtn] = useState(false);
  const createTaskClick = () => {
    setCreateTaskBtn(!createtaskbtn)
  }
  return (
    <>
      <div className='homecomponent py-5 flex flex-col gap-3'>
        <div className='text-3xl text-center font-bold -tracking-tighter py-2 px-2 w-full flex flex-col gap-1 items-center'>
          👋 Hello, Sai Ram
        </div>
        {
          createtaskbtn ? <ShowModal createTaskClick={createTaskClick} /> : (
            <div className='flex flex-col gap-3'>
              <div>
                <button
                  onClick={() => createTaskClick()}
                  className="bg-[#7864F4] hover:bg-[#6a54f8] text-white font-semibold py-2 px-4 rounded">
                  Create Task
                </button>
              </div>
              <div className='text-center'>
                There are No Tasks Yet. Create a Task
              </div>
            </div>
          )
        }
      </div>
    </>
  )
}

export default HomeComponent
