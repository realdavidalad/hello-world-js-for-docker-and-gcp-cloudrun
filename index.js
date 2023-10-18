const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS for the app
app.use(cors());

// Define a route that responds with "Hello, World!"
app.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

app.get('/index', (req, res) => {
  res.json({ message: 'This is index page' });
});

// Start the server
const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
