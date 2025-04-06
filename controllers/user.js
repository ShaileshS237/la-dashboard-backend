import User from '../models/user.js';

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        return res.status(200).json({
            success: true,
            message: "Users fetched successfully",
            data: users,
        });
    } catch (err) {
        console.error("Error fetching users:", err);
        return res.status(500).json({
            success: false,
            message: "An error occurred while fetching users",
        });
    }
};