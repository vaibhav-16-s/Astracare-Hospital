const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.loginUser = async (req, res) => {
    try {

        const { email, pass } = req.body;

        // Check if email exists
        const user = await User.findOne({ email });

        if (!user) {
            return res.json({
                error: "Invalid user"
            });
        }

        // Compare password
        const isMatch = await bcrypt.compare(pass, user.password);

        if (!isMatch) {
            return res.json({
                error: "Invalid user"
            });
        }

        // Login successful
        return res.json({
            message: "Login successful",
            role: user.role,
            userId: user.userId
        });

    } catch (err) {
        console.error(err);

        res.status(500).json({
            error: "Server Error"
        });
    }
};