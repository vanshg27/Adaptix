import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { Checkbox } from './ui/checkbox';

interface WorkoutRequirements {
  fitnessGoal: string;
  experienceLevel: string;
  workoutDuration: string;
  equipment: string[];
  daysPerWeek: string;
  specificMuscles: string;
  injuries: string;
  additionalNotes: string;
}

interface WorkoutFormProps {
  onSubmit: (requirements: WorkoutRequirements) => void;
  isLoading: boolean;
}

export function WorkoutForm({ onSubmit, isLoading }: WorkoutFormProps) {
  const [requirements, setRequirements] = useState<WorkoutRequirements>({
    fitnessGoal: '',
    experienceLevel: '',
    workoutDuration: '',
    equipment: [],
    daysPerWeek: '',
    specificMuscles: '',
    injuries: '',
    additionalNotes: ''
  });

  const equipmentOptions = [
    'Dumbbells',
    'Barbell',
    'Resistance Bands',
    'Pull-up Bar',
    'Gym Access',
    'Bodyweight Only',
    'Kettlebells',
    'Medicine Ball'
  ];

  const handleEquipmentChange = (equipment: string, checked: boolean) => {
    setRequirements(prev => ({
      ...prev,
      equipment: checked 
        ? [...prev.equipment, equipment]
        : prev.equipment.filter(e => e !== equipment)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(requirements);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Tell us about your fitness goals</CardTitle>
        <CardDescription>
          Provide your requirements and we'll generate a personalized workout plan for you
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="fitnessGoal">Primary Fitness Goal</Label>
            <Select value={requirements.fitnessGoal} onValueChange={(value) => 
              setRequirements(prev => ({ ...prev, fitnessGoal: value }))
            }>
              <SelectTrigger>
                <SelectValue placeholder="Select your main goal" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="weight-loss">Weight Loss</SelectItem>
                <SelectItem value="muscle-gain">Muscle Gain</SelectItem>
                <SelectItem value="strength">Build Strength</SelectItem>
                <SelectItem value="endurance">Improve Endurance</SelectItem>
                <SelectItem value="general-fitness">General Fitness</SelectItem>
                <SelectItem value="athletic-performance">Athletic Performance</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="experienceLevel">Experience Level</Label>
            <Select value={requirements.experienceLevel} onValueChange={(value) => 
              setRequirements(prev => ({ ...prev, experienceLevel: value }))
            }>
              <SelectTrigger>
                <SelectValue placeholder="Select your experience level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">Beginner (0-6 months)</SelectItem>
                <SelectItem value="intermediate">Intermediate (6 months - 2 years)</SelectItem>
                <SelectItem value="advanced">Advanced (2+ years)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="workoutDuration">Workout Duration</Label>
              <Select value={requirements.workoutDuration} onValueChange={(value) => 
                setRequirements(prev => ({ ...prev, workoutDuration: value }))
              }>
                <SelectTrigger>
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="15-30">15-30 minutes</SelectItem>
                  <SelectItem value="30-45">30-45 minutes</SelectItem>
                  <SelectItem value="45-60">45-60 minutes</SelectItem>
                  <SelectItem value="60+">60+ minutes</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="daysPerWeek">Days per Week</Label>
              <Select value={requirements.daysPerWeek} onValueChange={(value) => 
                setRequirements(prev => ({ ...prev, daysPerWeek: value }))
              }>
                <SelectTrigger>
                  <SelectValue placeholder="Select frequency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2-3">2-3 days</SelectItem>
                  <SelectItem value="3-4">3-4 days</SelectItem>
                  <SelectItem value="4-5">4-5 days</SelectItem>
                  <SelectItem value="5-6">5-6 days</SelectItem>
                  <SelectItem value="daily">Daily</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-3">
            <Label>Available Equipment</Label>
            <div className="grid grid-cols-2 gap-3">
              {equipmentOptions.map((equipment) => (
                <div key={equipment} className="flex items-center space-x-2">
                  <Checkbox
                    id={equipment}
                    checked={requirements.equipment.includes(equipment)}
                    onCheckedChange={(checked) => 
                      handleEquipmentChange(equipment, checked as boolean)
                    }
                  />
                  <Label htmlFor={equipment} className="text-sm">
                    {equipment}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="specificMuscles">Specific Muscle Groups (Optional)</Label>
            <Input
              id="specificMuscles"
              placeholder="e.g., chest, legs, arms, core..."
              value={requirements.specificMuscles}
              onChange={(e) => 
                setRequirements(prev => ({ ...prev, specificMuscles: e.target.value }))
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="injuries">Injuries or Limitations (Optional)</Label>
            <Textarea
              id="injuries"
              placeholder="Describe any injuries, physical limitations, or exercises to avoid..."
              value={requirements.injuries}
              onChange={(e) => 
                setRequirements(prev => ({ ...prev, injuries: e.target.value }))
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="additionalNotes">Additional Notes (Optional)</Label>
            <Textarea
              id="additionalNotes"
              placeholder="Any other preferences or requirements..."
              value={requirements.additionalNotes}
              onChange={(e) => 
                setRequirements(prev => ({ ...prev, additionalNotes: e.target.value }))
              }
            />
          </div>

          <Button 
            type="submit" 
            className="w-full" 
            disabled={isLoading || !requirements.fitnessGoal || !requirements.experienceLevel}
          >
            {isLoading ? 'Generating Your Plan...' : 'Generate Workout Plan'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}