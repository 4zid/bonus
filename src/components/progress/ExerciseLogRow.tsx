"use client";

import { useState, useEffect, useCallback } from "react";
import type { Exercise } from "@/data/rutina";
import type { WorkoutLog } from "@/lib/types";
import { saveLog, getLastLogForExercise } from "@/lib/storage";

interface ExerciseLogRowProps {
  exercise: Exercise;
  workoutDayId: string;
  date: string;
  existingLog: WorkoutLog | undefined;
  color: "lime" | "orange";
}

export default function ExerciseLogRow({
  exercise,
  workoutDayId,
  date,
  existingLog,
  color,
}: ExerciseLogRowProps) {
  const [sets, setSets] = useState(existingLog?.setsCompleted ?? 0);
  const [reps, setReps] = useState(existingLog?.repsCompleted ?? "");
  const [weight, setWeight] = useState<string>(
    existingLog?.weightKg != null ? String(existingLog.weightKg) : "",
  );
  const [lastLog, setLastLog] = useState<WorkoutLog | null>(null);

  useEffect(() => {
    let cancelled = false;
    getLastLogForExercise(workoutDayId, exercise.number, date).then((prev) => {
      if (!cancelled) setLastLog(prev);
    });
    return () => { cancelled = true; };
  }, [workoutDayId, exercise.number, date]);

  useEffect(() => {
    setSets(existingLog?.setsCompleted ?? 0);
    setReps(existingLog?.repsCompleted ?? "");
    setWeight(
      existingLog?.weightKg != null ? String(existingLog.weightKg) : "",
    );
  }, [existingLog]);

  const persist = useCallback(() => {
    if (sets === 0 && reps === "" && weight === "") return;
    const log: WorkoutLog = {
      id: existingLog?.id ?? `${workoutDayId}_${exercise.number}_${date}`,
      workoutDayId,
      exerciseNumber: exercise.number,
      exerciseName: exercise.name,
      loggedDate: date,
      setsCompleted: sets,
      repsCompleted: reps,
      weightKg: weight ? parseFloat(weight) : null,
    };
    saveLog(log);
  }, [sets, reps, weight, existingLog, workoutDayId, exercise, date]);

  const isLime = color === "lime";

  return (
    <div className="card-sm flex flex-col gap-3 p-5 sm:flex-row sm:items-start sm:gap-5">
      {/* Exercise info */}
      <div className="flex items-start gap-3 sm:w-2/5">
        <div
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg font-mono text-xs font-bold ${
            isLime
              ? "bg-green-500/10 text-green-600"
              : "bg-orange-500/10 text-orange-500"
          }`}
        >
          {exercise.number}
        </div>
        <div className="min-w-0">
          <div className="text-[13px] font-semibold text-[#0a0a0a]">
            {exercise.name}
          </div>
          <div className="font-mono text-[10px] text-[#bbb]">
            {exercise.sets}x{exercise.reps}
          </div>
          {lastLog && (
            <div className="mt-1.5 inline-block rounded-md bg-[#f5f5f3] px-2 py-0.5 font-mono text-[10px] text-[#888]">
              Ultimo: {lastLog.setsCompleted}x{lastLog.repsCompleted}
              {lastLog.weightKg ? ` @ ${lastLog.weightKg}kg` : ""}
            </div>
          )}
        </div>
      </div>

      {/* Inputs */}
      <div className="flex flex-1 items-end gap-2">
        <div className="flex-1">
          <label className="label mb-1.5 block">Series</label>
          <input
            type="number"
            min={0}
            max={20}
            value={sets || ""}
            onChange={(e) => setSets(parseInt(e.target.value) || 0)}
            onBlur={persist}
            className="w-full rounded-xl border border-black/[0.06] bg-[#f8f8f6] px-3 py-2 text-[13px] font-medium text-[#0a0a0a] outline-none transition-all placeholder:text-[#ccc] focus:border-black/[0.12] focus:bg-white focus:ring-1 focus:ring-black/[0.04]"
            placeholder={exercise.sets}
          />
        </div>
        <div className="flex-1">
          <label className="label mb-1.5 block">Reps</label>
          <input
            type="text"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
            onBlur={persist}
            className="w-full rounded-xl border border-black/[0.06] bg-[#f8f8f6] px-3 py-2 text-[13px] font-medium text-[#0a0a0a] outline-none transition-all placeholder:text-[#ccc] focus:border-black/[0.12] focus:bg-white focus:ring-1 focus:ring-black/[0.04]"
            placeholder={exercise.reps}
          />
        </div>
        <div className="flex-1">
          <label className="label mb-1.5 block">Peso</label>
          <input
            type="number"
            step="0.5"
            min={0}
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            onBlur={persist}
            className="w-full rounded-xl border border-black/[0.06] bg-[#f8f8f6] px-3 py-2 text-[13px] font-medium text-[#0a0a0a] outline-none transition-all placeholder:text-[#ccc] focus:border-black/[0.12] focus:bg-white focus:ring-1 focus:ring-black/[0.04]"
            placeholder="kg"
          />
        </div>
      </div>
    </div>
  );
}
