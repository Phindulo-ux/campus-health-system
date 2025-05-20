import React, { useState } from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'; 

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/onboarding');
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Wits Booking</h2>
      <img src={logo} alt="Campus Health and Wellness Centre" className="login-logo" />
      <form onSubmit={handleLogin}>
        <label className="login-label" htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Staff number or email"
          className="login-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label className="login-label" htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Your Wits password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="login-button">LOGIN</button>
      </form>
          
      <button className="forgot-password">Forgot Password?</button>
    </div>
  );
};

export default LoginPage;