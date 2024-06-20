const mongoose = require('mongoose');

//define the schema for documents 
const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'must provide name'],
        trim:true,
        maxlength:[20,'name cant be more than 20 characters']
    },
    completed:{
        type:Boolean,
        default:false,
    }
})

//create the model using schema
module.exports= mongoose.model('Task',TaskSchema);