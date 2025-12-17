import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Trophy, 
  Target, 
  Clock, 
  RefreshCw, 
  Home,
  CheckCircle2,
  XCircle,
  Sparkles,
  TrendingUp,
  Award,
  BookOpen,
  PenTool
} from 'lucide-react';
import { cn } from '@/lib/utils';

const Confetti = () => {
  const colors = [
    'hsl(var(--primary))',
    'hsl(var(--accent))',
    'hsl(var(--success))',
    'hsl(175 58% 45%)',
    'hsl(16 85% 65%)',
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="confetti-piece"
          style={{
            left: `${Math.random() * 100}%`,
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

export const ResultsScreen = ({ 
  score, 
  totalQuestions, 
  answers, 
  questions,
  totalTime,
  quizMode = 'vocabulary',
  onRestart, 
  onHome 
}) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const percentage = Math.round((score / totalQuestions) * 100);
  const correctCount = answers.filter(a => a.isCorrect).length;
  const incorrectCount = totalQuestions - correctCount;
  const averageTime = totalTime > 0 ? Math.round(totalTime / totalQuestions) : 0;
  const isGrammar = quizMode === 'grammar';

  useEffect(() => {
    if (percentage >= 70) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [percentage]);

  const getPerformanceMessage = () => {
    if (percentage >= 90) return { text: 'Outstanding!', emoji: '🏆', color: 'text-success' };
    if (percentage >= 80) return { text: 'Excellent!', emoji: '🌟', color: 'text-success' };
    if (percentage >= 70) return { text: 'Great Job!', emoji: '👏', color: 'text-primary' };
    if (percentage >= 60) return { text: 'Good Effort!', emoji: '💪', color: 'text-accent' };
    if (percentage >= 50) return { text: 'Keep Practicing!', emoji: '📚', color: 'text-accent' };
    return { text: 'Keep Learning!', emoji: '🎯', color: 'text-muted-foreground' };
  };

  const performance = getPerformanceMessage();

  const getGrade = () => {
    if (percentage >= 90) return 'A+';
    if (percentage >= 80) return 'A';
    if (percentage >= 70) return 'B';
    if (percentage >= 60) return 'C';
    if (percentage >= 50) return 'D';
    return 'F';
  };

  return (
    <>
      {showConfetti && <Confetti />}
      
      <div className="min-h-screen bg-gradient-hero py-8 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Main Score Card */}
          <Card className="border-0 shadow-lg bg-card/90 backdrop-blur-sm overflow-hidden animate-slide-up">
            <div className="bg-gradient-primary p-8 text-center">
              <div className="inline-flex items-center gap-2 bg-primary-foreground/20 rounded-full px-4 py-1.5 mb-4">
                {isGrammar ? (
                  <><PenTool className="w-4 h-4 text-primary-foreground" />
                  <span className="text-primary-foreground text-sm font-medium">Grammar Quiz Complete</span></>
                ) : (
                  <><Sparkles className="w-4 h-4 text-primary-foreground" />
                  <span className="text-primary-foreground text-sm font-medium">Vocabulary Quiz Complete</span></>
                )}
              </div>
              
              <h1 className={cn("font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-2")}>
                {performance.emoji} {performance.text}
              </h1>
              
              <div className="mt-6 inline-flex items-center justify-center w-32 h-32 rounded-full bg-primary-foreground/20 border-4 border-primary-foreground/30">
                <div className="text-center">
                  <div className="font-display text-5xl font-bold text-primary-foreground">
                    {percentage}%
                  </div>
                  <div className="text-primary-foreground/80 text-sm">Score</div>
                </div>
              </div>
            </div>

            <CardContent className="p-6 sm:p-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                <div className="bg-success/10 rounded-xl p-4 text-center">
                  <CheckCircle2 className="w-6 h-6 text-success mx-auto mb-2" />
                  <div className="font-display text-2xl font-bold text-success">{correctCount}</div>
                  <div className="text-sm text-muted-foreground">Correct</div>
                </div>
                
                <div className="bg-destructive/10 rounded-xl p-4 text-center">
                  <XCircle className="w-6 h-6 text-destructive mx-auto mb-2" />
                  <div className="font-display text-2xl font-bold text-destructive">{incorrectCount}</div>
                  <div className="text-sm text-muted-foreground">Incorrect</div>
                </div>
                
                <div className="bg-primary/10 rounded-xl p-4 text-center">
                  <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="font-display text-2xl font-bold text-primary">{averageTime}s</div>
                  <div className="text-sm text-muted-foreground">Avg. Time</div>
                </div>
                
                <div className="bg-accent/10 rounded-xl p-4 text-center">
                  <Award className="w-6 h-6 text-accent mx-auto mb-2" />
                  <div className="font-display text-2xl font-bold text-accent">{getGrade()}</div>
                  <div className="text-sm text-muted-foreground">Grade</div>
                </div>
              </div>

              {/* Progress visualization */}
              <div className="mb-8">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Your Progress</span>
                  <span className="font-medium text-primary">{score}/{totalQuestions}</span>
                </div>
                <Progress value={percentage} className="h-3" />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="flex-1"
                  onClick={onRestart}
                >
                  <RefreshCw className="w-5 h-5 mr-2" />
                  Try Again
                </Button>
                <Button 
                  variant="hero-outline" 
                  size="lg" 
                  className="flex-1"
                  onClick={onHome}
                >
                  <Home className="w-5 h-5 mr-2" />
                  Back to Home
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Review Section */}
          <Card className="border-0 shadow-lg bg-card/90 backdrop-blur-sm animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <CardTitle className="font-display flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Review Your Answers
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {questions.map((question, index) => {
                const answer = answers[index] || { isCorrect: false, selectedOption: null, timedOut: true };
                return (
                  <div 
                    key={question.id}
                    className={cn(
                      "p-4 rounded-xl border-2 transition-colors",
                      answer?.isCorrect 
                        ? "bg-success/5 border-success/30" 
                        : "bg-destructive/5 border-destructive/30"
                    )}
                  >
                    <div className="flex items-start gap-3">
                      <div className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                        answer?.isCorrect ? "bg-success text-success-foreground" : "bg-destructive text-destructive-foreground"
                      )}>
                        {answer?.isCorrect ? (
                          <CheckCircle2 className="w-4 h-4" />
                        ) : (
                          <XCircle className="w-4 h-4" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-display font-bold text-lg text-foreground">
                            {isGrammar ? `Q${index + 1}` : question.word}
                          </h3>
                          <Badge variant={answer?.isCorrect ? "default" : "destructive"} className="text-xs">
                            {answer?.isCorrect ? 'Correct' : 'Incorrect'}
                          </Badge>
                          {answer?.timedOut && (
                            <Badge variant="secondary" className="text-xs">
                              <Clock className="w-3 h-3 mr-1" />
                              Time's up
                            </Badge>
                          )}
                        </div>
                        {isGrammar && (
                          <p className="text-muted-foreground text-sm mt-1 italic">
                            {question.question}
                          </p>
                        )}
                        <p className="text-success mt-1 text-sm">
                          <span className="font-medium">Answer:</span> {question.options[question.correctIndex]}
                        </p>
                        {!answer?.isCorrect && answer?.selectedOption !== null && answer?.selectedOption !== undefined && (
                          <p className="text-destructive text-sm">
                            <span className="font-medium">Your answer:</span> {question.options[answer.selectedOption]}
                          </p>
                        )}
                        {isGrammar && question.explanation && (
                          <p className="text-muted-foreground text-xs mt-2 bg-muted/50 p-2 rounded">
                            {question.explanation}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};
