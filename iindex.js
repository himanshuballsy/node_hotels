const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./db'); // This should connect to MongoDB // This should correctly import your Person model

// Middleware to parse JSON data
app.use(bodyParser.json());




// Import the router and mount it
const logokaroutes = require('./router/route'); // Correctly points to the router fil
app.use('/buildo', logokaroutes);

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
