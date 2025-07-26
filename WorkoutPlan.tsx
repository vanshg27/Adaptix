import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Clock, Target, Dumbbell, Calendar } from 'lucide-react';

interface Exercise {
  name: string;
  sets: number;
  reps: string;
  restTime: string;
  notes?: string;
}

interface WorkoutDay {
  day: string;
  focus: string;
  duration: string;
  exercises: Exercise[];
}

interface WorkoutPlanData {
  title: string;
  description: string;
  duration: string;
  frequency: string;
  level: string;
  goals: string[];
  workouts: WorkoutDay[];
  tips: string[];
}

interface WorkoutPlanProps {
  plan: WorkoutPlanData;
}

export function WorkoutPlan({ plan }: WorkoutPlanProps) {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Plan Overview */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                {plan.title}
              </CardTitle>
              <CardDescription className="mt-2">
                {plan.description}
              </CardDescription>
            </div>
            <Badge variant="secondary">{plan.level}</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm">{plan.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm">{plan.frequency}</span>
            </div>
            <div className="flex items-center gap-2">
              <Dumbbell className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm">Strength Training</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm">Personalized</span>
            </div>
          </div>
          
          <Separator className="my-4" />
          
          <div>
            <h4 className="mb-2">Goals</h4>
            <div className="flex flex-wrap gap-2">
              {plan.goals.map((goal, index) => (
                <Badge key={index} variant="outline">{goal}</Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Workout Days */}
      <div className="space-y-4">
        <h3>Weekly Workout Schedule</h3>
        {plan.workouts.map((workout, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{workout.day}</span>
                <Badge variant="secondary">{workout.focus}</Badge>
              </CardTitle>
              <CardDescription>
                Duration: {workout.duration}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {workout.exercises.map((exercise, exerciseIndex) => (
                  <div key={exerciseIndex} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h5>{exercise.name}</h5>
                      <Badge variant="outline">
                        {exercise.sets} sets × {exercise.reps}
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Rest: {exercise.restTime}
                      {exercise.notes && (
                        <>
                          <br />
                          <span className="italic">Note: {exercise.notes}</span>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tips */}
      <Card>
        <CardHeader>
          <CardTitle>Training Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {plan.tips.map((tip, index) => (
              <li key={index} className="text-sm">
                • {tip}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}