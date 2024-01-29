import React, { useState } from 'react'
import DisplayTasks from './DisplayTasks';
import CreateTaskForm from './ShowModal';
import HomeComponent from './HomeComponent';

const HomeTasksComponent = ({ taskList, createTaskClick }) => {
    const [showTaskForm, setShowTaskForm] = useState(false);
    const showForm = () => {
        setShowTaskForm(!showTaskForm);
    }
    return (
        <div className='flex flex-col gap-2'>
            {
                taskList ? (
                    <>
                        <div className='flex justify-end'>
                            <i className="bi bi-plus-lg hover:bg-stone-400 hover:rounded-full px-2 py-1 cursor-pointer"
                                onClick={() => showForm()}
                            ></i>
                        </div >
                        <DisplayTasks taskList={taskList} />
                    </>

                ) : (
                    <div className='flex flex-col gap-3'>
                        <div>
                            <button
                                onClick={() => {
                                    showForm();
                                    createTaskClick()
                                }}
                                className="bg-[#7864F4] hover:bg-[#6a54f8] text-white font-semibold py-2 px-4 rounded">
                                Create Task
                            </button>
                        </div>
                        <div className='text-center'>
                            There are No Tasks Yet. Create a Task
                        </div>
                    </div>
                )
            }

            {showTaskForm && (
                <CreateTaskForm flag={true} newFlag={false} createTaskClick={createTaskClick} showForm={showForm}  />
            )}
        </div >
    )
}

export default HomeTasksComponent;
