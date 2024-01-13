const mongoose = require("mongoose");

const toDoList = mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "User"
    },
    todolist:[
        {
            title:{
                type: String,
                required: [true],
                maxLength: [50, "Title must be 50 characters"]
            },
            desc:{
                type: String,
                default:""
            },
            isCompleted:{
                type: Boolean,
                default: false
            }
        }
    ]
})

module.exports = mongoose.model("ToDoList",toDoList);
