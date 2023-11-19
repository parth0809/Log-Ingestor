const mongoose = require('mongoose');
let Schema=require('mongoose').Schema;



let logs=new Schema({
    level:{type :String},
    message:{type:String},
    resourceId:{type:String},
    timestamp:{type: Date},
    traceId:{type:String},
    spanId:{type:String},
    commit:{type:String},
    metadata:{
        parentResourceId:{type:String}//Schema
    }
});


let Log=new mongoose.model('Log',logs);

module.exports=Log;