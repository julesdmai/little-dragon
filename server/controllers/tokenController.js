const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const tokenController = {};

// tokenController.createToken = async (req, res, next) => {
//     const { id, username, password } = res.body.user;

//     // testing
//     console.log('in tokenController.createToken for ${username}');

//     const user = { id, username};
//     const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });

//     res.json({ accessToken });

//     return next(); // is this necessary
// }

tokenController.authenticateToken = async (req, res, next) => {
  // Extract the token
  // The expected format of the header is 'Bearer <token>'
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  // Checking if the token is present
  if (token === null) return res.status(401); // No token, unauthorized

  // Verifying the token
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(404);
    }
    else {
      const userId = user.id;
    }
  })

    return next();
}

// Export tokenController
module.exports = tokenController;