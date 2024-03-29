const Medication = require('../models/medicationModel');

const medicationController = {};

// Add new medication
medicationController.addNewMedication = async (req, res, next) => {
  console.log('req.body: ', req.body); 
  // Check edge cases


  const { name, timesPerDay, timeOfDay, userId } = req.body;

  // console.log('req.user in medicationController.addNewMedication: ', req.user);
  
  if (!name || !timesPerDay || !timeOfDay || !userId )
    return next({
      log: 'Missing name, timesPerDay, or timeOfDay',
      status: 400,
      message: { err: 'An error occured' },
    }); 

  // Create medication and store into mongoDB
  try {
    const userId = req.user.id; // assuming req.user is populated from JWT token 
    const medication = await Medication.create({ userId, name, timesPerDay, timeOfDay});

    res.locals.medication = medication;
    console.log('new medication added: ', medication.name);

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
    const userId = req.user.id; // taken from the req.user body from jwt.verify from tokenController.authenticateToken
    const medicationList = await Medication.find({ userId });
    res.json(medicationList);
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