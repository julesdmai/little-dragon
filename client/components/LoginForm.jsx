import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const navigate = useNavigate();

  // Initialize state
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })


  // Helper functions
  const handleChange = (e) => {
    const targetInput = e.target;
    setCredentials({
      ...credentials,
      [targetInput.name]: targetInput.value
    });
  };

  const handleSubmit = async (e) => {
    // prevent default
    e.preventDefault();

    // create copy of state
    const credentialsClone = {...credentials};
    console.log('credentialsClone: ', credentialsClone);

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(credentialsClone),
      });
      console.log('response in /login: ', response);
      
      if (!response.ok) throw newError('Login failed');

      // // Handle success (e.g., navigate to login page)
      // Data has an accessToken property
      // This token needs to be put on all future requests
      const data = await response.json();
      console.log('data: ', data);

      // save the JWT onto localStorage
      localStorage.setItem('accessToken', data.accessToken);
      console.log(`accessToken stored to localStorage`);
      localStorage.setItem('username', data.username);
      console.log('username stored to localStorage');

      navigate('/homepage');
    }
    catch (err) {
      console.error(err);
    }
  };


  // Render to page
  return (
    <div className="entryForm">
    <h1>Login</h1>
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        name="username"
        value={credentials.username}
        onChange={handleChange}
        placeholder="Username"
        autoComplete="disabled"
        required
      />
      <input
        type="password"
        name="password"
        value={credentials.password}
        onChange={handleChange}
        placeholder="Password"
        required
      />
      <button type="submit" className="btn">Log In</button>
    </form>
    </div>
  );
}