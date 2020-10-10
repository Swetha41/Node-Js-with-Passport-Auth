const express = require("express");
const router = express.Router();

//Login page
router.get("/login", (req, res) => {
    res.render("login");
});

//Register page
router.get("/register", (req, res) => {
    res.render("register");
});

//Register handle
router.post("/register", (req, res) => {
    const { name, email, password, password2 } = req.body;
    let errros = [];
    
    //check for all the fields filled
    if(!name || !email || !password || !password2){
        errros.push({ msg: "Please fill in all the fields" });
    }

    //passwords match
    if(password !== password2){
        errros.push({ msg: "Password and confirm password should be same" });
    }

    //check password length
    if(password.length < 6){
        errros.push({ msg: "password length should be atleast 6 characters"});
    }

    if(errros.length > 0){
        res.render("register", {
            errros,
            name,
            email,
            password,
            password2
        });
    }
    else{
        res.send("pass");
    }

});

module.exports = router;