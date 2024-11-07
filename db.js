
const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:27017/hotels';

mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on('connected', () => {
    console.log('ho gaya bhai bhai jai baba kii');
});

db.on('error', () => {
    console.log('sorry bhaii error aa gaya');
});

db.on('disconnected', () => {
    console.log('sorry bhaii disconnect ho gaya');
});

module.exports = db;
