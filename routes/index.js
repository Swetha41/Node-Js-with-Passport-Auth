const express = require("express");
const router = express.Router();

//intial page
router.get("/", (req, res) => {
    res.send("hello world");
})

module.exports = router;