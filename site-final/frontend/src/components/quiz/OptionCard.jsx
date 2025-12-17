import React from 'react';
import { cn } from '@/lib/utils';
import { Check, X } from 'lucide-react';

export const OptionCard = ({ 
  option, 
  index, 
  isSelected, 
  isCorrect, 
  showResult, 
  onClick,
  disabled 
}) => {
  const optionLabels = ['A', 'B', 'C', 'D'];
  
  const getOptionState = () => {
    if (!showResult) {
      return isSelected ? 'selected' : 'default';
    }
    if (isCorrect) return 'correct';
    if (isSelected && !isCorrect) return 'incorrect';
    return 'default';
  };

  const state = getOptionState();

  const stateStyles = {
    default: 'border-border bg-card hover:border-primary/50 hover:bg-primary/5',
    selected: 'border-primary bg-primary/10 shadow-md',
    correct: 'border-success bg-success/10 animate-success-pop',
    incorrect: 'border-destructive bg-destructive/10 animate-shake',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled || showResult}
      className={cn(
        "w-full p-4 sm:p-5 rounded-xl border-2 text-left transition-all duration-200",
        "flex items-center gap-4 group",
        stateStyles[state],
        disabled && "opacity-60 cursor-not-allowed",
        !disabled && !showResult && "cursor-pointer active:scale-[0.98]"
      )}
    >
      {/* Option Label */}
      <div className={cn(
        "w-10 h-10 rounded-lg flex items-center justify-center font-display font-bold text-lg flex-shrink-0 transition-colors",
        state === 'default' && "bg-muted text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary",
        state === 'selected' && "bg-primary text-primary-foreground",
        state === 'correct' && "bg-success text-success-foreground",
        state === 'incorrect' && "bg-destructive text-destructive-foreground"
      )}>
        {showResult && state === 'correct' ? (
          <Check className="w-5 h-5" />
        ) : showResult && state === 'incorrect' ? (
          <X className="w-5 h-5" />
        ) : (
          optionLabels[index]
        )}
      </div>
      
      {/* Option Text */}
      <span className={cn(
        "text-base sm:text-lg font-medium leading-relaxed",
        state === 'correct' && "text-success",
        state === 'incorrect' && "text-destructive"
      )}>
        {option}
      </span>
    </button>
  );
};
