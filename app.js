const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define routes for specific HTML files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/rewards', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'rewards.html'));
});

app.get('/claim', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'claim.html'));
});

app.get('/roadmap', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'roadmap.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
