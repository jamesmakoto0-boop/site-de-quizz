import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';
import {
  TrendingUp,
  TrendingDown,
  Calendar,
  Target,
  CheckCircle2,
  XCircle,
  Clock,
  Home,
  RefreshCw,
  AlertTriangle,
  Lightbulb,
  Play,
  BookOpen
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { ThemePracticeQuiz } from './ThemePracticeQuiz';
import { getThemeQuestions } from '@/data/themeQuestions';

export const StudyPlanDashboard = ({
  score,
  totalQuestions,
  percentage,
  categoryStats,
  studyPlan,
  onHome,
  onRestart
}) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [practiceTheme, setPracticeTheme] = useState(null);

  // Prepare data for bar chart
  const chartData = Object.entries(categoryStats)
    .map(([name, stats]) => ({
      name: name.length > 15 ? name.substring(0, 15) + '...' : name,
      fullName: name,
      percentage: stats.percentage,
      status: stats.status
    }))
    .sort((a, b) => a.percentage - b.percentage);

  // Prepare Gantt-like data
  const ganttData = studyPlan.weeklyPlan.map((item, index) => {
    const startOffset = index * 2;
    return {
      ...item,
      startOffset,
      color: item.priority === 'high' ? '#ef4444' : item.priority === 'medium' ? '#f59e0b' : '#22c55e',
      hasQuiz: !!getThemeQuestions(item.category)
    };
  });

  const totalDays = Math.max(...ganttData.map(g => g.startOffset + g.duration), 14);

  const getBarColor = (percentage) => {
    if (percentage >= 80) return 'hsl(var(--success))';
    if (percentage >= 60) return 'hsl(var(--warning))';
    return 'hsl(var(--destructive))';
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      const hasQuiz = !!getThemeQuestions(data.fullName);
      return (
        <div className="bg-card border border-border rounded-lg shadow-lg p-3">
          <p className="font-semibold text-foreground">{data.fullName}</p>
          <p className="text-sm text-muted-foreground">
            Score: <span className={cn(
              "font-bold",
              data.percentage >= 70 ? "text-success" : "text-destructive"
            )}>{data.percentage}%</span>
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            {data.percentage >= 70 ? '✓ Acquired' : '✗ Needs work'}
          </p>
          {hasQuiz && (
            <p className="text-xs text-primary mt-1 font-medium">
              🎮 Click to practice!
            </p>
          )}
        </div>
      );
    }
    return null;
  };

  const handleCategoryClick = (category) => {
    const hasQuiz = !!getThemeQuestions(category);
    if (hasQuiz) {
      setPracticeTheme(category);
    } else {
      setSelectedCategory(selectedCategory === category ? null : category);
    }
  };

  const handlePracticeComplete = (score) => {
    console.log(`Practice completed for ${practiceTheme} with score: ${score}%`);
  };

  return (
    <>
      {/* Practice Quiz Modal */}
      {practiceTheme && (
        <ThemePracticeQuiz
          theme={practiceTheme}
          onClose={() => setPracticeTheme(null)}
          onComplete={handlePracticeComplete}
        />
      )}

      <div className="min-h-screen bg-gradient-hero py-8 px-4">
        <div className="max-w-6xl mx-auto space-y-6">
          
          {/* Header */}
          <div className="text-center mb-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 rounded-full px-6 py-2 mb-4">
              <AlertTriangle className="w-5 h-5" />
              <span className="font-semibold">Assessment Complete</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-2">
              Your Score: {percentage}%
            </h1>
            <p className="text-muted-foreground text-lg">
              You need 80% to pass. Click on any topic below to practice!
            </p>
          </div>

          {/* Interactive instruction */}
          <Card className="border-0 shadow-md bg-primary/5 border-l-4 border-l-primary animate-slide-up">
            <CardContent className="p-4 flex items-center gap-3">
              <Play className="w-6 h-6 text-primary" />
              <div>
                <p className="font-semibold text-foreground">Interactive Study Plan</p>
                <p className="text-sm text-muted-foreground">Click on any category in the Gantt chart to start a 10-question practice quiz with instant feedback!</p>
              </div>
            </CardContent>
          </Card>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 animate-slide-up">
            <Card className="border-0 shadow-md">
              <CardContent className="p-4 text-center">
                <CheckCircle2 className="w-8 h-8 text-success mx-auto mb-2" />
                <div className="font-display text-2xl font-bold text-success">
                  {studyPlan.acquired.length}
                </div>
                <div className="text-sm text-muted-foreground">Skills Acquired</div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md">
              <CardContent className="p-4 text-center">
                <XCircle className="w-8 h-8 text-destructive mx-auto mb-2" />
                <div className="font-display text-2xl font-bold text-destructive">
                  {studyPlan.toImprove.length}
                </div>
                <div className="text-sm text-muted-foreground">Need Practice</div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md">
              <CardContent className="p-4 text-center">
                <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="font-display text-2xl font-bold text-primary">
                  {studyPlan.totalWeeks}
                </div>
                <div className="text-sm text-muted-foreground">Weeks to Master</div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md">
              <CardContent className="p-4 text-center">
                <Target className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="font-display text-2xl font-bold text-accent">
                  80%
                </div>
                <div className="text-sm text-muted-foreground">Target Score</div>
              </CardContent>
            </Card>
          </div>

          {/* Performance Chart */}
          <Card className="border-0 shadow-lg animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <CardTitle className="font-display flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Performance by Category
                <Badge variant="secondary" className="ml-2 text-xs">Click bars to practice</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={chartData}
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
                    onClick={(data) => data?.activePayload && handleCategoryClick(data.activePayload[0].payload.fullName)}
                    style={{ cursor: 'pointer' }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis type="number" domain={[0, 100]} stroke="hsl(var(--muted-foreground))" />
                    <YAxis 
                      type="category" 
                      dataKey="name" 
                      width={100}
                      tick={{ fontSize: 12, cursor: 'pointer' }}
                      stroke="hsl(var(--muted-foreground))"
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="percentage" radius={[0, 4, 4, 0]} style={{ cursor: 'pointer' }}>
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={getBarColor(entry.percentage)} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-success" />
                  <span className="text-sm text-muted-foreground">Acquired (≥80%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-warning" />
                  <span className="text-sm text-muted-foreground">Improving (60-79%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <span className="text-sm text-muted-foreground">Needs Work (&lt;60%)</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Interactive Gantt Chart */}
          <Card className="border-0 shadow-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle className="font-display flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Interactive Study Plan
                <Badge className="bg-primary/10 text-primary ml-2">
                  <Play className="w-3 h-3 mr-1" />
                  Click to Practice
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {ganttData.length > 0 ? (
                <div className="space-y-3">
                  {/* Timeline header */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-40 text-sm font-medium text-muted-foreground">Topic</div>
                    <div className="flex-1 flex">
                      {Array.from({ length: Math.min(totalDays, 14) }).map((_, i) => (
                        <div 
                          key={i} 
                          className="flex-1 text-xs text-center text-muted-foreground border-l border-border"
                        >
                          D{i + 1}
                        </div>
                      ))}
                    </div>
                    <div className="w-20"></div>
                  </div>
                  
                  {/* Gantt bars - Now clickable */}
                  {ganttData.map((item, index) => (
                    <div 
                      key={index} 
                      className={cn(
                        "flex items-center gap-2 group rounded-lg p-1 -mx-1 transition-colors",
                        item.hasQuiz && "cursor-pointer hover:bg-primary/5"
                      )}
                      onClick={() => handleCategoryClick(item.category)}
                    >
                      <div className="w-40 text-sm font-medium truncate flex items-center gap-2" title={item.category}>
                        {item.hasQuiz && <Play className="w-3 h-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />}
                        <span className={item.hasQuiz ? "group-hover:text-primary transition-colors" : ""}>
                          {item.category}
                        </span>
                      </div>
                      <div className="flex-1 flex h-10 bg-muted/30 rounded relative">
                        <div
                          className={cn(
                            "absolute h-full rounded transition-all duration-300 flex items-center justify-center",
                            item.hasQuiz && "hover:opacity-80 hover:scale-y-110"
                          )}
                          style={{
                            left: `${(item.startOffset / totalDays) * 100}%`,
                            width: `${(item.duration / totalDays) * 100}%`,
                            backgroundColor: item.color,
                            minWidth: '60px'
                          }}
                        >
                          <span className="text-xs text-white font-medium px-2 truncate flex items-center gap-1">
                            {item.percentage}%
                            {item.hasQuiz && <BookOpen className="w-3 h-3" />}
                          </span>
                        </div>
                      </div>
                      <div className="w-20 flex items-center gap-1">
                        <Badge 
                          variant="outline" 
                          className={cn(
                            "text-xs",
                            item.priority === 'high' && "border-destructive text-destructive",
                            item.priority === 'medium' && "border-warning text-warning",
                            item.priority === 'low' && "border-success text-success"
                          )}
                        >
                          {item.priority}
                        </Badge>
                      </div>
                    </div>
                  ))}
                  
                  {/* Legend */}
                  <div className="flex flex-wrap justify-center gap-4 mt-6 pt-4 border-t border-border">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      <span className="text-sm text-muted-foreground">High Priority</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-warning" />
                      <span className="text-sm text-muted-foreground">Medium Priority</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-success" />
                      <span className="text-sm text-muted-foreground">Low Priority</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">Quiz Available</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  Great job! No topics need improvement.
                </div>
              )}
            </CardContent>
          </Card>

          {/* Selected Category Tips */}
          {selectedCategory && (
            <Card className="border-0 shadow-lg border-l-4 border-l-primary animate-slide-up">
              <CardHeader>
                <CardTitle className="font-display flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-primary" />
                  Study Tips: {selectedCategory}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {ganttData.find(g => g.category === selectedCategory)?.tips}
                </p>
                {getThemeQuestions(selectedCategory) && (
                  <Button onClick={() => setPracticeTheme(selectedCategory)}>
                    <Play className="w-4 h-4 mr-2" />
                    Start Practice Quiz
                  </Button>
                )}
              </CardContent>
            </Card>
          )}

          {/* Skills Breakdown */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Acquired Skills */}
            <Card className="border-0 shadow-lg animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <CardTitle className="font-display flex items-center gap-2 text-success">
                  <CheckCircle2 className="w-5 h-5" />
                  Acquired Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {studyPlan.acquired.length > 0 ? (
                  studyPlan.acquired.map(([category, stats], index) => (
                    <div 
                      key={index} 
                      className={cn(
                        "flex items-center justify-between p-3 bg-success/5 rounded-lg",
                        getThemeQuestions(category) && "cursor-pointer hover:bg-success/10 transition-colors"
                      )}
                      onClick={() => getThemeQuestions(category) && setPracticeTheme(category)}
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-foreground">{category}</span>
                        {getThemeQuestions(category) && <Play className="w-3 h-3 text-success" />}
                      </div>
                      <Badge className="bg-success text-success-foreground">
                        {stats.percentage}%
                      </Badge>
                    </div>
                  ))
                ) : (
                  <p className="text-muted-foreground text-center py-4">
                    Keep practicing to acquire skills!
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Skills to Improve */}
            <Card className="border-0 shadow-lg animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <CardHeader>
                <CardTitle className="font-display flex items-center gap-2 text-destructive">
                  <TrendingDown className="w-5 h-5" />
                  Skills to Improve
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {studyPlan.toImprove.map(([category, stats], index) => (
                  <div 
                    key={index} 
                    className={cn(
                      "p-3 bg-destructive/5 rounded-lg",
                      getThemeQuestions(category) && "cursor-pointer hover:bg-destructive/10 transition-colors"
                    )}
                    onClick={() => getThemeQuestions(category) && setPracticeTheme(category)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-foreground">{category}</span>
                        {getThemeQuestions(category) && (
                          <Badge variant="outline" className="text-xs border-primary text-primary">
                            <Play className="w-2 h-2 mr-1" />Quiz
                          </Badge>
                        )}
                      </div>
                      <Badge variant="destructive">
                        {stats.percentage}%
                      </Badge>
                    </div>
                    <Progress value={stats.percentage} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <Button variant="hero" size="lg" onClick={onRestart}>
              <RefreshCw className="w-5 h-5 mr-2" />
              Retake Assessment
            </Button>
            <Button variant="hero-outline" size="lg" onClick={onHome}>
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
