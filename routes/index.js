const express = require("express");
const router = express.Router();

//intial page
router.get("/", (req, res) => {
    res.render("welcome");
})

module.exports = router;