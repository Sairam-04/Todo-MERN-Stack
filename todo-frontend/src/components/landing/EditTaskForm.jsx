import React, { useState, useEffect } from 'react'
import putService from '../../services/putService';
import { endpoint } from '../constants/url';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditTaskForm = ({ taskcontent, editTaskClick, taskid }) => {
    const [taskData, setTaskData] = useState(taskcontent)
    const [taskErrors, setTaskErrors] = useState({});
    const [tag, setTag] = useState("");
    const [tagsList, setTagsList] = useState(taskData?.tags || [])
    const [isSubmit, setIsSubmit] = useState(false);
    const validateTaskForm = (values) => {
        const errors = {};
        if (!values.title) {
            errors.title = "Title is Required";
        } else if (values.title.length < 5) {
            errors.title = "Title must atleast contain 5 characters"
        }
        if (!values.desc) {
            errors.desc = "Description is Required";
        }
        if (!values.startDate) {
            errors.startDate = "Start Date is Required";
        }

        if (!values.endDate) {
            errors.endDate = "End Date is Required";
        } else if (new Date(values.endDate) < new Date(values.startDate)) {
            errors.endDate = "End Date must be greater than the Start Date";
        }
        return errors;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTaskData((prevTask) => ({
            ...prevTask,
            [name]: value
        }))
    }

    const onTaskChange = (e) => {
        setTag(e.target.value);
    }
    const addTask = (e) => {
        if (e.key === "Enter") {
            setTagsList(prevTag => [tag, ...prevTag]);
            setTag("");
        }
    }

    const removeTag = (index) => {
        const newarr = tagsList.filter((item, i) => i !== index);
        setTagsList(newarr);
    }

    const SubmitTask = () => {
        setTaskErrors(validateTaskForm(taskData));
        setIsSubmit(true);
     
    }

    const EditTask = async () =>{
        try {
            const updatedTaskData = { ...taskData, tags: tagsList };
            const response = await putService(
                `${endpoint}/update-todo/${taskData?._id}`,
                updatedTaskData,
                true
            )
            if (response) {
                if (response?.data?.success) {    
                    toast.success("Updated a Task Successfully");                
                    editTaskClick()
                } else {
                    toast.error("Something Went Wrong");
                }
            } else {
                toast.error("Something Went Wrong");
            }
        } catch (error) {
            toast.error("Something Went Wrong");
        }
    }


    useEffect(() => {
        if (Object.keys(taskErrors).length === 0 && isSubmit) {
            EditTask();
        }
    }, [isSubmit, taskErrors]);

    return (
        <>

            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-[40%] my-6 mx-auto max-w-3xl">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#2A2D33] outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-center justify-between p-3 border-b border-solid border-blueGray-200 rounded-t text-white">
                            <h3 className="text-xl font-semibold">Create Task</h3>
                            <button
                                className="bg-none p-1 ml-auto border-0 text-red-600 float-right text-2xl leading-none font-semibold hover:bg-red-600 hover:text-white hover:px-1 hover:rounded-md"
                                onClick={() => {
                                    editTaskClick()
                                }}
                            >
                                X
                            </button>
                        </div>
                        <div className="relative p-6 flex-auto h-[60vh] overflow-y-auto">
                            <div className="flex flex-col gap-6">
                                <div className="relative h-11 w-full min-w-[200px]">
                                    <input
                                        name="title"
                                        type="text"
                                        value={taskData.title}
                                        onChange={handleChange}
                                        placeholder="Title"
                                        className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-white focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                                    />
                                    <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        Title
                                    </label>
                                    <p className="text-xs text-red-600">{taskErrors.title}</p>
                                </div>
                                <div className="relative h-20 w-full min-w-[200px]">
                                    <textarea
                                        name="desc"
                                        type="text"
                                        value={taskData.desc}
                                        onChange={handleChange}
                                        placeholder="Desc"
                                        className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-white focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                                    />
                                    <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        Desc
                                    </label>
                                    <p className="text-xs text-red-600 mt-[-5px]">{taskErrors.desc}</p>
                                </div>
                                <div className="relative h-11 w-full min-w-[200px]">
                                    <input
                                        name="startDate"
                                        value={taskData.startDate ? new Date(taskData.startDate).toISOString().split('T')[0] : ''} // Convert endDate to ISO string and extract date part
                                        placeholder="Title"
                                        onChange={handleChange}
                                        type="Date"
                                        className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-white focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                                    />
                                    <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        Start Date
                                    </label>
                                    <p className="text-xs text-red-600 mb-3">{taskErrors.startDate}</p>
                                </div>
                                <div className="relative h-11 w-full min-w-[200px]">
                                    <input
                                        name="endDate"
                                        value={taskData.endDate ? new Date(taskData.endDate).toISOString().split('T')[0] : ''} // Convert endDate to ISO string and extract date part
                                        placeholder="EndDate"
                                        onChange={handleChange}
                                        type="Date"
                                        className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-white focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                                    />
                                    <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        End Date
                                    </label>
                                    <p className="text-xs text-red-600">{taskErrors.endDate}</p>
                                </div>

                                <div className="tags flex flex-col gap-5">
                                    <div className="flex flex-wrap w-full h-auto border border-yellow-100 p-2 gap-1">
                                        {
                                            taskData && tagsList.map((ele, ind) => (
                                                <div
                                                    key={ind}
                                                    className="py-0.5 pl-2 bg-[#7864F4] text-white rounded-xl  justify-between text-xs flex gap-2"
                                                >
                                                    <div>{ele}</div>
                                                    <div
                                                        onClick={() => {removeTag(ind)}}
                                                        className="bg-white text-gray-900 flex items-center justify-center rounded-full w-4 cursor-pointer">X</div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div className="relative h-11 w-full min-w-[200px]">
                                        <input
                                            name="tag"
                                            value={tag}
                                            onChange={onTaskChange}
                                            onKeyDown={addTask}
                                            placeholder="Tags"
                                            className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-white focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                                        />
                                        <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                            Tags
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-end p-2 border-t border-solid border-blueGray-200 rounded-b">
                            <button
                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {SubmitTask()}}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default EditTaskForm
