import React, { useState } from 'react';

export default function RegisterForm() {
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
   const handleSubmit = async () => {
    e.preventDefault();
    // creates copy of formData
    // formDataClone = {...formData};
    // const { username, password, confirmPassword } = formDataClone;

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
      const response = await fetch('/register', {
        method: "POST",
        heaaders: "{ 'Content-Type': 'application/json' }",
        body: JSON.stringify(formData), // now have the formData on the req.body
      });
      if (!response.ok) throw new Error('Registration failed');
      // // Handle success (e.g., navigate to login page)
    }
    catch (err) {
      console.error(err);
    }
   };



  // Render to page
  // Note: the value of the input must be a variable, or it will never change
  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Register</button>
    </form>
  );
};