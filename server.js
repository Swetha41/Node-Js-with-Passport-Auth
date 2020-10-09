const express = require("express");
const mongoose = require("mongoose");;
const ejs = require("ejs");
const expressLayouts = require("express-ejs-layouts");

const app = express();

//DB config
const db = require("./config/keys").MongoURI;

//connect to Mongo
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("MongDb Connected"))
.catch(err => console.log(err));
//EJS
app.use(expressLayouts);
app.set("view engine", "ejs");

//Routes
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`)
});