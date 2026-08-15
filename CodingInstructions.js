import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CodingInstructions.css';

function CodingInstructions() {
  const navigate = useNavigate();

  return (
    <div className="coding-instruction-container">

      <div className="coding-instruction-card">

        <h1>Coding Round Instructions</h1>

        <p className="subtitle">
          Read the following instructions carefully before starting the coding test.
        </p>

        <ul className="instruction-list">
          <li>💻 Choose a programming language.</li>
          <li>📝 Write your solution in the editor.</li>
          <li>▶ Run your code and verify the output.</li>
          <li>✅ Submit only when you are satisfied.</li>
          <li>⏰ Complete the test within the allotted time.</li>
        </ul>

        <button onClick={() => navigate('/coding')}>
          Start Coding Test
        </button>

      </div>

    </div>
  );
}

export default CodingInstructions;