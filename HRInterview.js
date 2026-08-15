import React, { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';
import './HRInterview.css';

const hrQuestions = [
  'Tell me about yourself.',
  'Why do you want to work for this company?',
  'Describe a challenge and how you solved it.',
];

function HRInterview() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [message, setMessage] = useState('');

  const handleChange = (value) => {
    setAnswers((prev) => ({ ...prev, [currentIndex]: value }));
  };

  const handleSubmit = async () => {
    const payload = hrQuestions.map((question, index) => ({
      question_id: index + 1,
      answer: answers[index] || '',
    }));

    try {
      await api.post('/hr/submit-hr', { answers: payload });
      navigate('/results');
    } catch (error) {
      console.error('Submit failed', error);
      setMessage('Unable to submit HR answers.');
    }
  };

  return (
  <div className="hr-container">

    <div className="hr-card">

      <h1>HR Interview</h1>

      <div className="question-section">

        <h3>
          Question {currentIndex + 1} of {hrQuestions.length}
        </h3>

        <p>{hrQuestions[currentIndex]}</p>

      </div>

      <textarea
        className="answer-box"
        placeholder="Type your answer here..."
        value={answers[currentIndex] || ''}
        onChange={(e) => handleChange(e.target.value)}
      />

      <div className="navigation-buttons">

        <button
          disabled={currentIndex === 0}
          onClick={() => setCurrentIndex((idx) => idx - 1)}
        >
          Previous
        </button>

        <button
          disabled={currentIndex === hrQuestions.length - 1}
          onClick={() => setCurrentIndex((idx) => idx + 1)}
        >
          Next
        </button>

      </div>

      <button
        className="submit-button"
        onClick={handleSubmit}
      >
        Submit HR Answers
      </button>

      {message && (
        <p className="message">
          {message}
        </p>
      )}

    </div>

  </div>
);
}

export default HRInterview;
