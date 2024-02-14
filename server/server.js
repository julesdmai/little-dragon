const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

// Import controllers
const userController = require('./controllers/userController');
const tokenController = require('./controllers/tokenController');

// Port we are currently serving
const PORT = 3000;

const app = express();

// Allows Express application to parse JSON payloads
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Connect to MongoDB
mongoose.connect('mongodb://localhost/testdb');


// Route '/' GET
app.get('/', (req, res) => {
    res.send('Hello Earth');
})

// Route '/register' GET
// Route '/register' POST
app.get('/register', (req, res) => {
    res.send('Registering');
})
app.post(
  '/register', 
  userController.createUser,
  tokenController.createToken,
  (req, res) => {
    return res.status(200).redirect('/homepage');
})

// Route '/login' GET
// Route '/login' POST
app.get('/login', (req, res) => {
    res.send('Logging in');
})
app.post(
  '/login',
  userController.verifyUser,
  (req, res) => {
    return res.status(200).redirect('/homepage');
  }
)


// Route '/homepage' GET
// Route '/homepage' POST
app.get('/homepage', (req, res) => {
    res.send('Welcome Home');
})


// Global error handler
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send({ error: err });
  });


// Listens on port 3000
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

// // Do this if cors becomes an issue
// // Need to install npm cors first
// const cors = require('cors);
// app.use(cors());