const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
   
    },
    quantity:{
        type:Number,
        required:true
    },
    supplier:{
        type:String,    
        required:true
    },

    supplier_email:{
        type:String,    
        required:true
    }
   
});

module.exports = mongoose.model('Stores',storeSchema);