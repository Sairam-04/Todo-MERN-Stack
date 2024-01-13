const ToDoList = require("../models/todoListModel");

exports.createNewTODO = async (req, res, next) =>{
    try{
        // const 
        req.body.user = req.user._id;
        const todo = await ToDoList.create(req.body);
        return res.status(200).json({
            success: true,
            todo
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            success: false,
            error: error
        })
    }
}