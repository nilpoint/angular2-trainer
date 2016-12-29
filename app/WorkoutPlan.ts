import { ExercisePlan } from './ExercisePlan';

export class WorkoutPlan {
  constructor(
    public name: String,
    public title: String,
    public restBetweenExercise: number,
    public exercises: ExercisePlan[],
    public description?: string) {}

  totalWorkoutDuration(): number {
    if (!this.exercises) {
      return 0;
    }

    let total = this.exercises
      .map((e) => e.duration)
      .reduce((previous, current) => previous + current);

    return (this.restBetweenExercise ? this.restBetweenExercise : 0) * (this.exercises.length - 1) + total;
  }
}