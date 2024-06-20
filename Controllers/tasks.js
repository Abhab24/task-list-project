//CONTROLLER FOR ROUTES IN TASKS.JS
//collection of Cb fns (logics of funtions) of all the routers

const Task = require("../models/task");
const getAllTasks = async (req, res) => {
  //for GET request
  try {
    const tasks = await Task.find({}); //task object
    res.status(201).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createTask = async (req, res) => {
  //POST
  try {
    const task = await Task.create(req.body); //task object
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getTask = async (req, res) => {
  //GET
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      //if no item in db has matchong id
      return res.status(404).json({ msg: "no task with id:{taskID" });
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
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body,{
      new:true,
      runValidators:true,
    });
    if (!task) {
      //if no item in db has matchong id
      return res.status(404).json({ msg: "no task with id:{taskID" });
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
      return res.status(404).json({ msg: "no task with id:{taskID" });
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
