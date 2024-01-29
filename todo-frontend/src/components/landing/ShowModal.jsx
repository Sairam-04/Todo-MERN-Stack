import React, { useEffect, useState } from "react";
import postService from "../../services/postService";
import { endpoint } from "../constants/url";

const CreateTaskForm = ({ flag,newFlag, createTaskClick, showForm }) => {
    const [taskData, setTaskData] = useState({
        title: "",
        desc: "",
        startDate: "",
        endDate: "",
        tags: [],
        isStarred: false
    })
    const [isSubmit, setIsSubmit] = useState(false);
    const [tag, setTag] = useState("");
    const [tagsList, setTagsList] = useState([])

    const [taskErrors, setTaskErrors] = useState({});
    const validateTaskForm = (values) => {
        const errors = {};
        if (!values.title) {
            errors.title = "Title is Required";
        }
        if (!values.desc) {
            errors.desc = "Description is Required";
        }
        if (!values.startDate) {
            errors.startDate = "Start Date is Required";
        }
        //  else {
        //     // Additional check for valid start date if needed
        //     const startDate = new Date(values.startDate);
        //     const currentDate = new Date();

        //     if (startDate < currentDate) {
        //         errors.startDate = "Start Date must be in the future";
        //     }
        // }

        if (!values.endDate) {
            errors.endDate = "End Date is Required";
        }
        // else {
        //     // Additional check for valid end date if needed
        //     const endDate = new Date(values.endDate);
        //     const startDate = new Date(values.startDate);

        //     if (endDate < startDate) {
        //         errors.endDate = "End Date must be after Start Date";
        //     }
        // }
        return errors;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTaskData((prevTask) => ({
            ...prevTask,
            [name]: value
        }))
    }

    const SubmitTask = () => {
        setTaskErrors(validateTaskForm(taskData));
        setIsSubmit(true);
        // createTaskClick();
    }
    const handleKeyDown = (e) => {
        // Prevent form submission on Enter key press
        if (e.key === "Enter") {
            e.preventDefault();
        }
    };

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

    const createNewTask = async () => {
        try {
            const updatedTaskData = { ...taskData, tags: tagsList };
            const url = newFlag ? `${endpoint}/new-todo` :`${endpoint}/add-todo`;
            const DATA = newFlag ? {
                todolist: [
                    updatedTaskData
                ]
            } : updatedTaskData;
            const response = await postService(
                url,
                DATA,
                true
            );
            if (response && response.statusText === "OK") {
                if (response?.data?.success) {
                    console.log("Success");
                    if (flag) {
                        showForm();
                    }
                    createTaskClick();
                } else {
                    alert("Something Went Wrong");
                }
            } else {
                alert("Something Went Wrong");
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (Object.keys(taskErrors).length === 0 && isSubmit) {
            createNewTask();
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
                                    showForm()
                                    createTaskClick()
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
                                </div>
                                <div className="relative h-11 w-full min-w-[200px]">
                                    <input
                                        name="startDate"
                                        value={taskData.startDate}
                                        placeholder="Title"
                                        onChange={handleChange}
                                        type="Date"
                                        className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-white focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                                    />
                                    <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        Start Date
                                    </label>
                                </div>
                                <div className="relative h-11 w-full min-w-[200px]">
                                    <input
                                        name="endDate"
                                        value={taskData.endDate}
                                        placeholder="Title"
                                        onChange={handleChange}
                                        type="Date"
                                        className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-white focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                                    />
                                    <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        End Date
                                    </label>
                                </div>

                                <div className="tags flex flex-col gap-5">
                                    <div className="flex flex-wrap w-full h-auto border border-yellow-100 p-2 gap-1">
                                        {
                                            tagsList.map((ele, ind) => (
                                                <div
                                                    key={ind}
                                                    className="py-0.5 pl-2 bg-[#7864F4] text-white rounded-xl  justify-between text-xs flex gap-2"
                                                >
                                                    <div>{ele}</div>
                                                    <div
                                                        onClick={() => removeTag(ind)}
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
                                onClick={() => SubmitTask()}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
};

export default CreateTaskForm;
