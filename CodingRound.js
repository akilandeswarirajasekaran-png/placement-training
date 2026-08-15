import React, { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';
import './CodingRound.css';

function CodingRound() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState('python');
  const [code, setCode] = useState('print("Hello, world!")');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleRun = () => {
    setOutput('Running code...');
    setTimeout(() => {
      setOutput('Output not available in preview mode. Submit to save your answer.');
    }, 700);
  };

  const handleSubmit = async () => {
    setLoading(true);
    setMessage('');
    try {
      await api.post('/coding/submit-code', {
        language,
        code,
        input,
      });
      setMessage('Code submitted successfully.');
      navigate('/communication');
    } catch (error) {
      console.error('Submit failed', error);
      setMessage('Unable to submit code.');
    } finally {
      setLoading(false);
    }
  };

  return (
  <div className="coding-container">

    <div className="coding-card">

      <h1>Coding Round</h1>

      <div className="language-section">

        <label>Select Language</label>

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="c">C</option>
          <option value="cpp">C++</option>
        </select>

      </div>

      <h3>Code Editor</h3>

      <textarea
        className="code-editor"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      <h3>Sample Input</h3>

      <textarea
        className="input-box"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter sample input"
      />

      <div className="button-group">

        <button onClick={handleRun}>
          Run Code
        </button>

        <button
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Code"}
        </button>

      </div>

      <div className="output-box">

        <h3>Output Console</h3>

        <pre>{output}</pre>

      </div>

      {message && (
        <p className="message">
          {message}
        </p>
      )}

    </div>

  </div>
);
}

export default CodingRound;
