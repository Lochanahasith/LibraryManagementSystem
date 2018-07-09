
const express = require('express');
const router = express.Router();
const Labs = require('../models/lablist');

const jwt = require('jsonwebtoken');
const config = require('../config/database');
const passport =require('passport');


router.post('/show', (req,res)=>{
    Labs.findLabs(function(err,lab){
        if (err) throw err;
        if(lab){
            res.json({
                Lab_details:lab
            });
        }
    });
});

router.post("/delete",function (req,res){
   
    const id = req.body._id;
   
    Labs.deleteLab(id, function(err,lab){
        //mystate:boolean;
        if(err){
            res.json({
                status:false
            })
            //console.log('Book deletion failed..');
        }if(lab){
            res.json({
                status:true
            })
           // console.log('Book deleted successfully..');
        }
    });
   
 });


module.exports = router;