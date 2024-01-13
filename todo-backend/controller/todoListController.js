const ToDoList = require("../models/todoListModel");
const User = require("../models/userModel")

exports.getAllTodos = async (req, res, next) => {
    try {
        const user_id = req.user._id;
        if (!user_id) {
            return res.status(404).json({
                success: false,
                message: "User Not found",
            });
        }
        const user = await User.findById(user_id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User Not Registered",
            });
        }
        const todo = await ToDoList.findOne({ user: user_id });
        if (!todo) {
            return res.status(200).json({
                success: true,
                message: `You don't have any tasks created, create a new task`,
            });
        }
        const { todolist } = todo;
        return res.status(200).json({
            success: true,
            todolist
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error,
        });
    }
}

exports.createNewTODO = async (req, res, next) => {
    try {
        req.body.user = req.user._id;
        const existingTodo = await ToDoList.findOne({ user: req.user._id });

        if (existingTodo) {
            return res.status(400).json({
                success: false,
                error: "User already has a ToDo list",
            });
        }
        const todo = await ToDoList.create(req.body);
        return res.status(200).json({
            success: true,
            todo,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error,
        });
    }
};

exports.getTask = async (req, res, next) =>{
    try{
        const user_id = req.user._id;
        if(!user_id){
            return res.status(400).json({
                success: false,
                message: "User is not Registered"
            })
        }
        const task_id = req.params.task_id;
        if (!task_id) {
            return res.status(404).json({
                success: false,
                message: "Task Does not exists",
            });
        }
        const user = await User.findById(user_id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User Not Registered",
            });
        }
        const todo = await ToDoList.findOne({user: user_id});
        if(!todo){
            return res.status(404).json({
                success: false,
                message: `You don't have any tasks created, create a new task`,
            });
        }
        const task = todo.todolist.filter(task=> task._id.toString() === task_id.toString());
        if(task.length===0){
            return res.status(404).json({
                success: false,
                message: "Task not found",
            });
        }
        return res.status(200).json({
            success: true,
            task: task[0] || {}
        })
    }catch(err){
        return res.status(500).json({
            success: false,
            error: err
        })
    }
}

// Add a new todo 
exports.addNewTodo = async (req, res, next) => {
    try {
        const user_id = req.user._id;
        if (!user_id) {
            return res.status(404).json({
                success: false,
                message: "User Not found",
            });
        }
        const todo = await ToDoList.findOne({ user: user_id });
        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "User Not Registered",
            });
        }
        const newtodo = req.body;
        if (!newtodo) {
            return res.status(400).json({
                success: false,
                message: "Data sent is not a valid data",
            });
        }
        await todo.todolist.push(newtodo)
        todo.save();
        return res.status(200).json({
            success: true,
            todo,
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

exports.updateTodo = async (req, res, next) => {
    try {
        const user_id = req.user._id;
        if (!user_id) {
            return res.status(404).json({
                success: false,
                message: "User Not found",
            });
        }
        const task_id = req.params.task_id
        if (!task_id) {
            return res.status(404).json({
                success: false,
                message: "Task Does not exists",
            });
        }
        const updatedFields = req.body
        const updateObject = {};
        for (const key in updatedFields) {
            if (Object.hasOwnProperty.call(updatedFields, key)) {
                updateObject[`todolist.$.${key}`] = updatedFields[key];
            }
        }
        const todo = await ToDoList.findOneAndUpdate({ "user": user_id, "todolist._id": task_id },
            {
                $set: updateObject
            },
            {
                new: true
            }
        );
        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "User Not Registered",
            });
        }
        return res.status(200).json({
            success: true,
            todo
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: err
        })
    }
}

exports.deleteTodo = async (req, res, next) => {
    const user_id = req.user._id;
    if (!user_id) {
        return res.status(404).json({
            success: false,
            message: "User Not found",
        });
    }
    const task_id = req.params.task_id;
    if (!task_id) {
        return res.status(404).json({
            success: false,
            message: "Task Does not exists",
        });
    }
    const todo = await ToDoList.findOneAndUpdate({ "user": user_id },
        { $pull: { "todolist": { _id: task_id } } },
        { new: true }
    );
    if (!todo || !todo.todolist.some(task => task._id.toString() === task_id.toString())) {
        return res.status(404).json({
            success: false,
            message: "Task not found or User doesnot exists",
        });
    }
    return res.status(200).json({
        success: true,
        message: "Task deleted successfully",
    });
}

