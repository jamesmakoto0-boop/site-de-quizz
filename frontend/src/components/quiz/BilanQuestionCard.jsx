import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TimerCircle } from './TimerCircle';
import { ClipboardCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

export const BilanQuestionCard = ({
  question,
  questionNumber,
  totalQuestions,
  selectedOption,
  timeLeft,
  onSelectOption,
}) => {
  return (
    <Card className="w-full max-w-3xl mx-auto shadow-lg border-0 bg-card/80 backdrop-blur-sm animate-slide-up">
      <CardContent className="p-6 sm:p-8">
        {/* Header with Timer */}
        <div className="flex items-start justify-between gap-4 mb-8">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="secondary" className="px-3 py-1 bg-amber-100 text-amber-800 border-amber-200">
                <ClipboardCheck className="w-3.5 h-3.5 mr-1.5" />
                Assessment
              </Badge>
              <Badge variant="outline" className="px-2 py-0.5 text-xs">
                {question.category}
              </Badge>
            </div>
            
            <p className="text-muted-foreground text-sm sm:text-base mb-2">
              {question.instruction}
            </p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
              {question.question}
            </h2>
          </div>
          <TimerCircle timeLeft={timeLeft} />
        </div>

        {/* Options Grid - No feedback in Bilan mode */}
        <div className="grid gap-3 sm:gap-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => onSelectOption(index)}
              className={cn(
                "w-full p-4 sm:p-5 rounded-xl border-2 text-left transition-all duration-200",
                "flex items-center gap-4 group",
                selectedOption === index
                  ? "border-primary bg-primary/10 shadow-md"
                  : "border-border bg-card hover:border-primary/50 hover:bg-primary/5",
                "cursor-pointer active:scale-[0.98]"
              )}
            >
              {/* Option Label */}
              <div className={cn(
                "w-10 h-10 rounded-lg flex items-center justify-center font-display font-bold text-lg flex-shrink-0 transition-colors",
                selectedOption === index
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary"
              )}>
                {String.fromCharCode(65 + index)}
              </div>
              
              {/* Option Text */}
              <span className="text-base sm:text-lg font-medium leading-relaxed">
                {option}
              </span>
            </button>
          ))}
        </div>

        {/* Question counter */}
        <div className="mt-6 text-center text-sm text-muted-foreground">
          Question {questionNumber} of {totalQuestions} • No feedback until the end
        </div>
      </CardContent>
    </Card>
  );
};
