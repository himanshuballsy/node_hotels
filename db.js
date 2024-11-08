const mongoose = require('mongoose');
require('dotenv').config();

 const mongoURL = process.env.MONGODB_URL_LOCAL
//const mongoURL = process.env.MONGODB_URL

mongoose.connect(mongoURL);

const db = mongoose.connection;


db.on('connected', () => {
    console.log('connect ho gaya bhai jai baba kii');
});

db.on('error', () => {
    console.log('sorry bhaii error aa gaya');
});

db.on('disconnected', () => {
    console.log('sorry bhaii disconnect ho gaya');
});

module.exports = db;
