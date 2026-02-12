"use client";

import { useState, useEffect, useMemo } from "react";
import { workoutDays } from "@/data/rutina";
import { getLogsForDate } from "@/lib/storage";
import type { WorkoutLog } from "@/lib/types";
import ExerciseLogRow from "@/components/progress/ExerciseLogRow";
import ProgressHistory from "@/components/progress/ProgressHistory";

const dayTabs = [
  { dayIdx: 0, label: "Lunes", sub: "Upper A" },
  { dayIdx: 1, label: "Martes", sub: "Lower A" },
  { dayIdx: 2, label: "Jueves", sub: "Upper B" },
  { dayIdx: 3, label: "Viernes", sub: "Lower B" },
];

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

function shiftDate(dateStr: string, days: number) {
  const d = new Date(dateStr + "T12:00:00");
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

function formatDateDisplay(dateStr: string) {
  const d = new Date(dateStr + "T12:00:00");
  return d.toLocaleDateString("es-AR", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
}

export default function ProgresoSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [date, setDate] = useState(todayStr());
  const [logs, setLogs] = useState<WorkoutLog[]>([]);
  const [refreshKey, setRefreshKey] = useState(0);

  const workout = workoutDays[dayTabs[activeTab].dayIdx];

  useEffect(() => {
    setLogs(getLogsForDate(workout.id, date));
  }, [workout.id, date, refreshKey]);

  const totalExercises = useMemo(
    () => workout.groups.reduce((sum, g) => sum + g.exercises.length, 0),
    [workout],
  );

  const loggedCount = logs.filter(
    (l) => l.setsCompleted > 0 || l.repsCompleted !== "",
  ).length;

  useEffect(() => {
    const handler = () => setRefreshKey((k) => k + 1);
    window.addEventListener("focus", handler);
    return () => window.removeEventListener("focus", handler);
  }, []);

  return (
    <div className="animate-fade-in">
      <p className="label mb-2">registro de entrenamiento</p>
      <h2 className="mb-8 text-3xl font-bold tracking-tight text-[#0a0a0a]">
        Mi Progreso
      </h2>

      {/* Date selector */}
      <div className="card mb-6 flex items-center justify-center gap-4 px-5 py-4">
        <button
          onClick={() => setDate(shiftDate(date, -1))}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-[#888] transition-colors hover:bg-black/[0.03] hover:text-[#0a0a0a]"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="min-w-[140px] text-center">
          <div className="text-[15px] font-semibold text-[#0a0a0a]">
            {formatDateDisplay(date)}
          </div>
          {date === todayStr() && (
            <div className="font-mono text-[10px] text-green-600">HOY</div>
          )}
        </div>
        <button
          onClick={() => setDate(shiftDate(date, 1))}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-[#888] transition-colors hover:bg-black/[0.03] hover:text-[#0a0a0a]"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Day tabs - pill style */}
      <div className="mb-6 flex gap-1.5 overflow-x-auto rounded-2xl bg-white/60 p-1.5 border border-black/[0.06] backdrop-blur-sm">
        {dayTabs.map((tab, idx) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(idx)}
            className={`shrink-0 rounded-xl px-4 py-2.5 text-left transition-all ${
              activeTab === idx
                ? "bg-[#0a0a0a] text-white shadow-sm"
                : "text-[#888] hover:text-[#0a0a0a]"
            }`}
          >
            <div className="text-[13px] font-semibold">{tab.label}</div>
            <div className="font-mono text-[10px] opacity-60">{tab.sub}</div>
          </button>
        ))}
      </div>

      {/* Progress bar */}
      <div className="mb-6 flex items-center gap-3">
        <div className="h-1 flex-1 overflow-hidden rounded-full bg-black/[0.04]">
          <div
            className="h-full rounded-full bg-green-500 transition-all duration-300"
            style={{
              width: `${totalExercises > 0 ? (loggedCount / totalExercises) * 100 : 0}%`,
            }}
          />
        </div>
        <span className="font-mono text-[11px] text-[#888]">
          {loggedCount}/{totalExercises}
        </span>
      </div>

      {/* Exercise groups with inputs */}
      <div className="space-y-8">
        {workout.groups.map((group) => (
          <div key={group.name}>
            <h3
              className={`label mb-3 ${
                workout.color === "lime" ? "!text-green-600" : "!text-orange-500"
              }`}
            >
              {group.name}
            </h3>
            <div className="space-y-2">
              {group.exercises.map((ex) => (
                <ExerciseLogRow
                  key={`${workout.id}_${ex.number}_${date}`}
                  exercise={ex}
                  workoutDayId={workout.id}
                  date={date}
                  existingLog={logs.find(
                    (l) => l.exerciseNumber === ex.number,
                  )}
                  color={workout.color as "lime" | "orange"}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* History */}
      <div className="mt-10 border-t border-black/[0.06] pt-4">
        <ProgressHistory workoutDayId={workout.id} />
      </div>
    </div>
  );
}
