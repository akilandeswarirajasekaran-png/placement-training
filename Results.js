import React, { useEffect, useState } from 'react';
import api from '../api';
import './Results.css';

function Results() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const res = await api.get('/result');
        setResult(res.data.result);
      } catch (error) {
        console.error('Fetch failed', error);
      } finally {
        setLoading(false);
      }
    };

    fetchResult();
  }, []);

 if (loading) {
  return (
    <div className="results-container">
      <div className="results-card">
        <h2>Loading Results...</h2>
      </div>
    </div>
  );
}

if (!result) {
  return (
    <div className="results-container">
      <div className="results-card">
        <h2>No Results Available</h2>
        <p>Please complete all interview rounds.</p>
      </div>
    </div>
  );
}

return (
  <div className="results-container">

    <div className="results-card">

      <h1>Interview Results</h1>

      <div className="score-box">

        <div className="score-item">
          <h3>Aptitude</h3>
          <p>{result.aptitude_score}</p>
        </div>

        <div className="score-item">
          <h3>Coding</h3>
          <p>{result.coding_score}</p>
        </div>

        <div className="score-item">
          <h3>Communication</h3>
          <p>{result.communication_score}</p>
        </div>

        <div className="score-item">
          <h3>HR</h3>
          <p>{result.hr_score}</p>
        </div>

      </div>

      <div className="overall-score">

        Overall Score

        <h2>{result.overall_score}</h2>

      </div>

    </div>

  </div>
);
}

export default Results;
