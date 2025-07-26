import { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { WorkoutForm } from './components/WorkoutForm';
import { WorkoutPlan } from './components/WorkoutPlan';
import { mockWorkoutPlan } from './components/mockData';
import { Button } from './components/ui/button';
import { ArrowLeft, Sparkles } from 'lucide-react';

type AppState = 'hero' | 'form' | 'plan';

export default function App() {
  const [currentState, setCurrentState] = useState<AppState>('hero');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGetStarted = () => {
    setCurrentState('form');
  };

  const handleFormSubmit = async (requirements: any) => {
    setIsGenerating(true);
    
    // Simulate AI generation with a delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsGenerating(false);
    setCurrentState('plan');
  };

  const handleBackToForm = () => {
    setCurrentState('form');
  };

  const handleBackToHome = () => {
    setCurrentState('hero');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl tracking-tight">Adaptix</span>
          </div>
          
          {currentState !== 'hero' && (
            <Button 
              variant="ghost" 
              onClick={currentState === 'form' ? handleBackToHome : handleBackToForm}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              {currentState === 'form' ? 'Back to Home' : 'Back to Form'}
            </Button>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pb-16">
        {currentState === 'hero' && (
          <HeroSection onGetStarted={handleGetStarted} />
        )}

        {currentState === 'form' && (
          <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-8">
              <h2 className="mb-4">Create Your Perfect Workout Plan</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Answer a few questions about your fitness goals and preferences, 
                and we'll generate a personalized workout plan tailored specifically for you.
              </p>
            </div>
            <WorkoutForm onSubmit={handleFormSubmit} isLoading={isGenerating} />
          </div>
        )}

        {currentState === 'plan' && (
          <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-8">
              <h2 className="mb-4">Your Personalized Workout Plan</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Here's your custom workout plan based on your goals and preferences. 
                Follow this plan consistently to achieve your fitness objectives.
              </p>
            </div>
            <WorkoutPlan plan={mockWorkoutPlan} />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="tracking-tight">Adaptix</span>
            </div>
            <p className="text-sm text-muted-foreground text-center md:text-right">
              Powered by AI to create personalized fitness experiences.<br />
              Always consult with healthcare professionals before starting any new exercise program.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}