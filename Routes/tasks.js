// express router
const express = require("express");
const router = express.Router();

//importing the controllers
const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../Controllers/tasks.js");

//setting up the routes
// here / and /:id will be placed at the end of whatever we pass in my app.use() path in app.js file
router.route("/").get(getAllTasks).post(createTask);//here we have chained the get and put routes as they use the same path
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);//same for this



module.exports = router; //exporting the router
