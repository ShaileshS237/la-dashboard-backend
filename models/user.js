const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    mobile: {
        type: String,
        unique: true,
        required: true,
        validate: {
            validator: function (v) {
                return /^\d{10}$/.test(v);
            },
            message: (props) => `${props.value} is not a valid phone number!`,
        },
    },
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "user",
    },
    isActive: {
        type: Boolean,
        default: true,
        required: false,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
    isOnline: {
        type: Boolean,
        default: true,
        required: false,
    },
    email: {
        type: String,
        required: false,
    },
    fcmToken: {
        type: String,
        required: false,
    },
    userName: {
        type: String,
        required: false,
    },
    address: { type: String },
    city: { type: String },
    pincode: { type: String },
    location: {
        type: {
            type: String,
            enum: ["Point"], // GeoJSON format
            default: "Point",
        },
        coordinates: {
            type: [Number], // [longitude, latitude]
            index: "2dsphere", // Enable geospatial queries
        },
    },
    dateOfRegistration: {
        type: Date,
        default: Date.now,
    },
    lastEdit: {
        type: Date,
    },
    lastLogin: { type: Date },
    loginHistory: [
        {
            ipAddress: { type: String },
            loginTime: { type: Date, required: true },
            logoutTime: { type: Date },
        },
    ],
    imageForAvatar: {
        type: String,
    },
    accessPermissions: {
        bloodDonation: {
            type: Boolean,
            default: true,
        },
        buyAndSell: {
            type: Boolean,
            default: true,
        },
        post: {
            type: Boolean,
            default: true,
        },
    },
});


module.exports = mongoose.model("User", userSchema);