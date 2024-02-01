import React, { useState } from "react";
import DisplayTasks from "./DisplayTasks";
import CreateTaskForm from "./ShowModal";

const HomeTasksComponent = ({
  taskList,
  createTaskClick,
  completeATask,
  completeTask,
  editTaskClc,
  editTaskClick,
  starTask,
  starATask,
  deleteTask,
}) => {
  const [showTaskForm, setShowTaskForm] = useState(false);
  const showForm = () => {
    setShowTaskForm(!showTaskForm);
  };
  return (
    <div className="flex flex-col gap-2">
      {taskList ? (
        <>
          <div className="flex justify-end items-center gap-1">
            
            <i
              className="bi bi-plus-lg hover:bg-stone-400 text-lg font-bold hover:rounded-full px-2 py-1 cursor-pointer"
              onClick={() => showForm()}
            ></i>
            <span className=" text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-fuchsia-400 to-cyan-300">
                    Add Task
                </span>
          </div>
          <DisplayTasks
            taskList={taskList}
            completeATask={completeATask}
            completeTask={completeTask}
            editTaskClc={editTaskClc}
            editTaskClick={editTaskClick}
            starTask={starTask}
            starATask={starATask}
            deleteTask={deleteTask}
          />
        </>
      ) : (
        <div className="flex flex-col gap-3">
          <div>
            <button
              onClick={() => {
                showForm();
                createTaskClick();
              }}
              className="bg-[#7864F4] hover:bg-[#6a54f8] text-white font-semibold py-2 px-4 rounded"
            >
              Create Task
            </button>
          </div>
          <div className="text-center">
            There are No Tasks Yet. Create a Task
          </div>
        </div>
      )}

      {showTaskForm && (
        <CreateTaskForm
          flag={true}
          newFlag={false}
          createTaskClick={createTaskClick}
          showForm={showForm}
        />
      )}
    </div>
  );
};

export default HomeTasksComponent;
