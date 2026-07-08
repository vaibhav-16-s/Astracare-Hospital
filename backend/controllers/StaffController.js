const staff = require("../models/Staff");
const user=require("../models/User");
const bcrypt=require("bcrypt");

exports.regStaff = async (req, res) => {
    try {
        // old way to save data
        // const doctor = new Doctor(req.body);
        // await doctor.save();

        //new way to save data
        const staffData = await staff.create({
            name: req.body.name,
            email: req.body.email,
            contact: req.body.contact,
            address: req.body.addr,
            gender: req.body.gender,
            dateOfBirth: req.body.dob,
            dept: req.body.dept,
            status: req.body.status,
            role:req.body.role
         
        });

        // Hash password
        const hashPass=await bcrypt.hash(req.body.pass,10);

        // Save login credentials
        const userData=await user.create({
            email:req.body.email,
            password:hashPass,
            userId:staffData._id,
            role:req.body.role
        })
        res.json({
            success: true,
            message: "Staff Registered Successfully",
            staffData:{
                 ...staffData.toObject(),
                createdAt: staffData.createdAt.toLocaleString("en-IN"),
                updatedAt: staffData.updatedAt.toLocaleString("en-IN")
            }
        });
    } catch (e) {
        console.log(e); 
        res.status(500).json({
        success: false,
        message: e.message
    });
    }
}


