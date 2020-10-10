const express = require("express");
const mongoose = require("mongoose");;
const ejs = require("ejs");
const bcrypt = require("bcrypt");

const app = express();

const users = [];

//DB config
//const db = require("./config/keys").MongoURI;
//connect to Mongo
//mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
//.then(() => console.log("MongDB Connected"))
//.catch(err => console.log(err));

//EJS
app.set("view engine", "ejs");

//middlewares
app.use(express.urlencoded({extended: false}));

app.get("/", (rwq, res) => {
    res.render("index", {name: "swetha"});
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.post("/register", (req, res) => {

});

app.get("/register", (req, res) => {
    res.render("register");
});

app.post("/register", async(req, res) => {
  try{
      const hashedpassword = await bcrypt.hash(req.body.password, 10);
      users.push({
          id: Date.now().toString(),
          name: req.body.name,
          email: req.body.email,
          password: hashedpassword
      })
      res.redirect("/login")
    }
    catch{
        res.redirect("/register")
    }
    console.log(users);

});



const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`)
});