"use client";

import { useState } from "react";
import { workoutDays, progression } from "@/data/rutina";

export default function RutinaSection() {
  const [activeDay, setActiveDay] = useState(0);
  const day = workoutDays[activeDay];
  const isLime = day.color === "lime";

  return (
    <div className="animate-fade-in">
      {/* Day selector pills */}
      <div className="mb-8 flex gap-1.5 overflow-x-auto rounded-2xl bg-white/60 p-1.5 border border-black/[0.06] backdrop-blur-sm">
        {workoutDays.map((d, idx) => (
          <button
            key={d.id}
            onClick={() => setActiveDay(idx)}
            className={`flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 transition-all ${
              activeDay === idx
                ? "bg-[#0a0a0a] text-white shadow-sm"
                : "text-[#888] hover:text-[#0a0a0a]"
            }`}
          >
            <span className="text-sm">{d.emoji}</span>
            <div className="text-left">
              <div className="text-[13px] font-semibold">{d.title}</div>
              <div className="font-mono text-[10px] opacity-60">{d.day}</div>
            </div>
          </button>
        ))}
      </div>

      {/* Active day header */}
      <div className="mb-8">
        <p className="label mb-2">{day.day} — {day.emphasis}</p>
        <h2 className="text-3xl font-bold tracking-tight text-[#0a0a0a]">
          {day.emoji} {day.title}
        </h2>
      </div>

      {/* Exercise groups */}
      <div className="space-y-8">
        {day.groups.map((group) => (
          <div key={group.name}>
            <h3
              className={`label mb-3 ${
                isLime ? "!text-green-600" : "!text-orange-500"
              }`}
            >
              {group.name}
            </h3>
            <div className="space-y-2">
              {group.exercises.map((ex) => (
                <div
                  key={ex.number}
                  className="card-sm flex items-start gap-4 p-5 transition-all hover:shadow-md"
                >
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-mono text-sm font-bold ${
                      isLime
                        ? "bg-green-500/10 text-green-600"
                        : "bg-orange-500/10 text-orange-500"
                    }`}
                  >
                    {ex.number}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[15px] font-semibold text-[#0a0a0a]">
                      {ex.name}
                    </div>
                    <div className="mt-1 text-[13px] text-[#888]">
                      {ex.notes}
                    </div>
                  </div>
                  <div className="flex shrink-0 gap-4 text-right">
                    <div>
                      <div className="text-lg font-bold text-[#0a0a0a]">
                        {ex.sets}
                      </div>
                      <div className="label">series</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-[#0a0a0a]">
                        {ex.reps}
                      </div>
                      <div className="label">reps</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Progression */}
      <div className="mt-12">
        <p className="label mb-2">sistema de progresion</p>
        <h3 className="mb-5 text-2xl font-bold tracking-tight text-[#0a0a0a]">
          Como Progresar
        </h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {progression.map((p) => (
            <div key={p.number} className="card-sm p-5">
              <div className="mb-2 flex items-center gap-2.5">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#0a0a0a] font-mono text-[11px] font-bold text-white">
                  {p.number}
                </span>
                <span className="text-[14px] font-semibold text-[#0a0a0a]">
                  {p.method}
                </span>
              </div>
              <p className="text-[13px] leading-relaxed text-[#888]">
                {p.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
