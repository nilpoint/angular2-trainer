import { Exercise } from './Exercise';

export class ExercisePlan {
  constructor(
    public exercise: Exercise,
    public duration: number) {}
}