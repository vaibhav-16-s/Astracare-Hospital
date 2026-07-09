const express =require("express");
const PatientController=require("../controllers/patient/PatientController");

const router = express.Router();

router.post("/register",PatientController.regPatient);


module.exports=router;