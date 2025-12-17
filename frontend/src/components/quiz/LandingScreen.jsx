import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Clock, 
  Target, 
  Sparkles, 
  Brain,
  Trophy,
  Zap,
  ChevronRight,
  PenTool,
  Cpu,
  MessageSquare,
  ClipboardCheck,
  Award,
  BarChart3
} from 'lucide-react';

export const LandingScreen = ({ onStartQuiz, onStartBilan }) => {
  const [questionCount, setQuestionCount] = useState(10);
  const [quizMode, setQuizMode] = useState('vocabulary'); // 'vocabulary' | 'grammar' | 'bilan'

  const vocabularyQuestionOptions = [5, 10, 15, 20];
  const grammarQuestionOptions = [10, 15, 20, 30];
  const questionOptions = quizMode === 'grammar' ? grammarQuestionOptions : vocabularyQuestionOptions;

  const vocabularyFeatures = [
    { icon: Cpu, title: '100 Terms', description: 'Electronics, circuits, tools & welding' },
    { icon: Clock, title: '10s Timer', description: 'Challenge yourself against the clock' },
    { icon: Target, title: 'Instant Feedback', description: 'Learn from your mistakes immediately' },
    { icon: Trophy, title: 'Track Progress', description: 'See your score and detailed review' }
  ];

  const grammarFeatures = [
    { icon: PenTool, title: '30 Questions', description: 'Tenses, prepositions, modals & more' },
    { icon: Clock, title: '10s Timer', description: 'Think fast, answer faster' },
    { icon: MessageSquare, title: 'Explanations', description: 'Understand why answers are correct' },
    { icon: Trophy, title: 'Track Progress', description: 'See your score and detailed review' }
  ];

  const bilanFeatures = [
    { icon: ClipboardCheck, title: '50 Questions', description: 'Complete grammar assessment' },
    { icon: Clock, title: '15s Timer', description: 'More time for careful thinking' },
    { icon: Award, title: 'Certificate', description: 'Get certified if you score 80%+' },
    { icon: BarChart3, title: 'Study Plan', description: 'Personalized Gantt chart if below 80%' }
  ];

  const features = quizMode === 'bilan' ? bilanFeatures : quizMode === 'grammar' ? grammarFeatures : vocabularyFeatures;

  const handleModeChange = (mode) => {
    setQuizMode(mode);
    setQuestionCount(mode === 'grammar' ? 10 : 10);
  };

  const handleStart = () => {
    if (quizMode === 'bilan') {
      onStartBilan();
    } else {
      onStartQuiz(questionCount, quizMode);
    }
  };

  const getButtonText = () => {
    if (quizMode === 'bilan') return 'Start Assessment';
    if (quizMode === 'grammar') return 'Start Grammar Quiz';
    return 'Start Vocabulary Quiz';
  };

  const getSubtitle = () => {
    if (quizMode === 'bilan') {
      return 'Take the complete assessment with 50 grammar questions. Score 80%+ to get your certificate, or receive a personalized study plan!';
    }
    if (quizMode === 'grammar') {
      return 'Test your English grammar with 30 carefully crafted questions. Master tenses, prepositions, modals and more!';
    }
    return 'Learn 100 essential technical terms: electronics, circuits, welding, tools & more. Beat the 10-second timer!';
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-6xl mx-auto px-4 pt-12 pb-10 sm:pt-20 sm:pb-16">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-6 px-4 py-1.5 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
              <Sparkles className="w-3.5 h-3.5 mr-1.5" />
              Technical English Learning
            </Badge>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Master
              <span className="text-gradient-primary"> Technical</span>
              <br />
              English Skills
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              {getSubtitle()}
            </p>

            {/* Quiz Mode Selector */}
            <Card className="inline-block mb-6 border-0 shadow-lg bg-card/80 backdrop-blur-sm">
              <CardContent className="p-4 sm:p-6">
                <p className="text-sm font-medium text-muted-foreground mb-3">Choose quiz mode:</p>
                <div className="flex gap-2 sm:gap-3 justify-center mb-6 flex-wrap">
                  <button
                    onClick={() => handleModeChange('vocabulary')}
                    className={`
                      flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold transition-all duration-200
                      ${quizMode === 'vocabulary' 
                        ? 'bg-primary text-primary-foreground shadow-md scale-105' 
                        : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                      }
                    `}
                  >
                    <Cpu className="w-4 h-4" />
                    Vocabulary
                  </button>
                  <button
                    onClick={() => handleModeChange('grammar')}
                    className={`
                      flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold transition-all duration-200
                      ${quizMode === 'grammar' 
                        ? 'bg-primary text-primary-foreground shadow-md scale-105' 
                        : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                      }
                    `}
                  >
                    <PenTool className="w-4 h-4" />
                    Grammar
                  </button>
                  <button
                    onClick={() => handleModeChange('bilan')}
                    className={`
                      flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold transition-all duration-200
                      ${quizMode === 'bilan' 
                        ? 'bg-amber-500 text-white shadow-md scale-105' 
                        : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                      }
                    `}
                  >
                    <ClipboardCheck className="w-4 h-4" />
                    Assessment
                  </button>
                </div>

                {quizMode !== 'bilan' && (
                  <>
                    <p className="text-sm font-medium text-muted-foreground mb-3">Number of questions:</p>
                    <div className="flex gap-2 sm:gap-3 justify-center">
                      {questionOptions.map((count) => (
                        <button
                          key={count}
                          onClick={() => setQuestionCount(count)}
                          className={`
                            px-4 sm:px-6 py-2.5 rounded-lg font-display font-semibold text-lg transition-all duration-200
                            ${questionCount === count 
                              ? 'bg-primary text-primary-foreground shadow-md scale-105' 
                              : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                            }
                          `}
                        >
                          {count}
                        </button>
                      ))}
                    </div>
                  </>
                )}

                {quizMode === 'bilan' && (
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-left">
                    <h4 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      Assessment Mode
                    </h4>
                    <ul className="text-sm text-amber-700 space-y-1">
                      <li>• 50 grammar questions without feedback</li>
                      <li>• 15 seconds per question</li>
                      <li>• Score 80%+ → Get your certificate!</li>
                      <li>• Below 80% → Get a personalized study plan</li>
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant={quizMode === 'bilan' ? 'default' : 'hero'}
                size="xl" 
                onClick={handleStart}
                className={`min-w-[200px] ${quizMode === 'bilan' ? 'bg-amber-500 hover:bg-amber-600 text-white' : ''}`}
              >
                <Zap className="w-5 h-5 mr-2" />
                {getButtonText()}
                <ChevronRight className="w-5 h-5 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`border-0 shadow-md bg-card/60 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300 animate-slide-up ${quizMode === 'bilan' ? 'border-l-2 border-l-amber-400' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-5 sm:p-6 text-center">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${quizMode === 'bilan' ? 'bg-gradient-to-br from-amber-400 to-amber-600' : 'bg-gradient-primary'}`}>
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How it works */}
        <Card className="mt-12 border-0 shadow-lg bg-card/80 backdrop-blur-sm">
          <CardContent className="p-6 sm:p-10">
            <div className="text-center mb-8">
              <Badge variant="secondary" className="mb-3">
                <Brain className="w-3.5 h-3.5 mr-1.5" />
                How It Works
              </Badge>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                {quizMode === 'bilan' ? 'Assessment Process' : 'Simple & Effective Learning'}
              </h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-8">
              {(quizMode === 'bilan' ? [
                  { step: '01', title: 'Take the Test', desc: 'Answer 50 grammar questions without feedback' },
                  { step: '02', title: 'Get Results', desc: 'See your score and performance analysis' },
                  { step: '03', title: 'Certificate or Plan', desc: '80%+ = Certificate, Below = Study Plan' }
                ] : quizMode === 'grammar' ? [
                  { step: '01', title: 'Read the Sentence', desc: 'A grammar question appears on screen' },
                  { step: '02', title: 'Choose Answer', desc: 'Select the correct option from choices' },
                  { step: '03', title: 'Learn Why', desc: 'See explanations for correct answers!' }
                ] : [
                  { step: '01', title: 'Read the Term', desc: 'A technical word appears on your screen' },
                  { step: '02', title: 'Select Definition', desc: 'Choose the correct meaning from 4 options' },
                  { step: '03', title: 'Beat the Timer', desc: 'Answer before 10 seconds run out!' }
                ]).map((item, index) => (
                <div key={index} className="text-center">
                  <div className={`w-14 h-14 rounded-full text-primary-foreground font-display font-bold text-xl flex items-center justify-center mx-auto mb-4 ${quizMode === 'bilan' ? 'bg-gradient-to-br from-amber-400 to-amber-600' : 'bg-gradient-primary'}`}>
                    {item.step}
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <p className="text-center text-sm text-muted-foreground">
            Master technical English • Vocabulary • Grammar • Assessment • Certificate
          </p>
        </div>
      </footer>
    </div>
  );
};
