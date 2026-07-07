const doctor = require("../models/Doctor");
const user=require("../models/User");
const bcrypt=require("bcrypt");

exports.regDoc = async (req, res) => {
    try {
        // old way to save data
        // const doctor = new Doctor(req.body);
        // await doctor.save();

        //new way to save data
        const docData = await doctor.create({
            name: req.body.name,
            email: req.body.email,
            contact: req.body.contact,
            address: req.body.addr,
            gender: req.body.gender,
            dateOfBirth: req.body.dob,
            department: req.body.dept,
            status: req.body.status,
            qualification: req.body.qual,
         
        });

        // Hash password
        const hashPass=await bcrypt.hash(req.body.pass,10);

        // Save login credentials
        const userData=await user.create({
            email:req.body.email,
            password:hashPass,
            userId:docData._id,
            role:"Doctor"
        })

        res.json({
            success: true,
            message: "Doctor Registered Successfully",
            docData:{
                 ...docData.toObject(),
                createdAt: docData.createdAt.toLocaleString("en-IN"),
                updatedAt: docData.updatedAt.toLocaleString("en-IN")
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


