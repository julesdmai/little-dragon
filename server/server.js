const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

// Access to process.env variables
require('dotenv').config();
// console.log('ACCESS_TOKEN_SECRET:', process.env.ACCESS_TOKEN_SECRET);

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
app.get('/register', (req, res) => {
    res.send('Registering');
})
// Route '/register' POST
app.post(
  '/register', 
  userController.createUser,
  (req, res) => {
    return res.status(200).redirect('/login');
})

// Route '/login' GET
app.get('/login', (req, res) => {
    res.send('Logging in');
})
// Route '/login' POST
app.post(
  '/login',
  userController.verifyUser,
  (req, res) => { // status 201 created
    return res.status(201).json({ accessToken: res.locals.token });
  }
)


// Protected route
// Route '/homepage' GET
app.get(
  '/homepage', 
  tokenController.authenticateToken, 
  (req, res) => {
  // Can access req.user to get user details extracted from the token 
    console.log('req.user: ', req.user);
    res.send('Welcome Home');
})

// Protected route
// Route '/homepage' POST


// 404 handler
app.use('*', (req, res) => {
    res.status(404).send('Not found');
});

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