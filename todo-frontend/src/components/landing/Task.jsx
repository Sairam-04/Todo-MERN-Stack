import React from "react";
import { useLocation } from "react-router-dom"
import EditTaskForm from "./EditTaskForm";
import 'react-toastify/dist/ReactToastify.css';

const Task = ({ task, completeTask, completeATask, editTaskClc, editTaskClick, starTask, starATask, deleteTask }) => {
    const location = useLocation();
    const todayDate = new Date();
    const inprogress = task && new Date(task.endDate) > todayDate && task.isCompleted === false;
    const completed = task && task.isCompleted === true;
    const pending = task && task.isCompleted === false && new Date(task.endDate) < todayDate;
    const star = task && task.isStarred === true;
    const task_id = task && task._id;
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { month: 'short', day: 'numeric', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }
    return (
        <>
            <div className="flex text-sm w-full bg-[#323539] custom-shadow rounded-2xl">
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
                    {
                        location.pathname.includes('my-tasks') || location.pathname.includes('starred') ?
                            <></> : (
                                <div className="bottomPart flex border-t pt-2 justify-end gap-3">
                                    <i className="bi bi-pencil-square cursor-pointer hover:scale-[1.5]"
                                        onClick={() => editTaskClc()}
                                    ></i>
                                    <i className="bi bi-trash-fill cursor-pointer hover:scale-[1.5]"
                                        onClick={() => deleteTask(task_id)}
                                    ></i>
                                    <i
                                        onClick={() => starTask(task_id, star)}
                                        className={`bi bi-star-fill cursor-pointer hover:scale-[1.5] ${starATask || star ? "text-yellow-500" : "text-white"}`}></i>
                                    <i
                                        onClick={() => completeTask(completed, task_id)}
                                        className={`bi bi-check-circle-fill cursor-pointer hover:scale-[1.5] ${completeATask || completed ? "text-green-600" : "text-white"}`}
                                    > </i>
                                </div>
                            )
                    }
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
