import React, { useEffect, useRef, useState } from 'react';
import api from '../api';
import './CommunicationRound.css';

const questions = [
  'Introduce yourself and describe your strengths.',
  'Explain a recent project you worked on.',
  'How would you handle a difficult team member?',
];

function CommunicationRound() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [recordings, setRecordings] = useState([]);
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState('');
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [message, setMessage] = useState('');
  const audioRef = useRef(null);

  useEffect(() => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      setMessage('Microphone access is not supported in this browser.');
      return;
    }
  }, []);

  const startRecording = async () => {
    setMessage('');
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);
    const chunks = [];

    recorder.ondataavailable = (e) => {
      chunks.push(e.data);
    };

    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: 'audio/webm' });
      const url = URL.createObjectURL(blob);
      setAudioUrl(url);
      setRecordings((prev) => [...prev, { question: questions[currentIndex], blob }]);
    };

    recorder.start();
    setMediaRecorder(recorder);
    setIsRecording(true);
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setIsRecording(false);
    }
  };

  const handleUpload = async () => {
    if (!recordings.length) {
      setMessage('Record a response before uploading.');
      return;
    }

    const lastRecording = recordings[recordings.length - 1];
    const formData = new FormData();
    formData.append('audio', lastRecording.blob, `response-${currentIndex + 1}.webm`);
    formData.append('question', lastRecording.question);

    try {
      await api.post('/communication/upload-audio', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setMessage('Audio uploaded successfully.');
    } catch (error) {
      console.error('Upload failed', error);
      setMessage('Upload failed.');
    }
  };

  return (
  <div className="communication-container">

    <div className="communication-card">

      <h1>Communication Round</h1>

      <div className="question-box">

        <h2>
          Question {currentIndex + 1}
        </h2>

        <p>{questions[currentIndex]}</p>

      </div>

      <div className="record-buttons">

        <button
          disabled={isRecording}
          onClick={startRecording}
        >
          🎤 Start Recording
        </button>

        <button
          disabled={!isRecording}
          onClick={stopRecording}
        >
          ⏹ Stop Recording
        </button>

      </div>

      {audioUrl && (

        <div className="audio-section">

          <audio
            controls
            src={audioUrl}
            ref={audioRef}
          />

          <button onClick={handleUpload}>
            Upload Recording
          </button>

        </div>

      )}

      <div className="navigation-buttons">

        <button
          disabled={currentIndex === 0}
          onClick={() => setCurrentIndex((idx) => idx - 1)}
        >
          Previous
        </button>

        <button
          disabled={currentIndex === questions.length - 1}
          onClick={() => setCurrentIndex((idx) => idx + 1)}
        >
          Next
        </button>

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

export default CommunicationRound;
