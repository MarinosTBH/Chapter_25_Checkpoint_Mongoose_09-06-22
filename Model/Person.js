//INSTRUCTION : Create a person
const mongoose = require('mongoose') 

const personSchema = new mongoose.Schema({

    //constructor

    name : {
        type: String,
        required : true, //validator required
        unique:true
    },
    age : {
        type: Number,
        min : 18,   // validation
        max : 99,   // validation
    },
    favFood: [String],
    createdAt : {
        type : Date,
        immutable : true, // with immutable FLAG we canno't change this 
        default : ()=> Date.now(), //validator Default 
    }
});


module.exports = mongoose.model('Person', personSchema) 