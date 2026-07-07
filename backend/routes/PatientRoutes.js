const express =require("express");
const PatientController=require("../controllers/patientController");

const router = express.Router();

router.post("/register",PatientController.regPatient);


module.exports=router;