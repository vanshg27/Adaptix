import { Button } from './ui/button';
import { ArrowRight, Zap, Target, Users } from 'lucide-react';

interface HeroSectionProps {
  onGetStarted: () => void;
}

export function HeroSection({ onGetStarted }: HeroSectionProps) {
  return (
    <div className="relative">
      {/* Hero Content */}
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-6 text-4xl md:text-6xl tracking-tight">
            AI-Powered Workout Plans
            <br />
            <span className="text-primary">Tailored Just for You</span>
          </h1>
          
          <p className="mb-8 text-xl text-muted-foreground max-w-2xl mx-auto">
            Tell us your fitness goals, available equipment, and preferences. 
            Our AI will create a personalized workout plan that adapts to your needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" onClick={onGetStarted} className="text-lg px-8">
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              See Example Plans
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-card border rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="mb-2">Instant Generation</h3>
            <p className="text-muted-foreground">
              Get your personalized workout plan in seconds, not hours. Our AI analyzes your requirements instantly.
            </p>
          </div>

          <div className="bg-card border rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h3 className="mb-2">Goal-Focused</h3>
            <p className="text-muted-foreground">
              Whether you want to lose weight, build muscle, or improve endurance, we create plans that work.
            </p>
          </div>

          <div className="bg-card border rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="mb-2">For Everyone</h3>
            <p className="text-muted-foreground">
              From beginners to advanced athletes, our plans adapt to your experience level and available equipment.
            </p>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-20" />
      </div>
    </div>
  );
}