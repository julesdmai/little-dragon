const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userController = {};


// Create user
userController.createUser = async (req, res, next) => {
  // Destructure variables username, password, and confirmPassword
  const { username, password, confirmPassword } = req.body;

  // Edge case: Missing fields
  if (!username || !password || !confirmPassword)
    return next({
      log: 'Missing username, password, or confirmPassword',
      status: 400,
      message: { err: 'An error occured' },
    });

  // Check for password and confirmPassword eequality
  if (password !== confirmPassword)
    return next({
      log: 'Passwords do not match',
      status: 400,
      message: { err: 'An error occured' },
    });


  // Creating user and storing into mongoDB
  try {
    const user = await User.create({ username, password });
    res.locals.user = user;
      console.log('user created: ', user.username);
    return next(); 
  }

  catch (err) {
    return next({
      log: `Error in userController.createUser: ${err}`,
      status: 500,
      message: { err: 'An error occured' },
    });
  }
};


// Verify user
userController.verifyUser = async (req, res, next) => {
  // Destructure variables for login credentials
  const { username, password } = req.body;

  // Edge cases: Missing fields
  if (!username || !password)
    return next({
      log: `Missing username or password`,
      status: 400,
      message: { err: 'An error occured' }
    })

  try {
    // Query MongoDB
    const user = await User.findOne({ username });

    // Check authentication
    if (!user) {
      console.log('unable to login');
      return res.status(401).res.redirect('/register');
    }
    else {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        console.log('unable to login');
        return res.status(401).res.direct('/register');
      }
      // User is authenticated, create JWT
      const payload = { id: user.id, username: user.username };
      console.log('ACCESS_TOKEN_SECRET: ', process.env.ACCESS_TOKEN_SECRET);

      const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1h' });
      console.log('accessToken: ', accessToken);

      // testing
      console.log('accessToken issued and stored on res.locals.token');
      res.locals.token = accessToken
      
      console.log(`${username} has logged in`);
      return next();
    }
  }

  catch (err) {
    return next({
      log: `Error in userController.loginUser: ${err}`,
      status: 500,
      message: { err: 'An error occured' },
    });
  }
}


// Export userController
module.exports = userController;