const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
    cookieId: {},
    createdAt: {}
});

module.exports = mongoose.model('Session', sessionSchema);