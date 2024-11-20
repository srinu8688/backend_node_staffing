const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  fullName: { 
    type: String, 
    required: true 
},
  resume: { 
    type: String, 
    required: false
},
  vendor: { 
    type: String,
    required: true 
},
  technology: {
    type: [{
        type: String,
        enum: ['Reactjs', 'Nodejs', 'Php', 'Javascript']
    }]
}
});

module.exports = mongoose.model('Resource', resourceSchema);
