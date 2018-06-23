const express = require('express');
const path = require('path');
const mongoose =require('mongoose');
const app = express();
const port =process.env.PORT || 3000;
const config = require('./config/database');
const user = require('./routes/users');

const connection = mongoose.connect(config.database);
if(connection){
    console.log("Runs in port 2111");
}else{
    console.log("Database not connected")
}



app.use(express.static(path.join(__dirname,"public")));

app.use('/user',user);

app.listen(3000,function (){
    console.log("listening to port "+port);
});
