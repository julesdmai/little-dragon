import React, { useState } from 'react';

export default function RegisterForm() {
  // Initialize state
   const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
   });

   const handleChange = async (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
   };

   const handleSubmit = async () => {

   }


    // validation checks

  // Render to page
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
        autocomplete="disabled"
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