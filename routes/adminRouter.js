var routes = require("express").Router();
const {
  createAdmin,
  getAllAdmin,
  deleteAdmin,
} = require("../controllers/adminController");
const { createAdminSchema } = require("../validations/admin");

routes.get("/get-all-admins", getAllAdmin);
routes.post("/create-admin", createAdminSchema, createAdmin);
routes.delete("/delete-admin", deleteAdmin);

module.exports = routes;
