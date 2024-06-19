//CONTROLLER FOR ROUTES IN TASKS.JS
//collection of Cb fns (logics of funtions) of all the routers

const getAllTasks = (req, res) => {//for GET request
  res.send("get all the tasks");
};
const createTask = (req, res) => {//POST
  res.json(req.body);
};
const getTask = (req, res) => {//GET
  res.json({id:req.params.id});
};
const updateTask = (req, res) => {//PUT
  res.send("update a task");
};
const deleteTask = (req, res) => {//DELETE
  res.send("delete a task");
};
module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
