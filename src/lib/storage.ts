import type { WorkoutLog } from "./types";

export async function getLogsForDate(
  dayId: string,
  date: string,
): Promise<WorkoutLog[]> {
  const res = await fetch(`/api/logs?dayId=${dayId}&date=${date}`);
  return res.json();
}

export async function saveLog(log: WorkoutLog): Promise<void> {
  await fetch("/api/logs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(log),
  });
}

export async function getRecentLogs(
  dayId: string,
  limit = 4,
): Promise<{ date: string; logs: WorkoutLog[] }[]> {
  const res = await fetch(`/api/logs/recent?dayId=${dayId}&limit=${limit}`);
  return res.json();
}

export async function getLastLogForExercise(
  dayId: string,
  exerciseNumber: string,
  beforeDate: string,
): Promise<WorkoutLog | null> {
  const res = await fetch(
    `/api/logs/last?dayId=${dayId}&exerciseNumber=${exerciseNumber}&beforeDate=${beforeDate}`,
  );
  return res.json();
}
