const mongoose = require('mongoose');
//const bcrypt  = require('bcryptjs');
const schema = mongoose.Schema;


const userSchema = new schema({

  /*  lab:{type:String,required:true},*/
    lab:{type:String,required:true}, 
    date:{type:String,required:true},
    timefrom:{type:String,required:true},
    timeto:{type:String,required:true},
    reason:{type:String,required:true}

});

const Reservation = module.exports = mongoose.model("reservation",userSchema);

module.exports.saveReservation = function (rsrvdata,callback)  {

          
  rsrvdata.save(callback);  
        
};




module.exports.findResv = function (callback) {

  Reservation.find(callback);
};

module.exports.deleteResv = function(_id, callback){

  const query = {_id:_id};

  Reservation.remove(query,callback);
};
