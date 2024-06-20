//CONTROLLER FOR ROUTES IN TASKS.JS
//collection of Cb fns (logics of funtions) of all the routers

const Task = require("../models/task");
const getAllTasks = (req, res) => {
  //for GET request
  res.send("get all the tasks");
};
const createTask = async (req, res) => {
  //POST
  const task = await Task.create(req.body)//task object
  res.status(201).json({task});
};
const getTask = (req, res) => {
  //GET
  res.json({ id: req.params.id });
};
const updateTask = (req, res) => {
  //PUT
  res.send("update a task");
};
const deleteTask = (req, res) => {
  //DELETE
  res.send("delete a task");
};
module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
