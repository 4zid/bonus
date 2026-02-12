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
  const date = req.nextUrl.searchParams.get("date");
  if (!dayId || !date) {
    return NextResponse.json({ error: "dayId and date required" }, { status: 400 });
  }
  const { rows } = await sql`
    SELECT * FROM workout_logs
    WHERE workout_day_id = ${dayId} AND logged_date = ${date}
  `;
  return NextResponse.json(rows.map(toWorkoutLog));
}

export async function POST(req: NextRequest) {
  const body: WorkoutLog = await req.json();
  await sql`
    INSERT INTO workout_logs (id, workout_day_id, exercise_number, exercise_name, logged_date, sets_completed, reps_completed, weight_kg)
    VALUES (${body.id}, ${body.workoutDayId}, ${body.exerciseNumber}, ${body.exerciseName}, ${body.loggedDate}, ${body.setsCompleted}, ${body.repsCompleted}, ${body.weightKg})
    ON CONFLICT (id) DO UPDATE SET
      sets_completed = EXCLUDED.sets_completed,
      reps_completed = EXCLUDED.reps_completed,
      weight_kg = EXCLUDED.weight_kg
  `;
  return NextResponse.json({ ok: true });
}
