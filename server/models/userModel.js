const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bcrypt = require('bcryptjs');
const SALT_WORK_FACTOR = 10;

const userSchema = new Schema(
  { // username is a string
    username: {
      type: String,
      required: true,
      unique: true,
    }, // password is a string
    password: {
      type: String,
      required: true
    },
    firstName: String,
    lastName: String,
    email: {
      type: String,
      unique: true,
    }, 
  }
)

// Pre-hook to hash password
userSchema.pre('save', function (next) {
  bcrypt.hash(this.password, SALT_WORK_FACTOR, (err, hash) => {
    if (err) return next(err);
    this.password = hash;
    return next();
  })
})

module.exports = mongoose.model('User', userSchema);