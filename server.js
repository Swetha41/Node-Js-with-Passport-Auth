const express = require("express");
const mongoose = require("mongoose");;
const ejs = require("ejs");

const app = express();

//Routes
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));

mongoose.connect(process.env.MONGO_URL, (err) =>{
    if(err){
        console.log(err)
    }
    else{
        console.log("DB connceted")
    }
});

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`)
});