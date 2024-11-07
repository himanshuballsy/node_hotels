const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number
  },
  work : {
    type : String,
    enum : ['bawarchi' , 'companykamaalik' , 'naukar'] ,
    required : true
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
  address: {
    type: String
  },
  salary: {
    type: Number,
    required: true
  }
});
//created model
const person = mongoose.model('person', personSchema);

module.exports = person;
