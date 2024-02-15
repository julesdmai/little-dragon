import React from 'react'
import MedicationContainer from './MedicationContainer';

export default function MainContainer() {
  return (
    <>
    <h1>Welcome {greeting},</h1>
    <MedicationContainer />
    <AddMedicationForm />
    </>
  )
}