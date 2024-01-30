import React, { useEffect } from "react";
import Task from "./Task";
import { useLocation } from "react-router-dom";

const DisplayTasks = ({ taskList }) => {
    const todayDate = new Date();
    const completedList = taskList && taskList.filter(element => element.isCompleted === true);
    const inprogressList = taskList && taskList.filter(element => {
        const endDate = new Date(element.endDate);
        return endDate > todayDate && element.isCompleted === false;
    });
    const pendingList = taskList && taskList.filter(element => {
        const endDate = new Date(element.endDate);
        return element.isCompleted === false && endDate < todayDate;
    });
    const location = useLocation();

    return (

        <div className="w-full flex flex-col gap-2 my-2">
            <div className="w-full flex justify-evenly">
                <div className="title flex gap-3 items-center justify-center w-[32%]">
                    <span className="h-2 w-2 rounded-full bg-[#3C79D6]"></span>
                    <span>In Progress</span>
                </div>
                <div className="title flex gap-3 items-center justify-center w-[32%]">
                    <span className="h-2 w-2 rounded-full bg-[#55DD4A]"></span>
                    <span>Completed</span>
                </div>
                <div className="title flex gap-3 items-center justify-center w-[32%]">
                    <span className="h-2 w-2 rounded-full bg-[#ff5454c9]"></span>
                    <span>Pending</span>
                </div>
            </div>
            <div className={`w-full flex justify-evenly py-2 
                ${location.pathname.includes("my-tasks") ? "h-[80vh]" : "h-[60vh]"}
            `} >
                <div className="inprogress w-[32%] h-full overflow-y-scroll">
                    <div className="taskslist flex flex-col gap-3">
                        {
                            inprogressList.length === 0 ? <div className="pl-20">
                                No InProgress Tasks
                            </div> :
                                inprogressList.map((element, index) => (
                                    <Task key={index} task={element} />
                                ))
                        }

                    </div>
                </div>
                <div className="Completed w-[32%] h-full overflow-y-scroll">

                    <div className="taskslist flex flex-col gap-3">
                        {
                            completedList.length === 0 ? <div className="pl-20">
                                No Completed Tasks
                            </div> :
                                completedList.map((element, index) => (
                                    <Task key={index} task={element} />
                                ))
                        }

                    </div>
                </div>
                <div className="upcoming w-[32%] h-full overflow-y-scroll">

                    <div className="taskslist flex flex-col gap-3">
                        {
                            pendingList.length === 0 ? <div>
                                No Pending Tasks
                            </div> :
                                pendingList.map((element, index) => (
                                    <Task key={index} task={element} />
                                ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayTasks;
