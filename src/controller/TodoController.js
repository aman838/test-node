const Todo = require("../model/todo")

const getAllTodo = async (req, res) => {
    try {
      const todos = await Todo.find().sort({ createdAt: -1 }); // newest first
      res.status(200).json(todos);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }


const createTodo = async (req, res) => {
    try {
      const { task } = req.body
      const todos = await Todo({task})
      todos.save()
      res.status(201).json({message:"task has created Successfully!", data:todos});
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

const deleteTodo = async (req, res) => {
    try {
      const {id} = req.params
      await Todo.deleteOne({ _id: id })
      res.status(200).json({message:"task deleted successfully!"});
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  const updateTodo = async (req, res) => {
    try {
      const { id } = req.params;
      const { task, completed } = req.body;
  
      const updatedTodo = await Todo.findByIdAndUpdate(
        id,
        { task, completed },
        { new: true, runValidators: true }
      );
  
      if (!updatedTodo) {
        return res.status(404).json({ message: "Todo not found" });
      }
  
      res.status(200).json({ message: "Todo updated successfully", data: updatedTodo });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
 
  module.exports = { getAllTodo, createTodo, deleteTodo, updateTodo }