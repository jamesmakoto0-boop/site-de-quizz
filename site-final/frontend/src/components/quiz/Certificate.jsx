import React, { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Award, Download, Share2, CheckCircle2, Calendar, User } from 'lucide-react';

export const Certificate = ({ score, totalQuestions, percentage, onHome, onRestart }) => {
  const certificateRef = useRef(null);
  const today = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const handleDownload = () => {
    // Create a simple text-based certificate for download
    const certificateText = `
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║              CERTIFICATE OF ACHIEVEMENT                      ║
║                                                              ║
║         Technical English Grammar Assessment                 ║
║                                                              ║
║  This certifies that the holder has successfully completed   ║
║  the English Grammar Assessment with excellence.             ║
║                                                              ║
║  Score: ${score}/${totalQuestions} (${percentage}%)                                    ║
║  Date: ${today}                                    ║
║                                                              ║
║  Skills Validated:                                           ║
║  ✓ Present & Past Tenses                                     ║
║  ✓ Modal Verbs & Conditionals                                ║
║  ✓ Prepositions & Articles                                   ║
║  ✓ Passive Voice & Reported Speech                           ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
    `;
    
    const blob = new Blob([certificateText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'English_Grammar_Certificate.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-hero py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Success Header */}
        <div className="text-center mb-8 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-success/10 text-success rounded-full px-6 py-2 mb-4">
            <CheckCircle2 className="w-5 h-5" />
            <span className="font-semibold">Congratulations!</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-2">
            You Passed! 🎉
          </h1>
          <p className="text-muted-foreground text-lg">
            You scored {percentage}% - Above the 80% passing threshold
          </p>
        </div>

        {/* Certificate Card */}
        <Card 
          ref={certificateRef}
          className="border-2 border-amber-200 shadow-2xl bg-gradient-to-br from-amber-50 via-white to-amber-50 overflow-hidden animate-slide-up"
          style={{ animationDelay: '0.1s' }}
        >
          {/* Certificate Header */}
          <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 p-1">
            <div className="bg-gradient-to-br from-amber-50 to-white p-6 sm:p-8">
              {/* Decorative corners */}
              <div className="absolute top-4 left-4 w-16 h-16 border-l-4 border-t-4 border-amber-400 rounded-tl-lg" />
              <div className="absolute top-4 right-4 w-16 h-16 border-r-4 border-t-4 border-amber-400 rounded-tr-lg" />
              
              <div className="text-center relative">
                <Award className="w-20 h-20 text-amber-500 mx-auto mb-4" />
                
                <Badge className="bg-amber-100 text-amber-800 border-amber-300 mb-4">
                  Official Certificate
                </Badge>
                
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-amber-800 mb-2">
                  Certificate of Achievement
                </h2>
                
                <p className="text-amber-700 text-lg mb-6">
                  Technical English Grammar Assessment
                </p>
                
                <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-6" />
                
                <p className="text-gray-600 mb-4">
                  This certifies that the holder has successfully completed the
                </p>
                
                <h3 className="font-display text-2xl font-bold text-gray-800 mb-4">
                  English Grammar Proficiency Assessment
                </h3>
                
                <p className="text-gray-600 mb-6">
                  with a score of
                </p>
                
                {/* Score Display */}
                <div className="inline-flex items-center gap-4 bg-gradient-to-r from-amber-100 to-amber-50 rounded-2xl px-8 py-4 mb-6">
                  <div className="text-center">
                    <div className="font-display text-5xl font-bold text-amber-600">
                      {percentage}%
                    </div>
                    <div className="text-amber-700 text-sm font-medium">
                      {score} / {totalQuestions} correct
                    </div>
                  </div>
                  <div className="w-px h-16 bg-amber-300" />
                  <div className="text-left">
                    <div className="font-semibold text-amber-800">Grade: A</div>
                    <div className="text-amber-600 text-sm">Excellent</div>
                  </div>
                </div>
                
                {/* Skills */}
                <div className="grid grid-cols-2 gap-3 max-w-md mx-auto mb-6">
                  {['Tenses & Verb Forms', 'Modal Verbs', 'Prepositions', 'Conditionals'].map((skill, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-success" />
                      {skill}
                    </div>
                  ))}
                </div>
                
                <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-6" />
                
                {/* Date */}
                <div className="flex items-center justify-center gap-2 text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>Issued on {today}</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <Button variant="hero" size="lg" onClick={handleDownload}>
            <Download className="w-5 h-5 mr-2" />
            Download Certificate
          </Button>
          <Button variant="hero-outline" size="lg" onClick={onHome}>
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};
