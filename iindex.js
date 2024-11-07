const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./db'); // This should connect to MongoDB // This should correctly import your Person model
require('dotenv').config();
// Middleware to parse JSON data
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000



// Import the router and mount it
const logokaroutes = require('./router/route'); // Correctly points to the router fil
app.use('/person', logokaroutes);


// Start the server on port 3000
//aaja bilo ranni
app.listen(PORT, () => {
  console.log('Server is running on port 3000');
});
