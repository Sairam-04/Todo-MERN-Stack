const express = require("express");
const { createNewTODO, addNewTodo, updateTodo, getAllTodos, deleteTodo, getTask } = require("../controller/todoListController");
const todoRouter = express.Router();
const authorization = require("../middleware/auth");

todoRouter.route("/get-todo-list").get(authorization, getAllTodos);
todoRouter.route("/get-task/:task_id").get(authorization, getTask);
todoRouter.route("/new-todo").post(authorization, createNewTODO);
todoRouter.route("/add-todo").post(authorization, addNewTodo);
todoRouter.route("/update-todo/:task_id").put(authorization, updateTodo);
todoRouter.route("/delete-todo/:task_id").delete(authorization, deleteTodo);
module.exports = todoRouter;