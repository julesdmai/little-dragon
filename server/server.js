const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');

// Access to process.env variables
require('dotenv').config();
// console.log('ACCESS_TOKEN_SECRET:', process.env.ACCESS_TOKEN_SECRET);

// Import controllers
const userController = require('./controllers/userController');
const tokenController = require('./controllers/tokenController');
const medicationController = require('./controllers/medicationController');

// Port we are currently serving
const PORT = 3000;

const app = express();

// Allows Express application to parse JSON payloads
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Allows Express appplication to circumvent cors policy
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/testdb');


// Route '/' GET
app.get('/', (req, res) => {
    return res.send('Hello Earth');
})

// Route '/register' GET
app.get('/register', (req, res) => {
    return res.send('Registering');
})
// Route '/register' POST
app.post(
  '/register', 
  userController.createUser,
  (req, res) => {
    return res.status(200).json({ message: 'Successfully registered. Please continue to login.'});
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
    // send token to client-side in an object.acceessToken
    return res.status(201).json({ accessToken: res.locals.token });
  }
)


// Important to note: The token has been set to expire within 60 seconds.
// The user must login, receive the token, and visit the homagepage within 60 seconds
// If the user goes over the time, they will be forbidden to access and must re-login to obtain a new token

// Protected route
// Route '/homepage' GET
app.get(
  '/homepage', 
  tokenController.authenticateToken, 
  (req, res) => {
  // Can access req.user to get user details extracted from the token 
    console.log('req.user: ', req.user);
    return res.send('Homepage medication list');
})

// Protected route
// Route '/homepage' POST


// Protected route
// Route '/medications' POST
app.post(
  '/medications',
  tokenController.authenticateToken,
  medicationController.addNewMedication,
  (req, res) => {
    return res.status(200).send('Medication added');
  }
)

// Route '/medications' GET
app.get(
  '/medications',
  tokenController.authenticateToken,
  medicationController.getMedicationList,
  (req, res) => {
    return res.send('Medications list');
  }
);

// Route '/logout' GET
app.get('/logout', (req, res) => {
    return res.status(200).json({ message: 'User logged out successfully', clearToken: true });
});

// 404 handler
app.use('*', (req, res) => {
    return res.status(404).send('Not found');
});

// Global error handler
app.use((err, req, res, next) => {
    console.log(err);
    return res.status(500).send({ error: err });
  });


// Listens on port 3000
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

// // Do this if cors becomes an issue
// // Need to install npm cors first
// const cors = require('cors);
// app.use(cors());