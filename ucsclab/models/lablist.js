const mongoose = require('mongoose');
//const bcrypt  = require('bcryptjs');
const schema = mongoose.Schema;


const userSchema = new schema({

    lab:{type:String,required:true},
    building :{type:String,required:true},
    capacity:{type:String,required:true},
});

const LabList = module.exports = mongoose.model("lab",userSchema);


/*
module.exports.saveLab = function (rsrvdata,callback)  {

          
  rsrvdata.save(callback);  
        
};

*/

module.exports.findLabs = function (callback) {

    LabList.find(callback);
};

module.exports.deleteLab = function(_id, callback){

    const query = {_id:_id};
  
    LabList.remove(query,callback);
  };