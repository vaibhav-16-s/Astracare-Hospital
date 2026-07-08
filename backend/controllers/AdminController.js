const admin = require("../models/Admin");
const user = require("../models/User");
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