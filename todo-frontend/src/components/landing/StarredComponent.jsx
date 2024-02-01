import React, { useEffect, useState } from 'react'
import Task from './Task'
import getService from '../../services/getService';
import { endpoint } from '../constants/url';
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../utils/localStorage';

const StarredComponent = () => {
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
          toast.error("Something Went Wrong while Fetching");
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
    getAllTasksList()
  }, [])

if (loading) {
  return (
    <Loader />
  )
}

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
          <span className="h-2 w-2 rounded-full bg-[#ff5454c9]"></span>
          <span>Pending</span>
        </div>
      </div>
    </div>
    <div className='taskslists flex gap-3 flex-wrap'>
      {
        taskList.filter(ele => ele.isStarred === true).length === 0 ? <div>No Starred Tasks</div> :
          taskList.filter(ele => ele.isStarred === true).map((element, index) => (
            <Task key={index} task={element} />
          ))
      }
    </div>
  </div>
)
}

export default StarredComponent;
