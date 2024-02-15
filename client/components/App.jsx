import React from 'react'
import RegisterForm from './RegisterForm.jsx';
import LoginForm from './LoginForm.jsx';

export default function App() {
  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:3000/logout');

      if (!response.ok) throw new Error('Logout failed');
      
      // // Handle success (e.g., navigate to login page)
      const result = await response.json();
      console.log(result.message);

      if (result.clearToken) {
        // Clear token from localStorage
        localStorage.removeItem('accessToken');
        console.log('accessToken removed from localStorage');

        // Redirect user to the login page
        window.location.href='http://localhost:8080/';
      }
    }
    catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      Hello World
      <RegisterForm />
      <LoginForm />
      <button id="logout" onClick={handleLogout}>Logout</button>
    </div>
  )
};