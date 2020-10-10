const express = require("express");
const mongoose = require("mongoose");;
const ejs = require("ejs");

const app = express();

//DB config
const db = require("./config/keys").MongoURI;

//connect to Mongo
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("MongDB Connected"))
.catch(err => console.log(err));

//EJS
app.set("view engine", "ejs");

app.get("/", (rwq, res) => {
    res.render("index", {name: "swetha"})
});

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`)
});