import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    try {
      const response = await api.post('/auth/login', {
        email,
        password
      });

      const token = response.data.token || 'demo-token';

      localStorage.setItem('userToken', token);
      localStorage.setItem('userEmail', email);

      navigate('/dashboard');

    } catch (error) {
      console.error('Login failed', error);
      setError('Unable to login. Please check your credentials.');
    }
  };

  return (
    <div className="login-container">

      <div className="login-card">

        <h1>AI Placement Interview Portal</h1>
        <p>Login to continue your interview preparation</p>

        <form onSubmit={handleSubmit}>

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
          />

          <button type="submit">
            Login
          </button>

        </form>

        {error && <p className="error">{error}</p>}

      </div>

    </div>
  );
}

export default Login;