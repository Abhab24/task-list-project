const mongoose = require('mongoose');

//define the schema for documents 
const TaskSchema = new mongoose.Schema({
    name:String,completed:Boolean
})

//create the model using schema
module.exports= mongoose.model('Task',TaskSchema);