const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
   id:{
    type: Number,
    required: true
   }, 
   DateCreated:{
    type: Date,
    required: true,
    default: Date.now
   }
})

module.exports = mongoose.model('User', userSchema)