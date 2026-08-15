import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import './AptitudeTest.css';

const sampleQuestions = [
  {
    id: 1,
    question: 'What is 12% of 250?',
    options: ['25', '30', '32', '28'],
    answer: '30',
  },
  {
    id: 2,
    question: 'If x + 8 = 17, what is x?',
    options: ['8', '9', '10', '11'],
    answer: '9',
  },
  {
    id: 3,
    question: 'A train travels 300 km in 5 hours. What is its speed?',
    options: ['50 km/h', '55 km/h', '60 km/h', '65 km/h'],
    answer: '60 km/h',
  },
  {
    id: 4,
    question: 'What is the next number in the sequence: 2, 6, 12, 20, ?',
    options: ['26', '28', '30', '32'],
    answer: '30',
  },
  {
    id: 5,
    question: 'If 5 pens cost $15, how much do 8 pens cost?',
    options: ['$20', '$22', '$24', '$26'],
    answer: '$24',
  },
  {
    id: 6,
    question: 'What is the value of 7 × 8?',
    options: ['48', '54', '56', '64'],
    answer: '56',
  },
  {
    id: 7,
    question: 'Which is the smallest prime number?',
    options: ['0', '1', '2', '3'],
    answer: '2',
  },
  {
    id: 8,
    question: 'What is 9 + 15 ÷ 3?',
    options: ['12', '14', '15', '18'],
    answer: '14',
  },
  {
    id: 9,
    question: 'A rectangle is 5m by 8m. What is its area?',
    options: ['40 m²', '30 m²', '35 m²', '45 m²'],
    answer: '40 m²',
  },
  {
    id: 10,
    question: 'If the ratio of 2:3 equals 10:x, what is x?',
    options: ['12', '15', '18', '20'],
    answer: '15',
  },
];

function AptitudeTest() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(30 * 60);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const currentQuestion = sampleQuestions[currentIndex];

  const formattedTime = useMemo(() => {
    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
    const seconds = String(timeLeft % 60).padStart(2, '0');
    return `${minutes}:${seconds}`;
  }, [timeLeft]);

  useEffect(() => {
    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleOptionChange = (option) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: option }));
  };

  const handleSubmit = async () => {
    const answeredQuestions = sampleQuestions.map((question) => ({
      question_id: question.id,
      selected_option: answers[question.id] || '',
    }));

    const score = sampleQuestions.reduce((sum, question) => {
      return sum + (answers[question.id] === question.answer ? 1 : 0);
    }, 0);

    setLoading(true);
    try {
      await api.post('/aptitude/submit-aptitude', {
        answers: answeredQuestions,
        score,
      });
      navigate('/coding-instructions');
    } catch (err) {
      console.error('Submit failed', err);
      setError('Unable to submit aptitude answers.');
    } finally {
      setLoading(false);
    }
  };

return (
  <div className="aptitude-container">

    <div className="aptitude-card">

      <div className="header">

        <h1>Aptitude Test</h1>

        <div className="timer">
          ⏰ {formattedTime}
        </div>

      </div>

      <div className="progress">

        Question {currentIndex + 1} of {sampleQuestions.length}

      </div>

      <div className="question-box">

        <h2>{currentQuestion.question}</h2>

        {currentQuestion.options.map((option) => (

          <label
            className="option"
            key={option}
          >

            <input
              type="radio"
              name={`question-${currentQuestion.id}`}
              value={option}
              checked={answers[currentQuestion.id] === option}
              onChange={() => handleOptionChange(option)}
            />

            {option}

          </label>

        ))}

      </div>

      <div className="navigation">

        <button
          disabled={currentIndex === 0}
          onClick={() => setCurrentIndex((idx) => idx - 1)}
        >
          Previous
        </button>

        <button
          disabled={currentIndex === sampleQuestions.length - 1}
          onClick={() => setCurrentIndex((idx) => idx + 1)}
        >
          Next
        </button>

      </div>

      <button
        className="submit-btn"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? 'Submitting...' : 'Submit Test'}
      </button>

      {error && <p className="error">{error}</p>}

    </div>

  </div>
);
}

export default AptitudeTest;
