import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { OptionCard } from './OptionCard';
import { TimerCircle } from './TimerCircle';
import { BookOpen, PenTool } from 'lucide-react';

export const QuestionCard = ({
  question,
  selectedOption,
  showResult,
  timeLeft,
  onSelectOption,
  quizMode = 'vocabulary' // 'vocabulary' or 'grammar'
}) => {
  const isGrammar = quizMode === 'grammar';

  return (
    <Card className="w-full max-w-3xl mx-auto shadow-lg border-0 bg-card/80 backdrop-blur-sm animate-slide-up">
      <CardContent className="p-6 sm:p-8">
        {/* Header with Timer */}
        <div className="flex items-start justify-between gap-4 mb-8">
          <div className="flex-1">
            <Badge variant="secondary" className="mb-3 px-3 py-1">
              {isGrammar ? (
                <><PenTool className="w-3.5 h-3.5 mr-1.5" />Grammar</>
              ) : (
                <><BookOpen className="w-3.5 h-3.5 mr-1.5" />Technical Term</>
              )}
            </Badge>
            
            {isGrammar ? (
              <>
                <p className="text-muted-foreground text-sm sm:text-base mb-2">
                  {question.instruction}
                </p>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
                  {question.question}
                </h2>
              </>
            ) : (
              <>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-2">
                  {question.word}
                </h2>
                <p className="text-muted-foreground text-base sm:text-lg">
                  What is the definition of this term?
                </p>
              </>
            )}
          </div>
          <TimerCircle timeLeft={timeLeft} />
        </div>

        {/* Options Grid */}
        <div className="grid gap-3 sm:gap-4">
          {question.options.map((option, index) => (
            <OptionCard
              key={index}
              option={option}
              index={index}
              isSelected={selectedOption === index}
              isCorrect={index === question.correctIndex}
              showResult={showResult}
              onClick={() => onSelectOption(index)}
              disabled={showResult}
            />
          ))}
        </div>

        {/* Grammar explanation after answer */}
        {isGrammar && showResult && question.explanation && (
          <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-primary">Explanation:</span> {question.explanation}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
