import React from "react";
import Task from "./Task";

const DisplayTasks = () => {
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
                    <span className="h-2 w-2 rounded-full bg-[#FFC123]"></span>
                    <span>Up Coming</span>
                </div>
            </div>
            <div className="w-full flex justify-evenly py-2 h-[70vh]">
                <div className="inprogress w-[32%] h-full overflow-y-scroll">
                    <div className="taskslist flex flex-col gap-3">
                        <Task />
                        <Task />
                        
                    </div>
                </div>
                <div className="Completed w-[32%] h-full overflow-y-scroll">

                    <div className="taskslist flex flex-col gap-3">
                        <Task />
                        
                    </div>
                </div>
                <div className="upcoming w-[32%] h-full overflow-y-scroll">

                    <div className="taskslist flex flex-col gap-3">
                        <Task />
                        <Task />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayTasks;
