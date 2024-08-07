var routes = require("express").Router();
const {
  createTeacher,
  getAllTeachers,
  deleteTeacher,
} = require("../controllers/teacherController");

routes.post("/create-teacher", createTeacher);
routes.get("/getall-teacher", getAllTeachers);
routes.delete("/delete-teacher", deleteTeacher);

module.exports = routes;
