const mongoose = require("mongoose")
const {productSchema} = require("../Schemas/Product")
const cartSchema = new mongoose.Schema({
    productId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Product",
        require : true
    },
    quantity : {
        type : Number,
        require : true,
        min : 1
    }
})
module.exports = mongoose.model("cartModal" , cartSchema);