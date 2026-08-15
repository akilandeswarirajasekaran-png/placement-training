import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {

  const navigate = useNavigate();
  const company = localStorage.getItem('selectedCompany');

  const handleLogout = () => {
    localStorage.removeItem('selectedCompany');
    localStorage.removeItem('userToken');
    navigate('/');
  };

  return (

    <div className="dashboard-container">

      <div className="dashboard-card">

        <h1>AI Placement Interview Portal</h1>

        <h2>Dashboard</h2>

        <p>
          Welcome to your AI-powered interview preparation platform.
        </p>


        {company && (
          <p className="company">
            Selected Company:
            <strong> {company}</strong>
          </p>
        )}


        <div className="dashboard-buttons">

          <button onClick={() => navigate('/companies')}>
            Company Selection
          </button>

          <button onClick={() => navigate('/process')}>
            Interview Process
          </button>

          <button onClick={() => navigate('/results')}>
            View Results
          </button>

          <button onClick={() => navigate('/profile')}>
            Profile
          </button>

          <button 
            className="logout"
            onClick={handleLogout}
          >
            Logout
          </button>

        </div>

      </div>

    </div>

  );
}

export default Dashboard;