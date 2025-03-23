const mongoose = require('mongoose');
require("dotenv").config();

const uri = process.env.MONGOOSE_URL;
console.log(uri);
// Connect to MongoDB Atlas

// using async and await because mongoose.connect return a promise.
async function connectdb(){
    try{
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB Atlas')
    }catch(err){
        console.error(err);
    }
}

module.exports = connectdb