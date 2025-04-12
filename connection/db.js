const mongoose = require("mongoose");
const uri = process.env.MONGODB_URL;

mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to MongoDB successfully.");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });
