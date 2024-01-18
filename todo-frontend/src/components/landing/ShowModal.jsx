import React from "react";

const ShowModal = ({ createTaskClick }) => {
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
                                onClick={() => createTaskClick()}
                            >
                                X
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto h-[60vh] overflow-y-auto">
                            <div className="flex flex-col gap-6">
                                <div className="relative h-11 w-full min-w-[200px]">
                                    <input
                                        placeholder="Title"
                                        className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-white focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                                    />
                                    <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        Title
                                    </label>
                                </div>
                                <div className="relative h-20 w-full min-w-[200px]">
                                    <textarea
                                        placeholder="Desc"
                                        className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-white focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                                    />
                                    <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        Desc
                                    </label>
                                </div>
                                <div className="relative h-11 w-full min-w-[200px]">
                                    <input
                                        placeholder="Title"
                                        type="Date"
                                        className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-white focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                                    />
                                    <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        Start Date
                                    </label>
                                </div>
                                <div className="relative h-11 w-full min-w-[200px]">
                                    <input
                                        placeholder="Title"
                                        type="Date"
                                        className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-white focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                                    />
                                    <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        End Date
                                    </label>
                                </div>

                                <div className="tags flex flex-col gap-5">
                                    <div className="flex flex-wrap w-full h-auto border border-yellow-100 p-2 gap-1">
                                        <div
                                            className="py-0.5 pl-2 bg-[#7864F4] text-white rounded-xl  justify-between text-xs flex gap-2"
                                        >
                                            <div>jnjsndjnsd</div>
                                            <div className="bg-white text-gray-900 flex items-center justify-center rounded-full w-4">X</div>
                                        </div>
                                        <div
                                            className="py-0.5 pl-3 bg-[#7864F4] text-white rounded-xl  justify-between text-xs flex gap-2"
                                        >
                                            <div>One</div>
                                            <div className="bg-white text-gray-900 flex items-center justify-center rounded-full w-4">X</div>
                                        </div>
                                        <div
                                            className="py-0.5 pl-3 bg-[#7864F4] text-white rounded-xl  justify-between text-xs flex gap-2"
                                        >
                                            <div>One</div>
                                            <div className="bg-white text-gray-900 flex items-center justify-center rounded-full w-4">X</div>
                                        </div>
                                        <div
                                            className="py-0.5 pl-3 bg-[#7864F4] text-white rounded-xl  justify-between text-xs flex gap-2"
                                        >
                                            <div>One</div>
                                            <div className="bg-white text-gray-900 flex items-center justify-center rounded-full w-4">X</div>
                                        </div>
                                        <div
                                            className="py-0.5 pl-3 bg-[#7864F4] text-white rounded-xl  justify-between text-xs flex gap-2"
                                        >
                                            <div>One</div>
                                            <div className="bg-white text-gray-900 flex items-center justify-center rounded-full w-4">X</div>
                                        </div>
                                        <div
                                            className="py-0.5 pl-3 bg-[#7864F4] text-white rounded-xl  justify-between text-xs flex gap-2"
                                        >
                                            <div>One</div>
                                            <div className="bg-white text-gray-900 flex items-center justify-center rounded-full w-4">X</div>
                                        </div>
                                        <div
                                            className="py-0.5 pl-3 bg-[#7864F4] text-white rounded-xl  justify-between text-xs flex gap-2"
                                        >
                                            <div>One</div>
                                            <div className="bg-white text-gray-900 flex items-center justify-center rounded-full w-4">X</div>
                                        </div>
                                    </div>
                                    <div className="relative h-11 w-full min-w-[200px]">
                                        <input
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
                                onClick={() => createTaskClick()}
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
};

export default ShowModal;
