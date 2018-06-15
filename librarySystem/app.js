const express = require('express');
const path = require('path');
const app = express();
const port =process.env.PORT || 3000;
const user = require('./routes/users')
app.use(express.static(path.join(__dirname,"public")));

app.use('/user',user);

app.listen(3000,function (){
    console.log("listening to port "+port);
});
