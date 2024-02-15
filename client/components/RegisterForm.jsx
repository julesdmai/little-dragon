import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RegisterForm() {
  const navigate = useNavigate(); // Hook for navigation

  // Initialize state
   const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
   });

   // When user changes any input field
   const handleChange = (e) => {
    const targetInput = e.target;
    
    setFormData({
      ...formData,
      [targetInput.name]: targetInput.value
    });
   };

   // When user clicks submit
   const handleSubmit = async (e) => {
    e.preventDefault();
    // creates copy of formData
    const formDataClone = {...formData};
    console.log('formDataClone: ', formDataClone);
    const { username, password, confirmPassword } = formDataClone;

    // // validation checks
    // if (username.length < 3)
    // if (typeof username !== 'string')

    // if (password !== confirmPassword)
    // if (password.length < 6)
    // if (typeof password !== 'string')

    // // lowercase username
    // username = username.toLowerCase();

    // if (!username || !password || !confirmPassword)  

    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataClone), // now have the formData on the req.body
      });

      if (!response.ok) throw new Error('Registration failed');

      // // Handle success (e.g., navigate to login page)
      const result = await response.json(); // Assuming responds with JSON
      console.log('result: ', result); // Can do something here with the data

      // Redirect the user
      navigate('/login');
    }
    catch (err) {
      console.error(err);
    }
   };


  // Render to page
  // Note: the value of the input must be a variable, or it will never change
  return (
    <div className="entryForm">
    <h1>Register</h1>
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
        autoComplete="disabled"
        required
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        required
      />
      <input
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        placeholder="Confirm Password"
        required
      />
      <button type="submit" className="btn">Register</button>
    </form>
    </div>
  );
};