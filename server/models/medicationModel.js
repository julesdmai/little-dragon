const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const medicationSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true
    },
    bp: String,
    food: Boolean,
    dosage: Number,
    form: String,
    timesPerDay: {type: Number, required: true},
    timeOfDay: {type: String, required: true}, // array of numbers
    name: {type: String, required: true},
    nameGeneric: String,
    nameBrand: String,
});

module.exports = mongoose.model('Medication', medicationSchema);