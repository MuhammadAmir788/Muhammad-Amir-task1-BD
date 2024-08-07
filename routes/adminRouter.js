var routes = require("express").Router();
const {
  createAdmin,
  getAllAdmin,
  deleteAdmin,
} = require("../controllers/adminController");

routes.get("/get-all-admins", getAllAdmin);
routes.post("/create-admin", createAdmin);
routes.delete("/delete-admin", deleteAdmin);

module.exports = routes;
