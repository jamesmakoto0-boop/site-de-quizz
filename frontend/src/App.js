import React, { useState } from 'react';
import { LandingScreen } from '@/components/quiz/LandingScreen';
import { QuizGame } from '@/components/quiz/QuizGame';
import { BilanQuiz } from '@/components/quiz/BilanQuiz';
import { Toaster } from '@/components/ui/sonner';
import '@/App.css';

function App() {
  const [gameState, setGameState] = useState('home'); // 'home' | 'playing' | 'bilan'
  const [questionCount, setQuestionCount] = useState(10);
  const [quizMode, setQuizMode] = useState('vocabulary'); // 'vocabulary' | 'grammar'

  const handleStartQuiz = (count, mode) => {
    setQuestionCount(count);
    setQuizMode(mode);
    setGameState('playing');
  };

  const handleStartBilan = () => {
    setGameState('bilan');
  };

  const handleGoHome = () => {
    setGameState('home');
  };

  return (
    <div className="App">
      {gameState === 'home' ? (
        <LandingScreen 
          onStartQuiz={handleStartQuiz} 
          onStartBilan={handleStartBilan}
        />
      ) : gameState === 'bilan' ? (
        <BilanQuiz onGoHome={handleGoHome} />
      ) : (
        <QuizGame 
          questionCount={questionCount}
          quizMode={quizMode}
          onGoHome={handleGoHome} 
        />
      )}
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
