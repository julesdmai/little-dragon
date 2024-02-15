import React from 'react'
import MedicationRow from '../components/MedicationRow.jsx' 

export default function MedicationContainer() {
  return (
    <div className="medicationContainer">
        <h2>Medication Schedule</h2>
        <MedicationRow />
    </div>
  )
}
