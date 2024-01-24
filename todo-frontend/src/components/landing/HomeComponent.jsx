import React, { useEffect, useState } from 'react'
import DisplayTasks from './DisplayTasks'
import CreateTaskForm from './ShowModal';
import { endpoint } from '../constants/url';
import getService from '../../services/getService';
import HomeTasksComponent from './HomeTasksComponent';

const HomeComponent = () => {
  const [createtaskbtn, setCreateTaskBtn] = useState(false);
  const createTaskClick = () => {
    setCreateTaskBtn(!createtaskbtn);
  }
  const [name, setName] = useState("");
  const [taskList, setTaskList] = useState([]);
  const getUserDetails = async () => {
    try {
      const response = await getService(
        `${endpoint}/me`,
        true
      );
      if (response && response.statusText === "OK") {
        if (response?.data?.success) {
          setName(response.data?.user?.name);
        } else {
          alert("Something Went Wrong");
        }
      } else {
        alert("Something Went Wrong");
      }
    } catch (err) {
      console.log(err);
    }
  }

  const getAllTasksList = async () => {
    try {
      const response = await getService(
        `${endpoint}/get-todo-list`,
        true
      );
      if (response && response.statusText === "OK") {
        if (response?.data?.success) {
          setTaskList(response.data?.todolist);
        } else {
        }
      } else {
        alert("Something Went Wrong");
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getUserDetails();
    getAllTasksList();
  }, [])
  return (
    <>
      <div className='homecomponent py-5 flex flex-col gap-3'>
        <div className='text-3xl text-center font-bold -tracking-tighter py-2 px-2 w-full flex flex-col gap-1 items-center'>
          👋 Hello, {name}
        </div>
        {
          (taskList && taskList.length === 0) ? (
            createtaskbtn ? <CreateTaskForm createTaskClick={createTaskClick} /> : (
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
          ) : (
            <HomeTasksComponent />
          )
        }
      </div>
    </>
  )
}

export default HomeComponent
