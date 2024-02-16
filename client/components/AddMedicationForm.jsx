import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function AddMedicationDetailsForm() {
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');
  const accessToken = localStorage.getItem('accessToken');
  console.log('accessToken from AddMedicationDetailsForm: ', accessToken);

  // state initialization
  const [medicationDetails, setMedicationDetails] = useState({
    name: '',
    timesPerDay: '',
    timeOfDay: ''
  });


  // helper functions
  const handleChange = (e) => {
    const { name, value } = e.target;

    setMedicationDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // add the medicaiton to the database
    try {
      const response = await fetch('http://localhost:3000/medications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ ...medicationDetails, userId })
      });

      if (response.ok) {
        // const newMedicationDetails = await response.json();
        // reset input bar
        setMedicationDetails({
          name: '',
          timesPerDay: '',
          timeOfDay: ''
        })
        // navigate('/homepage');
      }

    } catch (err) {
      console.error(err);
    }
  }

  // render to page
  return (
    <div className="addMedicationContainer">
        <h2>Add MedicationDetails</h2>
        <form onSubmit={handleSubmit} className="horizontalForm">
            <input 
              autocomplete="disabled"
              type="text"
              required
              name="name"
              value={medicationDetails.name}
              onChange={handleChange}
              placeholder="name of medicationDetails"
            />
            <input 
              type="number"
              required
              name="timesPerDay"
              value={medicationDetails.timesPerDay}
              onChange={handleChange}
              placeholder="# per day"
            />
            <input 
              type="text" 
              required
              name="timeOfDay"
              value={medicationDetails.timeOfDay}
              onChange={handleChange}
              placeholder="times of the day"
            />  
            <button type="submit" className="btnAccount">Add</button>
        </form>
        {/* <button type="submit" className="btnAccount">Add</button> */}
    </div>
  )
}
