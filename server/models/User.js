
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({


    profileimg :{
        type:String
    },

    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    },

    about:{
        type:String,
    },

    date:{
        type:Date,
        default:date.now()
    }

});


module.exports = mongoose.model('User', UserSchema);