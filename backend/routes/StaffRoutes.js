const express =require("express");
const StaffController=require("../controllers/StaffController");

const router = express.Router();

router.post("/register",StaffController.regStaff);


module.exports=router;