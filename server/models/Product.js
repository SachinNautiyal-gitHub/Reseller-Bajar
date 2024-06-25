

const mongoose = require('mongoose');


const ProductSchema  = new mongoose.Schema({
    

   image :{
    type:String,
    required:true
   },

    category:{
        type:String,
        required : true
    },

    Brandname:{
        type:String,
        required:true
    },

    productname:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required : true
    },

    buyingyear:{
        type:Number,
        required:true
    },

    price:{
        type:Number,
        required:true
    }



});


module.exports = mongoose.model('Product', ProductSchema);