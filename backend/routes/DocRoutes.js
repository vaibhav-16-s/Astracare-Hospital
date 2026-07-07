const express =require("express");
const DocController=require("../controllers/DocController");

const router = express.Router();

router.post("/register",DocController.regDoc);


module.exports=router;