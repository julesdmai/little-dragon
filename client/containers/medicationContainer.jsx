import React, { useState, useEffect } from 'react'
import MedicationRow from '../components/MedicationRow.jsx' 

export default function MedicationContainer() {
  // State initialization
  const [medicationsList, setMedicationsList] = useState([]);

  // Helper functions
  useEffect(() => {
    const userId = localStorage.getItem('userId');
    const accessToken = localStorage.getItem('accessToken');

    const fetchMedications = async () => {
      try {
        const response = await fetch(`http://localhost:3000/medications?userId=${userId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch medications');
        }

        // do what it wanted
        const data = await response.json();
        setMedicationsList(data); // Assuming the backend returns an array of medications

      } catch (err) {
        console.error(err);
      }
    }

    fetchMedications();
  }, [medicationsList]); // Dependencies array

  // Render to page
  return (
    <div className="medicationContainer">
        <h1>Medications</h1>
        {medicationsList.map((medication) => (
          <MedicationRow key={medication._id} medication={medication} />
        ))}
    </div>
  );
}
