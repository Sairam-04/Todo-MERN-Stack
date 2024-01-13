const express = require("express");
const { createNewTODO } = require("../controller/todoListController");
const todoRouter = express.Router();
const authorzation = require("../middleware/auth");

todoRouter.route("/new-todo").post(authorzation, createNewTODO);

module.exports = todoRouter;