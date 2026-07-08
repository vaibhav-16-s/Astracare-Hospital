const patient = require("../models/Patient");
const bcrypt = require("bcrypt");
const user = require("../models/User");

exports.regPatient = async (req, res) => {
    try {
        const patientData = await patient.create(req.body);
        const hashPass = await bcrypt.hash(req.body.password, 10);
        const userData = await user.create({
            email: req.body.email,
            password: hashPass,
            userId: patientData._id,
            role: "Patient"
        });
        res.json({
            success: true,
            message: "Patient Registerd Successfully",
            patientData: {
                ...patientData.toObject(),
                createdAt: patientData.createdAt.toLocaleString("en-IN"),
                updatedAt: patientData.updatedAt.toLocaleString("en-IN")
            }
        })
    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: e.message
        })
    }
}