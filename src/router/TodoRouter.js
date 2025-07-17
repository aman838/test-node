const express = require("express")
const { getAllTodo, createTodo, deleteTodo, updateTodo } = require("../controller/TodoController")

const todoRouter = express.Router()

todoRouter.get("/",getAllTodo)
todoRouter.post("/",createTodo)
todoRouter.delete("/:id",deleteTodo)
todoRouter.put("/:id",updateTodo)

module.exports = todoRouter