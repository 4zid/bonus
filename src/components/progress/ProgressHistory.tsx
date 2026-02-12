"use client";

import { useState, useEffect } from "react";
import { getRecentLogs } from "@/lib/storage";
import type { WorkoutLog } from "@/lib/types";

interface ProgressHistoryProps {
  workoutDayId: string;
}

export default function ProgressHistory({
  workoutDayId,
}: ProgressHistoryProps) {
  const [sessions, setSessions] = useState<
    { date: string; logs: WorkoutLog[] }[]
  >([]);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    getRecentLogs(workoutDayId, 4).then((data) => {
      if (!cancelled) setSessions(data);
    });
    return () => { cancelled = true; };
  }, [workoutDayId]);

  if (sessions.length === 0) {
    return (
      <p className="py-6 text-center text-[13px] text-[#bbb]">
        Sin historial aun. Registra tu primera sesion.
      </p>
    );
  }

  function formatDate(d: string) {
    const [y, m, day] = d.split("-");
    return `${day}/${m}/${y}`;
  }

  return (
    <div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center justify-between py-2 text-[13px] font-medium text-[#888] transition-colors hover:text-[#0a0a0a]"
      >
        <span className="label">historial ({sessions.length} sesiones)</span>
        <svg
          className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {expanded && (
        <div className="animate-fade-in space-y-2 pt-2">
          {sessions.map((session) => (
            <div key={session.date} className="card-sm p-4">
              <div className="label mb-2">{formatDate(session.date)}</div>
              <div className="space-y-1">
                {session.logs.map((log) => (
                  <div
                    key={log.id}
                    className="flex items-center justify-between"
                  >
                    <span className="text-[13px] text-[#444]">
                      {log.exerciseName}
                    </span>
                    <span className="font-mono text-[11px] text-[#888]">
                      {log.setsCompleted}x{log.repsCompleted}
                      {log.weightKg ? ` @ ${log.weightKg}kg` : ""}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
