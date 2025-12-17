import React from 'react';
import { cn } from '@/lib/utils';

export const TimerCircle = ({ timeLeft, totalTime = 10 }) => {
  const progress = (timeLeft / totalTime) * 100;
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  
  // Determine color based on time remaining
  const getTimerColor = () => {
    if (timeLeft <= 3) return 'text-destructive stroke-destructive';
    if (timeLeft <= 5) return 'text-accent stroke-accent';
    return 'text-primary stroke-primary';
  };

  const getBackgroundRing = () => {
    if (timeLeft <= 3) return 'stroke-destructive/20';
    if (timeLeft <= 5) return 'stroke-accent/20';
    return 'stroke-primary/20';
  };

  return (
    <div className="relative flex items-center justify-center">
      {/* Glow effect for low time */}
      {timeLeft <= 3 && (
        <div className="absolute inset-0 rounded-full bg-destructive/20 blur-xl animate-pulse" />
      )}
      
      <svg
        className="transform -rotate-90 w-24 h-24 sm:w-28 sm:h-28"
        viewBox="0 0 100 100"
      >
        {/* Background circle */}
        <circle
          className={cn("fill-none stroke-[6]", getBackgroundRing())}
          cx="50"
          cy="50"
          r="45"
        />
        {/* Progress circle */}
        <circle
          className={cn(
            "fill-none stroke-[6] transition-all duration-1000 ease-linear",
            getTimerColor()
          )}
          cx="50"
          cy="50"
          r="45"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
      
      {/* Timer number */}
      <div className={cn(
        "absolute inset-0 flex items-center justify-center",
        timeLeft <= 3 && "animate-countdown"
      )}>
        <span className={cn(
          "font-display font-bold text-3xl sm:text-4xl tabular-nums",
          getTimerColor().split(' ')[0]
        )}>
          {timeLeft}
        </span>
      </div>
    </div>
  );
};
