const express = require("express");
const AdminController = require("../controllers/AdminController");

const router = express.Router();

router.post("/register", AdminController.regAdmin);

module.exports = router;