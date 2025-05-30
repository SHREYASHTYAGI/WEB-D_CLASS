const express = require('express');
const path = require('path');

const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Sample data
const items = [
  { id: 1, name: 'Item One', description: 'This is item one.' },
  { id: 2, name: 'Item Two', description: 'This is item two.' }
];

// Home route
app.get('/', (req, res) => {
  res.render('index', { title: 'EJS App',  message: 'Hello from EJS!' });
});

// Add item form
app.get('/add', (req, res) => {
  res.render('add');
});

// Handle form submission
app.post('/add', (req, res) => {
  const { name, description } = req.body;
  items.push({ id: items.length + 1, name, description });
  res.redirect('/');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});