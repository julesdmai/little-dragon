const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const medicationSchema = new Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    dosage: Number,
    form: String,
    // array of numbers
    hourOfDay: {type: [Numbers], required: true}, 
    name: {type: String, required: true},
    nameGeneric: String,
    nameBrand: String,
    timesPerDay: Number,
});

module.exports = mongoose.model('Medication', medicationSchema);