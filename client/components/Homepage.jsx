import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Homepage() {
  // Initialize state
  // Helper functions
  // Render to page
  return(
    <>
      <h1>Welcome to the homepage</h1>
      <table>
        <thead>Medication Schedule</thead>
        <tr>
            <th></th>
            <th>Morning</th>
            <th>Afternoon</th>
            <th>Evening</th>
        </tr>
        <tr>
            <td>Medication 1</td>
            <td><input type="checkbox" name="med1morning"/></td>
            <td><input type="checkbox" name="med1afternoon"/></td>
            <td><input type="checkbox" name="med1evening"/></td>
        </tr>
        <tr>
            <td>Medication 2</td>
            <td><input type="checkbox" name="med1morning"/></td>
            <td><input type="checkbox" name="med1afternoon"/></td>
            <td><input type="checkbox" name="med1evening"/></td>
        </tr>
        <tr>
            <td>Medication 3</td>
            <td><input type="checkbox" name="med1morning"/></td>
            <td><input type="checkbox" name="med1afternoon"/></td>
            <td><input type="checkbox" name="med1evening"/></td>
        </tr>
      </table>
      <button id="add_med_btn">add new medication</button>
    </>
  );
}