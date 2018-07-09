
const express = require('express');
const router = express.Router();
const Reservation = require('../models/reservation');

const jwt = require('jsonwebtoken');
const config = require('../config/database');
const passport =require('passport');


router.post("/savereservation",function(req,res){
    
    const newResv = new Reservation({
        
        lab:req.body.lab,
       
        date:req.body.date,
        timefrom:req.body.timefrom,
        timeto:req.body.timeto,
        reason:req.body.reason
    });

    Reservation.saveReservation(newResv, function (err,resv) {
        if(err){
            res.json({state:false,msg:"data not inserted"});
        }
        if(resv){
            res.json({state:true,msg:"Reservation  inserted"});
        }

    });



});



router.post('/showRes', (req,res)=>{
    Reservation.findResv(function(err,resvtn){
        if (err) throw err;
        if(resvtn){
            res.json({
                Reservation_details:resvtn
            });
        }
    });
});

router.post("/delete",function (req,res){
   
    const id = req.body._id;
   
    Reservation.deleteResv(id, function(err,book){
        //mystate:boolean;
        if(err){
            res.json({
                status:false
            })
            //console.log('Book deletion failed..');
        }if(book){
            res.json({
                status:true
            })
           // console.log('Book deleted successfully..');
        }
    });
   
 });
 
 







module.exports = router;