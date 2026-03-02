import type { WorkoutLog } from "./types";
import {
  localGetLogsForDate,
  localSaveLog,
  localGetRecentLogs,
  localGetLastLogForExercise,
} from "./local-storage";

export async function getLogsForDate(
  dayId: string,
  date: string,
): Promise<WorkoutLog[]> {
  return localGetLogsForDate(dayId, date);
}

export async function saveLog(log: WorkoutLog): Promise<void> {
  localSaveLog(log);
}

export async function getRecentLogs(
  dayId: string,
  limit = 4,
): Promise<{ date: string; logs: WorkoutLog[] }[]> {
  return localGetRecentLogs(dayId, limit);
}

export async function getLastLogForExercise(
  dayId: string,
  exerciseNumber: string,
  beforeDate: string,
): Promise<WorkoutLog | null> {
  return localGetLastLogForExercise(dayId, exerciseNumber, beforeDate);
}
