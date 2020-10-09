const express = require("express");
const mongoose = require("mongoose");;
const ejs = require("ejs");
const expressLayouts = require("express-ejs-layouts");

const app = express();

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