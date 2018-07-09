
const express = require('express');
const router = express.Router();
const User = require('../models/user');

const jwt = require('jsonwebtoken');
const config = require('../config/database');
const passport =require('passport');



router.post("/register",function(req,res){
    
    const newUser = new User({

        username:req.body.username,
        name:req.body.name,
        post:req.body.post,
        email:req.body.email,
        password:req.body.password
    });

    User.saveUser(newUser,function (err,user) {
        if(err){
            res.json({state:false,msg:"data not inserted"});
        }
        if(user){
            res.json({state:true,msg:"data  inserted"});
        }

    });



});

router.post("/login",function(req,res){
   const email = req.body.email;
   const password = req.body.password;

   User.findByEmail(email,function (err,user) {
    if(err) throw err;
   // console.log(user);
    if(!user){
        res.json({state:false,msg:"No user found"});
        return false;
    }

    User.passwordCheck(password,user.password,function (err,match) {
        if (err) throw  err;

            if (match){

                userdet={
                    _id:user._id,
                    username:user.username,
                    name:user.name,
                    post:user.post,
                    email:user.email,
                    password:user.password
                };
              //  const token = jwt.sign(user.toJSON(), config.secret,{expiresIn:86400*3});
                const token = jwt.sign(userdet, config.secret,{expiresIn:86400*3});
                res.json(
                    {
                        state:true,
                        //token:"JWT " + token,
                        token:token,
                        user:{
                            id:user._id,
                            name:user.name,
                            username:user.username,
                            post:user.post,
                            email:user.email


                        }
                    }
                    );
            };
    });

   });

});
/*
router.post('/profile', passport.authenticate('jwt', {session:false}), function(req, res) {
    console.log("doen");
    //res.redirect('/');
    res.json({User:req.user});
});

*/
router.get('/profile', verifyToken, (req,res)=>{
    jwt.verify(req.token, config.secret, function(err, myData){
        if(err){
            res.json({status:"Access denied"});
        }else{
            res.json({
                status:"Access granted",
                data:myData

            });
        }
    })
});

function verifyToken(req, res, next){
    if(typeof(req.headers['authorization'])!= 'undefined' && req.headers['authorization'] != 'undefined'){
        var userToken = req.headers['authorization'];
        //console.log(myToken);

        
        if(userToken != 'undefined'){
            req.token = userToken;
            next();
        }else{
            res.json({msg:"Unauthorized Request.."});
        }
    }else{
        res.json({msg:"Undefined Request.."});
    }
    //console.log();
    
   // console.log(userToken);
}


module.exports = router;

