const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const tokenController = {};

tokenController.createToken = async (req, res, next) => {
    const { id, username, password } = res.body.user;

    // testing
    console.log('in tokenController.createToken for ${username}');

    const user = { id, username };
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });

    res.json({ accessToken });

    return next(); // is this necessary
}

tokenController.verifyToken = async (req, res, next) => {
    return next();
}

// Export tokenController
module.exports = tokenController;