import React, {useState} from 'react'

export default function AddMedicationForm() {
  // state initialization
  const [medication, setMedication] = useState({
    name: '',
    timesPerDay: '',
    timeOfDay: ''
  });

  // helper functions
  const handleChange = (e) => {
    const { name, value } = e.target;

    setMedication(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // add the medicaiton to the database
    try {
      const response = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...medication, userId })
      });

      if (response.ok) {
        const newMedication = await response.json();

      }

    } catch (err) {
      console.error(err);
    }
  }

  // render to page
  return (
    <>
    <div className="addMedicationContainer">
        <h2>Add Medication</h2>
        <form onSubmit={handleSubmit} className="horizontalForm">
            <input 
              type="text"
              required
              name="name"
              value={medication.name}
              onChange={handleChange}
              placeholder="name of medication"
            />
            <input 
              type="number"
              required
              name="timesPerDay"
              value={medication.timesPerDay}
              onChange={handleChange}
              placeholder="# per day"
            />
            <input 
              type="number" 
              required
              name="timeOfDay"
              value={medication.timeOfDay}
              onChange={handleChange}
              placeholder="times of the day"
            />  
            <button type="submit" className="btnAccount">Add</button>
        </form>
        {/* <button type="submit" className="btnAccount">Add</button> */}
    </div>
    </>
  )
}
