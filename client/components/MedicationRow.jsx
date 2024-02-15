import React from 'react'

export default function MedicationRow() {
  return (
    <table>
        <tr>
            <th></th>
            <th>Morning</th>
            <th>Afternoon</th>
            <th>Evening</th>
        </tr>
        <tr>
            <td>Amlodipine</td>
            <td>
                <label className="checkbox-container">
                <input type="checkbox"/>
                <span className="checkmark"></span>
                </label>
            </td>
            <td>
                <label className="checkbox-container">
                <input type="checkbox"/>
                <span className="checkmark"></span>
                </label>
            </td>
            <td>
                <label className="checkbox-container">
                <input type="checkbox"/>
                <span className="checkmark"></span>
                </label>
            </td>
        </tr>
        <tr>
            <td>Lisinopril</td>
            <td><input type="checkbox" name="med2morning"/></td>
            <td><input type="checkbox" name="med2afternoon"/></td>
            <td><input type="checkbox" name="med2evening"/></td>
        </tr>
        <tr>
            <td>Plavix</td>
            <td><input type="checkbox" name="med3morning"/></td>
            <td><input type="checkbox" name="med3afternoon"/></td>
            <td><input type="checkbox" name="med3evening"/></td>
        </tr>
      </table>
  )
}