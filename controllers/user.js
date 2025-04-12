const User = require('../models/user.js')

exports.getAllUsers = async (req, res) => {
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

exports.saveUser = async (req,res) => {
    try {
        const {fname,lname,mobile} = req.body;
        
        const user = new User({
            fname,lname,mobile
        })

        await user.save();
        
        return res.status(200).json({
            success: true,
            message: "Users saved successfully",
            data:user
        });
    }catch (err) {
        console.error("Error saving users:", err);
        return res.status(500).json({
            success: false,
            message: "An error occurred while saving the user",
        });
    }
}

exports.getUserById = async(req,res) => {
    try{
        const id = req.params.id;
        const user = await User.findById(id);

        if(!user) {
            return res.status(404).json({
                success:false,
                message:"User does not exist"
            })
        }
        
        return res.status(200).json({
            success:true,
            message:"User fetched successfully",
            data:user
        })
    }catch (err) {
        console.log("Error fetching user:", err);
        return res.status(500).json({
            success:false,
            message:"Error fetching User details"
        })
    }
}

exports.updateUser = async (req,res) => {
    try {
        const userId = req.params.id;
        const updatedDetails = req.body;

        const updatedUser = await User.findByIdAndUpdate(userId,updatedDetails,{
            new: true, // Return the updated document
            runValidators: true, // Run schema validators on the updated fields
        });
        
        return res.status(200).json({
            success:true,
            message:"User updated successfully",
            data:updatedUser
        })
    }catch (err) {
        console.log("Error updating user:", err);
        return res.status(500).json({
            success:false,
            message:"error while updating user"
        })
    }
}

exports.deleteUser = async (req,res) => {
    try {
        const userId = req.params.id;
        const deletedUser = await User.findByIdAndDelete(userId);

        if(!deletedUser) {
            return res.status(404).json({
                success:false,
                message:"User does not exist"
            })
        }
        
        return res.status(200).json({
            success:true,
            message:"User deleted successfully",
            data:deletedUser
        })
    }
    catch (err) {
        console.log("Error deleting user:", err);
        return res.status(500).json({
            success:false,
            message:"error while deleting user"
        })
    }
};