import React, { useEffect, useState } from 'react'
import DisplayTasks from './DisplayTasks'
import CreateTaskForm from './ShowModal';
import { endpoint } from '../constants/url';
import getService from '../../services/getService';
import HomeTasksComponent from './HomeTasksComponent';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import deleteService from '../../services/deleteService';
import putService from '../../services/putService';

const HomeComponent = () => {
  const [createtaskbtn, setCreateTaskBtn] = useState(false);
  const [starATask, setStarATask] = useState(false);
  const [completeATask, setCompleteATask] = useState(false);
  const createTaskClick = () => {
    setCreateTaskBtn(!createtaskbtn);
  }
  const [editTaskClick, setEditTaskClick] = useState(false);

  const editTaskClc = () => {
    setEditTaskClick(!editTaskClick);
    getAllTasksList();
  }
  const [name, setName] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [loading, setLoading] = useState(true); // New loading state

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
          toast.error("Something Went Wrong");
        }
      } else {
        toast.error("Something Went Wrong");
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
          setLoading(false); // Set loading to false after data is fetched
        } else {
          toast.error("Something Went Wrong");
        }
      } else {
        toast.error("Something Went Wrong");
      }
    } catch (err) {
      console.log(err);
    }
  }

  const deleteTask = async (task_id) => {
    try {
      const response = await deleteService(
        `${endpoint}/delete-todo/${task_id}`,
        true
      )
      if (response && response.statusText === "OK") {
        if (response.data?.success) {
          getAllTasksList();
          toast.success(`Deleted the Task : ${task && task.title} `)
        }
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
  }

  const starTask = async (task_id, star) => {
    try {
      if (!star) {
        const response = await putService(
          `${endpoint}/update-todo/${task_id}`,
          {
            isStarred: true
          },
          true
        )
        if (response && response.statusText === "OK") {
          if (response.data?.success) {
            setStarATask(true)
            getAllTasksList();
            toast.success("Starred the Task")
          }
        } else {
          toast.error("Something went wrong");
        }
      } else {
        toast.warning("Task is Already Starred")
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
  }

  const completeTask = async (completed, task_id) => {
    try {
      if (!completed) {
        const response = await putService(
          `${endpoint}/update-todo/${task_id}`,
          {
            isCompleted: true
          },
          true
        )
        if (response && response.statusText === "OK") {
          if (response.data?.success) {
            setCompleteATask(true)
            getAllTasksList();
            toast.success("Marked the Task as Completed")
          }
        } else {
          toast.error("Something went wrong");
        }
      } else {
        toast.warning("Task is Already Completed")
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
  }

  useEffect(() => {
    getAllTasksList();
    getUserDetails();
  }, [createtaskbtn])

  if (loading) {
    return <div>Loading...</div>; // Render loading indicator while data is being fetched
  }

  return (
    <>
      <div className='homecomponent py-5 flex flex-col gap-3'>
        <div className='text-3xl text-center font-bold -tracking-tighter py-2 px-2 w-full flex flex-col gap-1 items-center'>
          👋 Hello, {name}
        </div>
        {
          (!taskList) ? (
            createtaskbtn ? <CreateTaskForm flag={false} newFlag={true} createTaskClick={createTaskClick} /> : (
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
            <HomeTasksComponent createTaskClick={createTaskClick} taskList={taskList}
              completeATask={completeATask}
              completeTask={completeTask}
              editTaskClc={editTaskClc}
              editTaskClick={editTaskClick}
              starTask = {starTask}
              starATask = {starATask}
              deleteTask = {deleteTask}
            />
          )
        }
        <ToastContainer />
      </div>
    </>
  )
}

export default HomeComponent
