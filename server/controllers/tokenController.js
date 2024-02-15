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
  // testing
  console.log('hi');

  // Extract the token
  // The expected format of the header is 'Bearer <token>'
  const authHeader = req.headers.authorization;
  console.log('authHeader: available')
  const token = authHeader && authHeader.split(' ')[1]; // extract the token
  console.log('token from authHeader: available');

  // Check for token
  if (token === null) return res.status(401); // If no token, unauthorized

  // Verifying the token
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      console.log('token not valid or expired');
      return res.sendStatus(403); // if token is not valid or expired
    }
    else { // Token is verified, user is cleared
      req.user = user; // add user payload to request
      // testing
      console.log('token from tokenController.authenticateToken: available');
      console.log('token verified you may proceed.');
      console.log('you have access to user information on req.user');
      return next();
    }
  });
}

// Export tokenController
module.exports = tokenController;