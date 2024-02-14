const Medication = require('../models/medicationModel');

const medicationController = {};

// Add new medication
medicationController.addNewMedication = async (req, res, next) => {
  // Check edge cases
  const { name, timesPerDay, timeOfDay } = req.body;
  if (!name || !timesPerDay || !timeOfDay )
    return next({
      log: 'Missing name, timesPerDay, or timeOfDay',
      status: 400,
      message: { err: 'An error occured' },
    }); 

  // Create medication and store into mongoDB
  try {
    const userId = req.user.id; // assuming req.user is populated from JWT token 
    const medication = new Medication({ userId, name, timesPerDay, timeOfDay});
    const newMedication = await medication.create({ name, timesPerDay, timeOfDay});
    await medication.save();

    res.locals.medication = newMedication;
    console.log('newMedication added: ', newMedication.name, newMedication);

    return next();
  }

  catch (err) {
  return next({
    log: `Error in medicationController.addNewMedication: ${err}`,
    status: 500,
    message: { err: 'An error occured' },
    });
  }
}


// Get medication list for logged-in user
medicationController.getMedicationList = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const medicationList = await Medication.find({ userId });
    res.json(medications);
  }
  catch (err) {
    return next({
      log: `Error in medicationController.getMedicationList: ${err}`,
      status: 500,
      message: { err: 'An error occured' },
    });
  }
}


// Export medicationController
module.exports = medicationController;