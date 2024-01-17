import React from "react";

const Task = () => {
    return (
        <div className="flex flex-col gap-1.5 text-sm py-2 px-4 bg-[#323539] shadow-md rounded-lg">
            <div className="title text-lg font-semibold leading-tight">Creating Landing Page UI Design</div>
            <ul className="tags flex gap-3 text-xs">
                <li className="py-0.5 px-3 bg-[#7864F4] text-white rounded-xl">One</li>
                <li className="py-0.5 px-3 bg-[#7864F4] text-white rounded-xl">Two</li>
                <li className="py-0.5 px-3 bg-[#7864F4] text-white rounded-xl">Three</li>
            </ul>
            <div className="desc text-xs text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corrupti
                quibusdam natus ea. Sapiente ipsa adipisci, molestias suscipit nostrum
                commodi molestiae non natus eligendi nesciunt, quo, distinctio nemo
                rerum porro necessitatibus recusandae quidem officia eum quod qui sint
                beatae mollitia.
            </div>
            <div className="startdate flex gap-2">
                <i className="bi bi-calendar2-week-fill"></i>
                <span>Date 20 20 20</span>
            </div>
            <div className="enddate flex gap-2">
                <i className="bi bi-calendar2-week-fill"></i>
                <span>Date 20 20 20</span>
            </div>
            <div className="bottomPart flex border-t pt-2 justify-end gap-3">
                <i className="bi bi-pencil-square cursor-pointer"></i>
                <i className="bi bi-trash-fill cursor-pointer"></i>
                <i className="bi bi-star cursor-pointer"></i>
                <i className="bi bi-check-circle cursor-pointer"></i>
            </div>
        </div>
    );
};

export default Task;