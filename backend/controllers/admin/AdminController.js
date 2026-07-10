const admin = require("../../models/Admin");
const dept = require("../../models/Dept");
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

exports.regDept = async (req, res) => {
    try {
        const doc = await doctor.findOne({
            email: req.body.headDoctorEmail
        });
        if (!doc) {
            return res.json({
                success: false,
                message: "Doctor not found."
            });
        }
        await dept.create({
            name: req.body.name,
            description: req.body.description,
            headDoctor: doc._id,
            location: req.body.location,
            status: req.body.status
        });
        res.json({
            success: true,
            message: "Department Registered Successfully"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message
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
        const Did = req.params.id
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
        const id = req.params.id;
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
        const id = req.params.id;
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
};

exports.showAllDept = async (req, res) => {
    try {
        const departments = await dept.find()
            .populate("headDoctor", "name email");

        const deptData = await Promise.all(
            departments.map(async (department) => {
                const totalDoctors = await doctor.countDocuments({
                    department: department.name
                });
                const totalStaff = await staff.countDocuments({
                    department: department.name
                });
                return {
                    ...department.toObject(),
                    totalDoctors,
                    totalStaff
                };
            })
        );
        res.json(deptData);

    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

exports.getDeptDetails = async (req, res) => {
    try {
        const deptData = await dept.findById(req.params.id)
            .populate("headDoctor", "name email");
        res.json({
            success: true,
            deptData
        });
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

exports.updateDept = async (req, res) => {
    try {
        const doc = await doctor.findOne({
            email: req.body.headDoctorEmail
        });
        const updateData = {
            name: req.body.name,
            description: req.body.description,
            location: req.body.location,
            status: req.body.status
        };
        if (doc) {
            updateData.headDoctor = doc._id;
        }
        await dept.findByIdAndUpdate(
            req.params.id,
            updateData
        );
        res.json({
            message: "Department Updated Successfully"
        });
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

exports.Deletedept = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await dept.deleteOne({ _id: id }).then(function () {
            res.json({ msg: "Data deleted Successfully" })
        }).catch(function (e) {
            res.json({ msg: "data deltion failed" });
        });
    }
    catch (error) {
        console.log(error);
        res.json({ error: "failed to delete the doctor" });
    }
};


exports.showAllStaff = async (req, res) => {
    try {
        const staffData = await staff.find();
        res.json(staffData);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


exports.getStaffDetails = async (req, res) => {
    try {
        const staffId = req.params.id;

        const staff = await Staff.findById(staffId);

        if (!staff) {
            return res.status(404).json({
                success: false,
                message: "Staff not found"
            });
        }

        res.status(200).json({
            success: true,
            data: staff
        });

    }
    catch(error) {
        console.log(error);

        res.status(500).json({
            success:false,
            message:error.message
        });
    }
};

exports.editStaff = async (req, res) => {
    try {
        const staffId = req.params.id;
        const updatedStaff = await Staff.findByIdAndUpdate(staffId,
            {
                name: req.body.name,
                email: req.body.email,
                contact: req.body.contact,
                address: req.body.address,
                gender: req.body.gender,
                dateOfBirth: req.body.dateOfBirth,
                dept: req.body.dept,
                status: req.body.status,
                role: req.body.role
            }, { new: true }
        );

        if (!updatedStaff) {
            return res.status(404).json({
                success: false,
                message: "Staff not found"
            });
        }
        await User.findOneAndUpdate({ userId: staffId }, { email: req.body.email, role: req.body.role });
        res.status(200).json({
            success: true,
            message: "Staff Updated Successfully",
            data: updatedStaff
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

exports.deleteStaff = async (req, res) => {
    try {
        const staffId = req.params.id
        const staffData = await staff.findById(staffId);

        if (!staffData) {
            return res.status(404).json({
                success: false,
                message: "Staff not found"
            });
        }


        await User.findOneAndDelete({
            userId: staffId
        });
        await Staff.findByIdAndDelete(staffId);

        res.json({
            success: true,
            message: "Staff Deleted Successfully"
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

exports.adminDashboard = async (req, res) => {
    try {

        const totalDoctors = await doctor.countDocuments();

        const totalDepartments = await dept.countDocuments();

        //const totalPatients = await patient.countDocuments();

        const totalStaff = await staff.countDocuments();

        const totalReceptionists = await staff.countDocuments({
            role: "Receptionist"
        });

        const totalNurses = await staff.countDocuments({
            role: "Nurse"
        });

        const totalLabTechnicians = await staff.countDocuments({
            role: "Lab Technician"
        });

        res.json({
            totalDoctors,
            totalDepartments,
            //totalPatients,
            totalStaff,
            totalReceptionists,
            totalNurses,
            totalLabTechnicians
        });

    }
    catch (error) {

        console.log(error);

        res.status(500).json({
            message: error.message
        });

    }
};