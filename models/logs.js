const mongoose = require('mongoose');

// Create the schema
const logSchema = new mongoose.Schema({
    
    title: String,
    entry: String,
  
    shipIsBroken: {
        type: Boolean,
        default: true
    }
},

{timestamps: true}
)
// create the model
const logs = mongoose.model('logs', logSchema);
module.exports = logs;