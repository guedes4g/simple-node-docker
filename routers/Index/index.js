// NODE MODULES
const express = require("express");
const router = express.Router();
const path = require("path")

router.get('/', function(req, res){ 
    console.log(path.resolve(__dirname + "/../../pages/index.html"))
    res.sendFile(path.resolve(__dirname + "/../../pages/index.html"))
})

module.exports = router