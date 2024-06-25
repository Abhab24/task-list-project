//CONTROLLER FOR ROUTES IN TASKS.JS (all route handlers)
//collection of Cb fns (logics of funtions) of all the routers

const Task = require("../models/task");
const asyncWrapper = require("../middleware/async");
const {createCustomError}= require('../Errors/custom-error')

const getAllTasks = asyncWrapper(async (req, res) => {
  //for GET request
  const tasks = await Task.find({}); //task object
  res.status(201).json({ tasks });
});

const createTask = async (req, res) => {
  //POST
  try {
    const task = await Task.create(req.body); //task object
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getTask = async (req, res,next) => {
  //GET
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return next(createCustomError (`No task with id:{taskID}`,404 ));
      //if no item in db has matchong id
    }
    res.status(200).json({ task });
  } catch (error) {
    //if syntax of id is wrong etc
    res.status(500).json({ msg: error });
  }
};

const updateTask = async (req, res) => {
  //PUT
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      //if no item in db has matchong id
      return next(createCustomError (`No task with id:{taskID}`,404 ));
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
  res.send("update a task");
};

const deleteTask = async (req, res) => {
  //DELETE
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      //if no item in db has matchong id
      return next(createCustomError (`No task with id:{taskID}`,404 ));
    }
    res.status(200).json({ task });
  } catch (error) {
    //if syntax of id is wrong
    res.status(500).json({ msg: error });
  }
  res.send("delete a task");
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
