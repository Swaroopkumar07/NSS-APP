const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
    EventName:{
        type:String,
        require:true,
    },
    EventLink:{
        type:String,
        require:true,
    }
});

const EventModel = mongoose.model("events",EventSchema)
module.exports = EventModel;