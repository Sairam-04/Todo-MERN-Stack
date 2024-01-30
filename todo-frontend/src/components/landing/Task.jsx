import React, { useState } from "react";
import { useLocation } from "react-router-dom"
import putService from "../../services/putService";
import { endpoint } from "../constants/url";
import deleteService from "../../services/deleteService";
import EditTaskForm from "./EditTaskForm";

const Task = ({ task }) => {
    const location = useLocation();
    const todayDate = new Date();
    const inprogress = task && new Date(task.endDate) > todayDate && task.isCompleted === false;
    const completed = task && task.isCompleted === true;
    const pending = task && task.isCompleted === false && new Date(task.endDate) < todayDate;
    const star = task && task.isStarred === true;
    const task_id = task && task._id;
    const [starATask, setStarATask] = useState(false);
    const [completeATask, setCompleteATask] = useState(false);
    const [editTaskClick, setEditTaskClick] = useState(false);
    
    const editTaskClc = () => {
        setEditTaskClick(!editTaskClick)
    }

    const deleteTask = async () => {
        try {
            const response = await deleteService(
                `${endpoint}/delete-todo/${task_id}`,
                true
            )
            if (response && response.statusText === "OK") {
                if (response.data?.success) {
                    alert(`Deleted the Task : ${task && task.title} `)
                }
            } else {
                console.log("Something went wrong");
            }
        } catch (error) {
            console.log(error);
        }
    }

    const starTask = async () => {
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
                        alert("Starred the Task")
                    }
                } else {
                    console.log("Something went wrong");
                }
            } else {
                alert("Task is Already Starred")
            }
        } catch (error) {
            console.log(error);
        }
    }

    const completeTask = async () => {
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
                        alert("Marked the Task as Completed")
                    }
                } else {
                    console.log("Something went wrong");
                }
            } else {
                alert("Task is Already Completed")
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className="flex text-sm w-full bg-[#323539] shadow-md">
                {
                    location.pathname.includes("starred") && (
                        <>
                            {inprogress && <div className="w-2 bg-[#3C79D6] rounded-lg"></div>}
                            {completed && <div className="w-2 bg-[#55DD4A] rounded-lg"></div>}
                            {pending && <div className="w-2 bg-[#ff5454c9] rounded-lg"></div>}
                        </>
                    )
                }

                <div className="flex flex-col gap-1.5 py-2 px-4">
                    <div className="title text-lg font-semibold leading-tight">
                        {task && task?.title}
                    </div>
                    <ul className="tags flex gap-2 text-xs w-full flex-wrap">
                        {
                            task && task.tags && (
                                task.tags.map((ele, ind) => (
                                    <li key={ind} className="py-0.5 px-3 bg-[#7864F4] text-white rounded-xl">{ele}</li>

                                ))
                            )
                        }
                    </ul>
                    <div className="desc text-xs text-justify w-full break-words">
                        {task && task.desc}
                    </div>
                    <div className="startdate flex gap-2">
                        <i className="bi bi-calendar2-week-fill"></i>
                        {<span>{task && task.startDate}</span>}
                    </div>
                    <div className="enddate flex gap-2">
                        <i className="bi bi-calendar2-week-fill"></i>
                        {<span>{task && task.endDate}</span>}

                    </div>
                    <div className="bottomPart flex border-t pt-2 justify-end gap-3">
                        <i className="bi bi-pencil-square cursor-pointer hover:scale-[1.5]"
                            onClick={() => editTaskClc()}
                        ></i>
                        <i className="bi bi-trash-fill cursor-pointer hover:scale-[1.5]"
                            onClick={() => deleteTask()}
                        ></i>
                        <i
                            onClick={() => starTask()}
                            className={`bi bi-star-fill cursor-pointer hover:scale-[1.5] ${starATask || star ? "text-yellow-500" : "text-white"}`}></i>
                        <i
                            onClick={() => completeTask()}
                            className={`bi bi-check-circle-fill cursor-pointer hover:scale-[1.5] ${completeATask || completed ? "text-green-600" : "text-white"}`}
                        > </i>
                    </div>
                </div>
            </div>

            {
                editTaskClick && (
                    <EditTaskForm taskcontent={task} editTaskClick={editTaskClc} />
                )
            }
        </>
    );
};

export default Task;
