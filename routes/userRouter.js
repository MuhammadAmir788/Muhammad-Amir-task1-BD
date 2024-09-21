var routes = require("express").Router();
const {
  createUser,
  getAllUsers,
  getUser,
  deleteUser,
} = require("../controllers/userController");
const { createUserSchema, getUsername } = require("../validations/users");

routes.post("/create-user", createUserSchema, createUser);
routes.get("/get-all-users", getAllUsers);
routes.get("/get-by-username", getUsername, getUser);
routes.delete("/delete-user", deleteUser);

module.exports = routes;
