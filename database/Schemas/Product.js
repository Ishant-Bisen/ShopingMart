const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    images: {
        type: [String], 
        required: true
    },
    rating: {
        type: Number
    },
    category: { 
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    cost: {
        type: Number, 
        required: true
    },
    details: {
        type: [mongoose.Schema.Types.Mixed], 
        required: true  
    },
    highlights: {  
        type: [String] 
    },
    paymentOptions: {  
        type: [String] 
    },
    sellers: {
        type: [Object] 
    }
});

module.exports = mongoose.model("Product", productSchema);
