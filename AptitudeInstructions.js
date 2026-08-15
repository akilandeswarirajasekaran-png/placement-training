import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AptitudeInstructions.css';

function AptitudeInstructions() {
  const navigate = useNavigate();

  return (
    <div className="instruction-container">

      <div className="instruction-card">

        <h1>Aptitude Test</h1>

        <p className="subtitle">
          Please read the instructions carefully before starting the test.
        </p>

        <ul className="instruction-list">
          <li>✔ Total Questions: 20</li>
          <li>✔ Total Time: 30 Minutes</li>
          <li>✔ Each question carries equal marks.</li>
          <li>✔ Do not refresh or close the browser.</li>
          <li>✔ Click Next to move between questions.</li>
          <li>✔ Submit the test before the timer ends.</li>
        </ul>

        <button onClick={() => navigate('/aptitude')}>
          Start Aptitude Test
        </button>

      </div>

    </div>
  );
}

export default AptitudeInstructions;