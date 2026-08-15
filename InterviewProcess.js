import React from 'react';
import { useNavigate } from 'react-router-dom';
import './InterviewProcess.css';

function InterviewProcess() {

  const navigate = useNavigate();
  const company = localStorage.getItem('selectedCompany');

  return (
    <div className="process-container">

      <div className="process-card">

        <h1>Interview Process</h1>

        {company && (
          <p className="company-name">
            Selected Company:
            <strong> {company}</strong>
          </p>
        )}

        <p className="subtitle">
          Complete all interview rounds one by one.
        </p>

        <div className="round-buttons">

          <button onClick={() => navigate('/aptitude-instructions')}>
            Aptitude Round
          </button>

          <button onClick={() => navigate('/coding-instructions')}>
            Coding Round
          </button>

          <button onClick={() => navigate('/communication')}>
            Communication Round
          </button>

          <button onClick={() => navigate('/hr')}>
            HR Interview
          </button>

        </div>

      </div>

    </div>
  );
}

export default InterviewProcess;