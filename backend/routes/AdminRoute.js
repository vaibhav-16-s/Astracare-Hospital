const express = require("express");
const AdminController = require("../controllers/admin/AdminController");

const router = express.Router();

// POST (Create/Register) 
router.post("/adminregister", AdminController.regAdmin);
router.post("/staffregister", AdminController.regStaff);
router.post("/docregister", AdminController.regDoc);

router.post("/deptregister", AdminController.regDept);





//GET (Read/View) 
router.get("/showalldoc", AdminController.showalldoc);
router.get("/showalldept", AdminController.showAllDept);
router.get("/showallstaff", AdminController.showAllStaff);
router.get("/getdeptdetails/:id", AdminController.getDeptDetails);
router.get("/getstaffdetails/:id", AdminController.getStaffDetails);
router.get("/getdocdetails/:id", AdminController.getdocdetails);


//PUT (Update/Edit) 
router.put("/updatedoc/:id", AdminController.updatedoc);
router.put("/updatedept/:id", AdminController.updateDept);
router.put("/updatestaff/:id", AdminController.editStaff);




//DELETE (Remove) 
router.delete("/deletedept/:id", AdminController.Deletedept);
router.delete("/deletedoc/:id", AdminController.deleteStaff);
router.delete("/deletestaff/:id", AdminController.deleteStaff);
router.delete("/deletedoc/:id", AdminController.Deletedoc);


module.exports = router;