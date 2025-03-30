const express = require("express");
require("dotenv").config()
const mongooseConnect = require("./database/db.js") 
const authentication = require("./routes/Authentication.js"); 
const userRoute = require("./routes/UserRoutes.js");
const adminRoute = require("./routes/Admin.js");
const app = express();
mongooseConnect();

app.use(express.json());
app.use("/auth", authentication);

app.get("/", (req,res) =>{
    res.send("Backend is running!");
})

app.use("/admin" , adminRoute)

app.use("/user", userRoute);

const port = process.env.PORT;

app.listen(port , ()=>{
    console.log(`Server is running in the port ${port}` )
})