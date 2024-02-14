const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

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
    const user = await User.findOne({ username });
    res.locals.username = username;

    // Check authentication
    if (!user) {
      console.log('unable to login');
      res.redirect('/register');
    }
    else {
      const result = await bcrypt.compare(password, user.password);
      if (!result) {
        console.log('unable to login');
        return res.direct('/register');
      }
      res.locals.id = user.id;
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