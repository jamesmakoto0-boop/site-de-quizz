import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { BilanQuestionCard } from './BilanQuestionCard';
import { ProgressBar } from './ProgressBar';
import { Certificate } from './Certificate';
import { StudyPlanDashboard } from './StudyPlanDashboard';
import { getBilanQuestions, analyzeResults, generateStudyPlan } from '@/data/bilan';
import { Home } from 'lucide-react';

const TIMER_DURATION = 15; // 15 seconds per question for bilan
const PASSING_SCORE = 80;

export const BilanQuiz = ({ onGoHome }) => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timeLeft, setTimeLeft] = useState(TIMER_DURATION);
  const [answers, setAnswers] = useState([]);
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Initialize quiz
  useEffect(() => {
    startNewQuiz();
  }, []);

  const startNewQuiz = useCallback(() => {
    const newQuestions = getBilanQuestions();
    setQuestions(newQuestions);
    setCurrentIndex(0);
    setSelectedOption(null);
    setTimeLeft(TIMER_DURATION);
    setAnswers([]);
    setIsQuizComplete(false);
    setIsTransitioning(false);
  }, []);

  // Timer logic
  useEffect(() => {
    if (isQuizComplete || isTransitioning) return;

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
  }, [currentIndex, isQuizComplete, isTransitioning]);

  const handleTimeUp = useCallback(() => {
    if (isTransitioning) return;
    
    const currentQuestion = questions[currentIndex];
    
    const answer = {
      questionId: currentQuestion?.id,
      selectedOption: selectedOption,
      isCorrect: selectedOption === currentQuestion?.correctIndex,
      timedOut: selectedOption === null
    };

    setAnswers(prev => [...prev, answer]);
    moveToNextQuestion();
  }, [currentIndex, questions, selectedOption, isTransitioning]);

  const handleSelectOption = useCallback((optionIndex) => {
    if (isTransitioning) return;
    setSelectedOption(optionIndex);
  }, [isTransitioning]);

  const handleNextQuestion = useCallback(() => {
    if (isTransitioning || selectedOption === null) return;
    
    const currentQuestion = questions[currentIndex];
    const isCorrect = selectedOption === currentQuestion.correctIndex;

    const answer = {
      questionId: currentQuestion.id,
      selectedOption,
      isCorrect,
      timedOut: false
    };

    setAnswers(prev => [...prev, answer]);
    moveToNextQuestion();
  }, [currentIndex, questions, selectedOption, isTransitioning]);

  const moveToNextQuestion = useCallback(() => {
    setIsTransitioning(true);
    
    setTimeout(() => {
      if (currentIndex + 1 >= questions.length) {
        setIsQuizComplete(true);
      } else {
        setCurrentIndex(prev => prev + 1);
        setSelectedOption(null);
        setTimeLeft(TIMER_DURATION);
      }
      setIsTransitioning(false);
    }, 300);
  }, [currentIndex, questions.length]);

  // Calculate results
  const score = answers.filter(a => a.isCorrect).length;
  const percentage = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;
  const passed = percentage >= PASSING_SCORE;

  if (isQuizComplete) {
    if (passed) {
      return (
        <Certificate
          score={score}
          totalQuestions={questions.length}
          percentage={percentage}
          onHome={onGoHome}
          onRestart={startNewQuiz}
        />
      );
    } else {
      const categoryStats = analyzeResults(questions, answers);
      const studyPlan = generateStudyPlan(categoryStats);
      
      return (
        <StudyPlanDashboard
          score={score}
          totalQuestions={questions.length}
          percentage={percentage}
          categoryStats={categoryStats}
          studyPlan={studyPlan}
          onHome={onGoHome}
          onRestart={startNewQuiz}
        />
      );
    }
  }

  const currentQuestion = questions[currentIndex];

  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading assessment...</p>
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
              Exit Assessment
            </Button>
            <div className="text-sm font-medium text-amber-600 bg-amber-100 px-3 py-1 rounded-full">
              Assessment Mode • No Feedback
            </div>
          </div>
          <ProgressBar current={currentIndex + 1} total={questions.length} />
        </div>
      </header>

      {/* Quiz Content */}
      <main className="max-w-3xl mx-auto px-4 py-8">
        <BilanQuestionCard
          question={currentQuestion}
          questionNumber={currentIndex + 1}
          totalQuestions={questions.length}
          selectedOption={selectedOption}
          timeLeft={timeLeft}
          onSelectOption={handleSelectOption}
        />

        {/* Next Button */}
        <div className="mt-6 flex justify-center">
          <Button
            variant="hero"
            size="lg"
            onClick={handleNextQuestion}
            disabled={selectedOption === null}
            className="min-w-[200px]"
          >
            {currentIndex + 1 === questions.length ? 'Finish Assessment' : 'Next Question'}
          </Button>
        </div>
      </main>
    </div>
  );
};
