// Import required dependencies
const express = require('express');
const cors = require('cors');

// Create an Express application
const app = express();
app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
}));

// Define a route for the root URL
app.get('/test', (req, res) => {
  res.json({msg:"test sucessfull"}); // Send a simple response
});

// Define the port to listen on
const port = process.env.PORT || 4444;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
