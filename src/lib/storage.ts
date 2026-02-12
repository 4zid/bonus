import type { WorkoutLog } from "./types";

const STORAGE_KEY = "fitbulk_logs";

function getAllLogs(): WorkoutLog[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveAllLogs(logs: WorkoutLog[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(logs));
}

export function getLogsForDate(dayId: string, date: string): WorkoutLog[] {
  return getAllLogs().filter(
    (l) => l.workoutDayId === dayId && l.loggedDate === date,
  );
}

export function saveLog(log: WorkoutLog): void {
  const logs = getAllLogs();
  const idx = logs.findIndex((l) => l.id === log.id);
  if (idx >= 0) {
    logs[idx] = log;
  } else {
    logs.push(log);
  }
  saveAllLogs(logs);
}

export function getRecentLogs(
  dayId: string,
  limit = 4,
): { date: string; logs: WorkoutLog[] }[] {
  const all = getAllLogs().filter((l) => l.workoutDayId === dayId);
  const dates = [...new Set(all.map((l) => l.loggedDate))]
    .sort()
    .reverse()
    .slice(0, limit);
  return dates.map((date) => ({
    date,
    logs: all.filter((l) => l.loggedDate === date),
  }));
}

export function getLastLogForExercise(
  dayId: string,
  exerciseNumber: string,
  beforeDate: string,
): WorkoutLog | null {
  const all = getAllLogs().filter(
    (l) =>
      l.workoutDayId === dayId &&
      l.exerciseNumber === exerciseNumber &&
      l.loggedDate < beforeDate,
  );
  if (all.length === 0) return null;
  all.sort((a, b) => b.loggedDate.localeCompare(a.loggedDate));
  return all[0];
}
