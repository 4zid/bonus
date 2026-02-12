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
  const exerciseNumber = req.nextUrl.searchParams.get("exerciseNumber");
  const beforeDate = req.nextUrl.searchParams.get("beforeDate");
  if (!dayId || !exerciseNumber || !beforeDate) {
    return NextResponse.json({ error: "dayId, exerciseNumber and beforeDate required" }, { status: 400 });
  }

  const { rows } = await sql`
    SELECT * FROM workout_logs
    WHERE workout_day_id = ${dayId}
      AND exercise_number = ${exerciseNumber}
      AND logged_date < ${beforeDate}
    ORDER BY logged_date DESC
    LIMIT 1
  `;

  return NextResponse.json(rows.length > 0 ? toWorkoutLog(rows[0]) : null);
}
