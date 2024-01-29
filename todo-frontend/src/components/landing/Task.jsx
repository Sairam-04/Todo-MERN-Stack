import React from "react";
import { useLocation } from "react-router-dom"

const Task = ({ task }) => {
    const location = useLocation();
    return (
        <div className="flex text-sm bg-[#323539] shadow-md">
            {
                (location.pathname.includes("starred")) && (
                    <div className="w-2 bg-green-600 rounded-lg"></div>
                )
            }

            <div className="flex flex-col gap-1.5 py-2 px-4">
                <div className="title text-lg font-semibold leading-tight">
                    {task && task?.title}
                    {/* Creating Landing Page UI Design */}
                </div>
                <ul className="tags flex gap-3 text-xs">
                    {
                        task && task.tags && (
                            task.tags.map((ele, ind)=>(
                                <li key={ind} className="py-0.5 px-3 bg-[#7864F4] text-white rounded-xl">{ele}</li>

                            ))
                        )
                    }
                    {/* <li className="py-0.5 px-3 bg-[#7864F4] text-white rounded-xl">One</li>
                    <li className="py-0.5 px-3 bg-[#7864F4] text-white rounded-xl">Two</li>
                    <li className="py-0.5 px-3 bg-[#7864F4] text-white rounded-xl">Three</li> */}
                </ul>
                <div className="desc text-xs text-justify">
                    {task && task.desc}
                    {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corrupti
                    quibusdam natus ea. Sapiente ipsa adipisci, molestias suscipit nostrum
                    commodi molestiae non natus eligendi nesciunt, quo, distinctio nemo
                    rerum porro necessitatibus recusandae quidem officia eum quod qui sint
                    beatae mollitia. */}
                </div>
                <div className="startdate flex gap-2">
                    <i className="bi bi-calendar2-week-fill"></i>
                    {/* <span>Date 20 20 20</span> */}
                    {<span>{task && task.startDate}</span>}
                </div>
                <div className="enddate flex gap-2">
                    <i className="bi bi-calendar2-week-fill"></i>
                    {/* <span>Date 20 20 20</span> */}
                    {<span>{ task && task.endDate}</span>}

                </div>
                <div className="bottomPart flex border-t pt-2 justify-end gap-3">
                    <i className="bi bi-pencil-square cursor-pointer"></i>
                    <i className="bi bi-trash-fill cursor-pointer"></i>
                    <i className="bi bi-star-fill text-yellow-500 cursor-pointer"></i>
                    <i className="bi bi-check-circle-fill text-green-600 cursor-pointer"></i>
                </div>
            </div>
        </div>
    );
};

export default Task;
