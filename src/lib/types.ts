import type { MealOption } from "@/data/dieta";

export type Section = "rutina" | "dieta" | "progreso" | "extras";

export interface WorkoutLog {
  id: string;
  workoutDayId: string;
  exerciseNumber: string;
  exerciseName: string;
  loggedDate: string;
  setsCompleted: number;
  repsCompleted: string;
  weightKg: number | null;
}

export interface GeneratedMeal {
  mealTimeName: string;
  emoji: string;
  option: MealOption;
}

export interface GeneratedMenu {
  meals: GeneratedMeal[];
  totals: { kcal: number; protein: number; carbs: number };
}
