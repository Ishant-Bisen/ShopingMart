const mongoose = require("mongoose");

const userSignInSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    permissions: {
        type: [Number],  
        required: true
    }
});

module.exports = mongoose.model("UserSignIn", userSignInSchema);
