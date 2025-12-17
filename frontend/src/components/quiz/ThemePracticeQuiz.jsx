import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { X, CheckCircle2, XCircle, ArrowRight, RotateCcw, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getThemeQuestions } from '@/data/themeQuestions';

const TIMER_DURATION = 15;

export const ThemePracticeQuiz = ({ theme, onClose, onComplete }) => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(TIMER_DURATION);
  const [answers, setAnswers] = useState([]);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const themeQs = getThemeQuestions(theme);
    if (themeQs && themeQs.length > 0) {
      setQuestions(themeQs.slice(0, 10));
    }
  }, [theme]);

  // Timer
  useEffect(() => {
    if (isComplete || showResult || questions.length === 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleAnswer(null);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentIndex, isComplete, showResult, questions.length]);

  const handleAnswer = useCallback((optionIndex) => {
    if (showResult) return;

    const currentQuestion = questions[currentIndex];
    const isCorrect = optionIndex === currentQuestion?.correctIndex;

    setSelectedOption(optionIndex);
    setAnswers(prev => [...prev, { 
      questionId: currentQuestion?.id, 
      isCorrect, 
      selectedOption: optionIndex 
    }]);
    setShowResult(true);
  }, [currentIndex, questions, showResult]);

  const handleNext = useCallback(() => {
    if (currentIndex + 1 >= questions.length) {
      setIsComplete(true);
    } else {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setShowResult(false);
      setTimeLeft(TIMER_DURATION);
    }
  }, [currentIndex, questions.length]);

  const handleRestart = () => {
    const themeQs = getThemeQuestions(theme);
    if (themeQs) {
      setQuestions(themeQs.slice(0, 10));
    }
    setCurrentIndex(0);
    setSelectedOption(null);
    setShowResult(false);
    setTimeLeft(TIMER_DURATION);
    setAnswers([]);
    setIsComplete(false);
  };

  const score = answers.filter(a => a.isCorrect).length;
  const percentage = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;

  if (questions.length === 0) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-lg">
          <CardContent className="p-6 text-center">
            <p className="text-muted-foreground">No practice questions available for this theme.</p>
            <Button onClick={onClose} className="mt-4">Close</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Results screen
  if (isComplete) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
        <Card className="w-full max-w-2xl my-8 animate-slide-up">
          <CardHeader className="bg-gradient-primary text-primary-foreground rounded-t-lg">
            <div className="flex items-center justify-between">
              <CardTitle className="font-display flex items-center gap-2">
                <Trophy className="w-6 h-6" />
                Practice Complete!
              </CardTitle>
              <Button variant="ghost" size="icon" onClick={onClose} className="text-primary-foreground hover:bg-primary-foreground/20">
                <X className="w-5 h-5" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            {/* Score */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-4">
                <span className="font-display text-4xl font-bold text-primary">{percentage}%</span>
              </div>
              <h3 className="font-display text-xl font-bold">{theme}</h3>
              <p className="text-muted-foreground">{score} / {questions.length} correct</p>
            </div>

            <Progress value={percentage} className="h-3 mb-6" />

            {/* Review */}
            <div className="space-y-3 max-h-60 overflow-y-auto">
              {questions.map((q, idx) => {
                const answer = answers[idx];
                return (
                  <div key={idx} className={cn(
                    "p-3 rounded-lg border text-sm",
                    answer?.isCorrect ? "bg-success/5 border-success/30" : "bg-destructive/5 border-destructive/30"
                  )}>
                    <div className="flex items-start gap-2">
                      {answer?.isCorrect ? (
                        <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      ) : (
                        <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                      )}
                      <div>
                        <p className="font-medium">{q.question}</p>
                        <p className="text-success text-xs mt-1">Answer: {q.options[q.correctIndex]}</p>
                        {!answer?.isCorrect && <p className="text-muted-foreground text-xs">{q.feedback}</p>}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-6">
              <Button variant="outline" onClick={handleRestart} className="flex-1">
                <RotateCcw className="w-4 h-4 mr-2" />
                Practice Again
              </Button>
              <Button onClick={() => { onComplete?.(percentage); onClose(); }} className="flex-1">
                Done
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl animate-slide-up">
        <CardHeader className="border-b">
          <div className="flex items-center justify-between">
            <div>
              <Badge className="mb-2 bg-primary/10 text-primary">{theme}</Badge>
              <CardTitle className="font-display text-lg">Practice Quiz</CardTitle>
            </div>
            <div className="flex items-center gap-4">
              {/* Timer */}
              <div className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-lg",
                timeLeft <= 5 ? "bg-destructive/10 text-destructive" : "bg-primary/10 text-primary"
              )}>
                {timeLeft}
              </div>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="w-5 h-5" />
              </Button>
            </div>
          </div>
          <Progress value={((currentIndex + 1) / questions.length) * 100} className="h-2 mt-4" />
          <p className="text-xs text-muted-foreground mt-2">Question {currentIndex + 1} of {questions.length}</p>
        </CardHeader>

        <CardContent className="p-6">
          {/* Question */}
          <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-6">
            {currentQuestion?.question}
          </h3>

          {/* Options */}
          <div className="space-y-3">
            {currentQuestion?.options.map((option, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === currentQuestion.correctIndex;
              const showCorrect = showResult && isCorrect;
              const showWrong = showResult && isSelected && !isCorrect;

              return (
                <button
                  key={idx}
                  onClick={() => !showResult && handleAnswer(idx)}
                  disabled={showResult}
                  className={cn(
                    "w-full p-4 rounded-xl border-2 text-left transition-all duration-200 flex items-center gap-3",
                    showCorrect && "border-success bg-success/10",
                    showWrong && "border-destructive bg-destructive/10",
                    !showResult && isSelected && "border-primary bg-primary/10",
                    !showResult && !isSelected && "border-border hover:border-primary/50 hover:bg-primary/5",
                    showResult && "cursor-default"
                  )}
                >
                  <div className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center font-bold flex-shrink-0",
                    showCorrect && "bg-success text-success-foreground",
                    showWrong && "bg-destructive text-destructive-foreground",
                    !showResult && isSelected && "bg-primary text-primary-foreground",
                    !showResult && !isSelected && "bg-muted text-muted-foreground"
                  )}>
                    {showCorrect ? <CheckCircle2 className="w-4 h-4" /> : 
                     showWrong ? <XCircle className="w-4 h-4" /> : 
                     String.fromCharCode(65 + idx)}
                  </div>
                  <span className="font-medium">{option}</span>
                </button>
              );
            })}
          </div>

          {/* Feedback */}
          {showResult && (
            <div className={cn(
              "mt-6 p-4 rounded-xl",
              selectedOption === currentQuestion?.correctIndex
                ? "bg-success/10 border border-success/30"
                : "bg-amber-50 border border-amber-200"
            )}>
              <p className={cn(
                "font-semibold mb-1",
                selectedOption === currentQuestion?.correctIndex ? "text-success" : "text-amber-800"
              )}>
                {selectedOption === currentQuestion?.correctIndex ? "Correct!" : "Incorrect"}
              </p>
              <p className="text-sm text-muted-foreground">{currentQuestion?.feedback}</p>
            </div>
          )}

          {/* Next Button */}
          {showResult && (
            <Button onClick={handleNext} className="w-full mt-6" size="lg">
              {currentIndex + 1 === questions.length ? "See Results" : "Next Question"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
