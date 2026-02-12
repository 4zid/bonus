import { meals } from "@/data/dieta";
import type { GeneratedMeal, GeneratedMenu } from "./types";

export function parseNum(str: string): number {
  return parseInt(str.replace(/[^0-9]/g, ""), 10) || 0;
}

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getEligibleMeals() {
  return meals.filter((m) => !m.name.includes("SPRING ROLLS"));
}

function calculateTotals(
  selected: GeneratedMeal[],
): GeneratedMenu["totals"] {
  return selected.reduce(
    (acc, m) => ({
      kcal: acc.kcal + parseNum(m.option.kcal),
      protein: acc.protein + parseNum(m.option.protein),
      carbs: acc.carbs + parseNum(m.option.carbs),
    }),
    { kcal: 0, protein: 0, carbs: 0 },
  );
}

export function generateFullMenu(): GeneratedMenu {
  const eligible = getEligibleMeals();
  const selected: GeneratedMeal[] = eligible.map((meal) => ({
    mealTimeName: meal.name,
    emoji: meal.emoji,
    option: pickRandom(meal.options),
  }));
  return { meals: selected, totals: calculateTotals(selected) };
}

export function regenerateSingleMeal(
  menu: GeneratedMenu,
  index: number,
): GeneratedMenu {
  const eligible = getEligibleMeals();
  const mealTime = eligible[index];
  if (!mealTime) return menu;

  const currentLabel = menu.meals[index].option.label;
  const others = mealTime.options.filter((o) => o.label !== currentLabel);
  const newOption =
    others.length > 0 ? pickRandom(others) : pickRandom(mealTime.options);

  const newMeals = [...menu.meals];
  newMeals[index] = { ...newMeals[index], option: newOption };

  return { meals: newMeals, totals: calculateTotals(newMeals) };
}
