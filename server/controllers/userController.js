const User = require('../models/userModel');

const userController = {};

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


  try {
    // Curious to try below
    const user = await User.create({ username, password });
    res.locals.username = user.username;
      console.log('user created: ', username);
    return next(); 

    // await User.create(({ username, password }), () => {
    //   res.locals.username = username;
    //   console.log('user created: ', username);
    //   return next();
  }

  catch (err) {
    return next({
      log: `Error in userController.createUser: ${err}`,
      status: 500,
      message: { err: 'An error occured' },
    });
  }
};

module.exports = userController;