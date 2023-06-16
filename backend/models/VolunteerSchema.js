const mongoose = require("mongoose");

const volunteerSchema = new mongoose.Schema({
    Year:{
        type:String,
        require:true,
    },
    VoulList:{
        type:String,
        require:true,
    }
});

const VolunteersModel = mongoose.model("volunteer",volunteerSchema )
module.exports = VolunteersModel;