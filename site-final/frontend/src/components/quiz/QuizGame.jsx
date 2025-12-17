import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { QuestionCard } from './QuestionCard';
import { ProgressBar } from './ProgressBar';
import { ResultsScreen } from './ResultsScreen';
import { getRandomQuestions } from '@/data/vocabulary';
import { getRandomGrammarQuestions } from '@/data/grammar';
import { Home } from 'lucide-react';

const TIMER_DURATION = 10;

export const QuizGame = ({ questionCount = 10, quizMode = 'vocabulary', onGoHome }) => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(TIMER_DURATION);
  const [answers, setAnswers] = useState([]);
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [totalTimeUsed, setTotalTimeUsed] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Initialize quiz
  useEffect(() => {
    startNewQuiz();
  }, [questionCount, quizMode]);

  const startNewQuiz = useCallback(() => {
    const newQuestions = quizMode === 'grammar' 
      ? getRandomGrammarQuestions(questionCount)
      : getRandomQuestions(questionCount);
    setQuestions(newQuestions);
    setCurrentIndex(0);
    setSelectedOption(null);
    setShowResult(false);
    setTimeLeft(TIMER_DURATION);
    setAnswers([]);
    setIsQuizComplete(false);
    setTotalTimeUsed(0);
    setIsTransitioning(false);
  }, [questionCount, quizMode]);

  // Timer logic
  useEffect(() => {
    if (isQuizComplete || showResult || isTransitioning) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentIndex, isQuizComplete, showResult, isTransitioning]);

  const handleTimeUp = useCallback(() => {
    if (showResult || isTransitioning) return;
    
    const currentQuestion = questions[currentIndex];
    
    const answer = {
      questionId: currentQuestion?.id,
      selectedOption: null,
      isCorrect: false,
      timeUsed: TIMER_DURATION,
      timedOut: true
    };

    setAnswers(prev => [...prev, answer]);
    setShowResult(true);
    setTotalTimeUsed(prev => prev + TIMER_DURATION);

    setTimeout(() => {
      moveToNextQuestion();
    }, 2500); // Longer delay for grammar to read explanation
  }, [currentIndex, questions, showResult, isTransitioning]);

  const handleSelectOption = useCallback((optionIndex) => {
    if (showResult || isTransitioning) return;
    
    setSelectedOption(optionIndex);
    
    const currentQuestion = questions[currentIndex];
    const isCorrect = optionIndex === currentQuestion.correctIndex;
    const timeUsed = TIMER_DURATION - timeLeft;

    const answer = {
      questionId: currentQuestion.id,
      selectedOption: optionIndex,
      isCorrect,
      timeUsed,
      timedOut: false
    };

    setAnswers(prev => [...prev, answer]);
    setShowResult(true);
    setTotalTimeUsed(prev => prev + timeUsed);

    setTimeout(() => {
      moveToNextQuestion();
    }, quizMode === 'grammar' ? 2500 : 1500); // Longer delay for grammar
  }, [currentIndex, questions, timeLeft, showResult, isTransitioning, quizMode]);

  const moveToNextQuestion = useCallback(() => {
    setIsTransitioning(true);
    
    if (currentIndex + 1 >= questions.length) {
      setIsQuizComplete(true);
    } else {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setShowResult(false);
      setTimeLeft(TIMER_DURATION);
    }
    
    setIsTransitioning(false);
  }, [currentIndex, questions.length]);

  const score = answers.filter(a => a.isCorrect).length;

  if (isQuizComplete) {
    return (
      <ResultsScreen
        score={score}
        totalQuestions={questions.length}
        answers={answers}
        questions={questions}
        totalTime={totalTimeUsed}
        quizMode={quizMode}
        onRestart={startNewQuiz}
        onHome={onGoHome}
      />
    );
  }

  const currentQuestion = questions[currentIndex];

  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading quiz...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4 mb-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onGoHome}
              className="text-muted-foreground hover:text-foreground"
            >
              <Home className="w-4 h-4 mr-2" />
              Exit Quiz
            </Button>
            <div className="text-sm font-medium text-muted-foreground">
              Score: <span className="text-primary font-bold">{score}</span> / {currentIndex + (showResult ? 1 : 0)}
            </div>
          </div>
          <ProgressBar current={currentIndex + 1} total={questions.length} />
        </div>
      </header>

      {/* Quiz Content */}
      <main className="max-w-3xl mx-auto px-4 py-8">
        <QuestionCard
          question={currentQuestion}
          selectedOption={selectedOption}
          showResult={showResult}
          timeLeft={timeLeft}
          onSelectOption={handleSelectOption}
          quizMode={quizMode}
        />

        {/* Feedback Message */}
        {showResult && (
          <div className={`
            mt-6 p-4 rounded-xl text-center animate-slide-up
            ${answers[currentIndex]?.isCorrect 
              ? 'bg-success/10 border border-success/30' 
              : answers[currentIndex]?.timedOut 
                ? 'bg-accent/10 border border-accent/30' 
                : 'bg-destructive/10 border border-destructive/30'
            }
          `}>
            <p className={`font-display font-bold text-lg ${
              answers[currentIndex]?.isCorrect 
                ? 'text-success' 
                : answers[currentIndex]?.timedOut 
                  ? 'text-accent' 
                  : 'text-destructive'
            }`}>
              {answers[currentIndex]?.isCorrect 
                ? '✓ Correct!' 
                : answers[currentIndex]?.timedOut 
                  ? "⏱ Time's up!" 
                  : '✗ Incorrect'}
            </p>
            {!answers[currentIndex]?.isCorrect && (
              <p className="text-muted-foreground text-sm mt-1">
                The correct answer is: <span className="font-medium text-foreground">{currentQuestion.options[currentQuestion.correctIndex]}</span>
              </p>
            )}
          </div>
        )}
      </main>
    </div>
  );
};
