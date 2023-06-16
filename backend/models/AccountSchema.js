const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema({
    Name:{
        type:String,
        require: true,
    },
    Email:{
        type:String,
        require:true,

    },
    Password:{
        type:String,
        require:true,
    },
    Branch:{
        type:String,
        require:true,
    },
    Section:{
        type:Number,
        require:true,
    },
    Year:{
        type:Number,
        require:true,
    },
    Unit:{
        type:Number,
        require:true,
    },

});

const AccountModel = mongoose.model("users",AccountSchema);
module.exports = AccountModel;