import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import MainContainer from '../containers/MainContainer.jsx'

export default function Homepage() {
  const username = localStorage.getItem('username');
  const greeting = capitalize(username);

  // Initialize state
  // Helper functions
  function capitalize(string) {
    if (!string) return '';
    return string[0].toUpperCase() + string.slice(1);
  }
  // Render to page
  return(
    <MainContainer/>
  );
}




// <>
// <h1>Welcome {greeting},</h1>
// <table>
//   <thead>Medication Schedule</thead>
//   <tr>
//       <th></th>
//       <th>Morning</th>
//       <th>Afternoon</th>
//       <th>Evening</th>
//   </tr>
//   <tr>
//       <td>Medication 1</td>
//       <td>
//           <label className="checkbox-container">
//           <input type="checkbox"/>
//           <span className="checkmark"></span>
//           </label>
//       </td>
//       <td>
//           <label className="checkbox-container">
//           <input type="checkbox"/>
//           <span className="checkmark"></span>
//           </label>
//       </td>
//       <td>
//           <label className="checkbox-container">
//           <input type="checkbox"/>
//           <span className="checkmark"></span>
//           </label>
//       </td>
//   </tr>
//   <tr>
//       <td>Medication 2</td>
//       <td><input type="checkbox" name="med2morning"/></td>
//       <td><input type="checkbox" name="med2afternoon"/></td>
//       <td><input type="checkbox" name="med2evening"/></td>
//   </tr>
//   <tr>
//       <td>Medication 3</td>
//       <td><input type="checkbox" name="med3morning"/></td>
//       <td><input type="checkbox" name="med3afternoon"/></td>
//       <td><input type="checkbox" name="med3evening"/></td>
//   </tr>
// </table>
// <label htmlFor="time">Choose a time:</label>
// <select name="time" id="time">
//   <option value="7">7am</option>
//   <option value="8">8am</option>
//   <option value="9">9am</option>
//   <option value="10">10am</option>
//   <option value="11">11am</option>
//   <option value="12">12pm</option>
//   <option value="13">1pm</option>
//   <option value="14">2pm</option>
//   <option value="7">3pm</option>
//   <option value="8">4pm</option>
//   <option value="9">5pm</option>
//   <option value="10">6pm</option>
// </select>
// <button id="add_med_btn">add new medication</button>
// </>