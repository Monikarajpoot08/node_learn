const mongoose = require('mongoose');
// in this file we will define the schema for the person collection in the database
// schema is a blueprint for the data that we want to store in the database
// it defines the structure of the document that we want to store in the collection
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true  
    },
    age: {
        type: Number
    },
    work : {
        type: String,
        enum: ['chef', 'manager', 'waiter', 'cleaner'],
        required: true
    },
    mobile: {
        type: String,
        required: true, 
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address:
    {
        type: String
    },
    salary: {
        type: Number,
        required: true
    }
});
//schema is ready
// make model from the schema
// now we will create a model for the person collection using the schema that we have defined
const Person = mongoose.model('Person', personSchema);
module.exports = Person;