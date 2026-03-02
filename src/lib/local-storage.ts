import type { WorkoutLog } from "./types";

const STORAGE_KEY = "fitbulk_workout_logs";

function getAllLogs(): WorkoutLog[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveLogs(logs: WorkoutLog[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(logs));
}

export function localGetLogsForDate(
  dayId: string,
  date: string,
): WorkoutLog[] {
  return getAllLogs().filter(
    (l) => l.workoutDayId === dayId && l.loggedDate === date,
  );
}

export function localSaveLog(log: WorkoutLog): void {
  const logs = getAllLogs();
  const idx = logs.findIndex((l) => l.id === log.id);
  if (idx >= 0) {
    logs[idx] = log;
  } else {
    logs.push(log);
  }
  saveLogs(logs);
}

export function localGetRecentLogs(
  dayId: string,
  limit = 4,
): { date: string; logs: WorkoutLog[] }[] {
  const logs = getAllLogs().filter((l) => l.workoutDayId === dayId);
  const dates = [...new Set(logs.map((l) => l.loggedDate))].sort(
    (a, b) => b.localeCompare(a),
  );
  return dates.slice(0, limit).map((date) => ({
    date,
    logs: logs.filter((l) => l.loggedDate === date),
  }));
}

export function localGetLastLogForExercise(
  dayId: string,
  exerciseNumber: string,
  beforeDate: string,
): WorkoutLog | null {
  const logs = getAllLogs()
    .filter(
      (l) =>
        l.workoutDayId === dayId &&
        l.exerciseNumber === exerciseNumber &&
        l.loggedDate < beforeDate,
    )
    .sort((a, b) => b.loggedDate.localeCompare(a.loggedDate));
  return logs[0] ?? null;
}
