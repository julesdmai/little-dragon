import React, {useState} from 'react'

export default function AddMedicationForm() {
  return (
    <div className="addMedicationContainer">
        <h2>Add New Medication</h2>
        <form className="horizontalForm">
            <input type="text" placeholder="name of medication"/>
            <input type="number" placeholder="# per day"/>
            <input type="number" placeholder="times of the day"/>
            <button type="submit" className="btnAccount">Add</button>
        </form>
    </div>
  )
}
