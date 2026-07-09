const express = require("express");
const AdminController = require("../controllers/admin/AdminController");

const router = express.Router();

router.post("/adminregister", AdminController.regAdmin);
router.post("/staffregister",AdminController.regStaff);
router.post("/docregister",AdminController.regDoc);
router.get("/showalldoc",AdminController.showalldoc);
router.post("/getdocdetails",AdminController.getdocdetails);
router.post("/updatedoc",AdminController.updatedoc);
router.post('/deletedoc',AdminController.Deletedoc);



module.exports = router;