const admin = require("../../models/Admin");
const doctor = require("../../models/Doctor");
const staff = require("../../models/Staff");
const user = require("../../models/User");
const bcrypt = require("bcrypt");

exports.regAdmin = async (req, res) => {
    try {

        // Create admin profile
        const adminData = await admin.create({
            name: req.body.name,
            email: req.body.email,
            contact: req.body.contact,
            address: req.body.address
        });

        // Hash password
        const hashPass = await bcrypt.hash(req.body.pass, 10);

        // Save login credentials
        const userData = await user.create({
            email: req.body.email,
            password: hashPass,
            userId: adminData._id,
            role: "Admin"
        });

        res.json({
            success: true,
            message: "Admin Registered Successfully",
            adminData: {
                ...adminData.toObject(),
                createdAt: adminData.createdAt.toLocaleString("en-IN"),
                updatedAt: adminData.updatedAt.toLocaleString("en-IN")
            }
        });

    } catch (e) {

        console.log(e);

        res.status(500).json({
            success: false,
            message: e.message
        });

    }
};




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
        const hashPass = await bcrypt.hash(req.body.pass, 10);

        // Save login credentials
        const userData = await user.create({
            email: req.body.email,
            password: hashPass,
            userId: docData._id,
            role: "Doctor"
        })
        res.json({
            success: true,
            message: "Doctor Registered Successfully",
            docData: {
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
};



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
            role: req.body.role

        });

        // Hash password
        const hashPass = await bcrypt.hash(req.body.pass, 10);

        // Save login credentials
        const userData = await user.create({
            email: req.body.email,
            password: hashPass,
            userId: staffData._id,
            role: req.body.role
        })
        res.json({
            success: true,
            message: "Staff Registered Successfully",
            staffData: {
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
};


exports.showalldoc = async (req, res) => {
    try {
        const docData = await doctor.find();
        res.send(
            docData
        )
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

exports.getdocdetails = async (req, res) => {
    try {
        const Did = req.body.id
        const docData = await doctor.findOne({ _id: Did })
        res.json({
            success: true,
            docData
        });
    }
    catch (error) {
        console.log(error);
        res.json({ error: "Server Error: can't fetch details" });
    }
}


exports.updatedoc = async (req, res) => {
    try {
        const id = req.body.id;
        const nm = req.body.name
        const em = req.body.email
        const ct = req.body.contact
        const add = req.body.addr
        const gd = req.body.gender
        const dob = req.body.dob
        const dept = req.body.dept
        const st = req.body.status
        const qual = req.body.qual
        const filter = { _id: id };
        const update = { department: dept, name: nm, email: em, contact: ct, address: add, gender: gd, dateOfBirth: dob, status: st, qualification: qual }

        const result = await doctor.findOneAndUpdate(filter, update, { returnDocument: "after" });

        res.json({ message: "data saved Successfully" })
    }
    catch (error) {
        console.log(error);
        res.json({ message: "failed to update data" });
    }
}

exports.Deletedoc = async (req, res) => {
    try {
        const id = req.body.id;
        const result = await doctor.deleteOne({ _id: id }).then(function () {
            user.deleteOne({ _id: id }).then(function () {
                res.json({ msg: "Data and Login deleted Successfully" })
            }).catch(function (e) {
                res.json({ msg: "data deleted but login deltion failed" });
            });
        });
    }
    catch (error) {
        console.log(error);
        res.json({ error: "failed to delete the doctor" });
    }
}


