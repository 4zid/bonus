import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";
import type { WorkoutLog } from "@/lib/types";

function toWorkoutLog(row: Record<string, unknown>): WorkoutLog {
  return {
    id: row.id as string,
    workoutDayId: row.workout_day_id as string,
    exerciseNumber: row.exercise_number as string,
    exerciseName: row.exercise_name as string,
    loggedDate: row.logged_date as string,
    setsCompleted: row.sets_completed as number,
    repsCompleted: row.reps_completed as string,
    weightKg: row.weight_kg as number | null,
  };
}

export async function GET(req: NextRequest) {
  const dayId = req.nextUrl.searchParams.get("dayId");
  const limit = parseInt(req.nextUrl.searchParams.get("limit") ?? "4", 10);
  if (!dayId) {
    return NextResponse.json({ error: "dayId required" }, { status: 400 });
  }

  const { rows: dateRows } = await sql`
    SELECT DISTINCT logged_date FROM workout_logs
    WHERE workout_day_id = ${dayId}
    ORDER BY logged_date DESC
    LIMIT ${limit}
  `;
  const dates = dateRows.map((r) => r.logged_date as string);

  if (dates.length === 0) {
    return NextResponse.json([]);
  }

  const { rows } = await sql`
    SELECT * FROM workout_logs
    WHERE workout_day_id = ${dayId}
      AND logged_date >= ${dates[dates.length - 1]}
      AND logged_date <= ${dates[0]}
    ORDER BY logged_date DESC
  `;

  const dateSet = new Set(dates);
  const filtered = rows.filter((r) => dateSet.has(r.logged_date as string));
  const grouped = dates.map((date) => ({
    date,
    logs: filtered.filter((r) => r.logged_date === date).map(toWorkoutLog),
  }));

  return NextResponse.json(grouped);
}
