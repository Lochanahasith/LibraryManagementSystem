const express = require('express');
const router = express.Router();

router.get("/register",function(req,res){
    res.send("Welcome to the register page ");
});
router.get("/test",function(req,res){
    res.send("Testing works");
});

router.get("",function(req,res){
    res.send("Hello users hahah");
});



module.exports = router;
