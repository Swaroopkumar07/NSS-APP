const mongoose = require("mongoose");

const DocumentSchema = new mongoose.Schema({
    DocumentName:{
        type:String,
        require:true,
    },
    DocumentLink:{
        type:String,
        require:true,
    }
});

const DocumentModel = mongoose.model("documents",DocumentSchema);
module.exports=DocumentModel;