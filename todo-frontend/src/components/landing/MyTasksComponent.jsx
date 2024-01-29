import React, { useEffect, useState } from 'react'
import DisplayTasks from "./DisplayTasks";
import getService from '../../services/getService';
import { endpoint } from '../constants/url';

const MyTasksComponent = () => {
  const [taskList, setTaskList] = useState([]);
  const [loading, setLoading] = useState(true); // New loading state
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
        }
      } else {
        alert("Something Went Wrong");
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(()=>{
    getAllTasksList();
  }, [])

  if (loading) {
    return <div>Loading...</div>; // Render loading indicator while data is being fetched
  }

  return (
    <div className='py-2'>
      <DisplayTasks taskList={taskList} />
    </div>
  )
}

export default MyTasksComponent
