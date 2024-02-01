import React, { useEffect, useState } from 'react'
import DisplayTasks from "./DisplayTasks";
import getService from '../../services/getService';
import { endpoint } from '../constants/url';
import Loader from './Loader';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getUser } from '../../utils/localStorage';
import { useNavigate } from 'react-router-dom';

const MyTasksComponent = () => {
  const navigate = useNavigate();
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
          toast.error("Something Went Wrong");

        }
      } else {
        toast.error("Something Went Wrong");
      }
    } catch (err) {
      toast.error("Something Went Wrong");
    }
  }

  useEffect(() => {
    if(getUser() === null){
      navigate("/login")
    }
    getAllTasksList();
  }, [])

  if (loading) {
    return (
      <Loader />
    )
  }

  return (
    <div className='py-2'>
      <DisplayTasks taskList={taskList} />
    </div>
  )
}

export default MyTasksComponent
