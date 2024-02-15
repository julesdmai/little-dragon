import React from 'react'
import MedicationContainer from './MedicationContainer';
import HeaderContainer from './HeaderContainer';
import AddMedicationForm from '../components/AddMedicationForm'

export default function MainContainer() {
  const username = localStorage.getItem('username');

  // Initialize state
  // Helper functions
  // Render

  return (
    <div className="mainContainer">
        <HeaderContainer username={username}/> 
        <MedicationContainer />
        <AddMedicationForm />
    </div>
  )
};



// <>
// <MedicationContainer />
//     <AddMedicationForm />
//     </>