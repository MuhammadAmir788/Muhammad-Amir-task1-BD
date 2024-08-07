var routes = require("express").Router();
const {
  createStudent,
  getAllStudents,
  deleteStudent,
} = require("../controllers/studentController");

routes.post("/create-students", createStudent);
routes.get("/get-all-students", getAllStudents);
routes.delete("/delete-students", deleteStudent);

module.exports = routes;
