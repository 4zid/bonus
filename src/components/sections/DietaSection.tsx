"use client";

import { useState } from "react";
import { meals, dailyTarget } from "@/data/dieta";
import MenuGenerator from "@/components/menu/MenuGenerator";

export default function DietaSection() {
  const [expandedMeal, setExpandedMeal] = useState<number | null>(null);

  return (
    <div className="animate-fade-in">
      {/* Macro summary card */}
      <div className="card mb-10 p-7">
        <p className="label mb-1">objetivo diario</p>
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-[#0a0a0a]">
          Dieta Bulk Asiatica
        </h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            { label: "CALORIAS", value: dailyTarget.kcal, unit: "kcal", color: "bg-green-500", pct: 100 },
            { label: "PROTEINA", value: dailyTarget.protein, unit: "g", color: "bg-blue-500", pct: (dailyTarget.protein / 350) * 100 },
            { label: "CARBOS", value: dailyTarget.carbs, unit: "g", color: "bg-orange-400", pct: 100 },
            { label: "GRASAS", value: dailyTarget.fat, unit: "g", color: "bg-purple-400", pct: (dailyTarget.fat / 350) * 100 },
          ].map((macro) => (
            <div key={macro.label}>
              <div className="label mb-1">{macro.label}</div>
              <div className="text-3xl font-bold tracking-tight text-[#0a0a0a]">
                {macro.value}
                <span className="ml-0.5 text-sm font-normal text-[#bbb]">
                  {macro.unit}
                </span>
              </div>
              <div className="mt-3 h-1 overflow-hidden rounded-full bg-black/[0.04]">
                <div
                  className={`h-full rounded-full ${macro.color} animate-grow`}
                  style={{ width: `${macro.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Menu Generator */}
      <MenuGenerator />

      {/* All meals */}
      <div className="mb-3 flex items-center gap-3">
        <p className="label">todas las opciones</p>
        <div className="h-px flex-1 bg-black/[0.06]" />
      </div>

      <div className="space-y-2">
        {meals.map((meal, mealIdx) => (
          <div key={meal.name} className="card-sm overflow-hidden transition-all">
            <button
              onClick={() =>
                setExpandedMeal(expandedMeal === mealIdx ? null : mealIdx)
              }
              className="flex w-full items-center justify-between px-5 py-4 text-left"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">{meal.emoji}</span>
                <div>
                  <div className="text-[14px] font-semibold text-[#0a0a0a]">
                    {meal.name}
                  </div>
                  <div className="font-mono text-[10px] text-[#bbb]">
                    {meal.options.length} OPCIONES
                  </div>
                </div>
              </div>
              <svg
                className={`h-4 w-4 text-[#bbb] transition-transform ${
                  expandedMeal === mealIdx ? "rotate-180" : ""
                }`}
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
            {expandedMeal === mealIdx && (
              <div className="animate-fade-in space-y-2 border-t border-black/[0.04] px-5 py-4">
                {meal.options.map((opt) => (
                  <div
                    key={opt.label}
                    className="rounded-xl bg-[#f8f8f6] p-4"
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <span className="rounded-md bg-orange-500/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-orange-500">
                        {opt.label}
                      </span>
                      <span className="rounded-md bg-green-500/10 px-2 py-0.5 font-mono text-[11px] font-bold text-green-600">
                        {opt.kcal}
                      </span>
                    </div>
                    <p className="mb-3 text-[13px] leading-relaxed text-[#666]">
                      {opt.description}
                    </p>
                    <div className="flex gap-4 font-mono text-[11px]">
                      <span className="text-blue-500">
                        PROT <strong>{opt.protein}g</strong>
                      </span>
                      <span className="text-orange-500">
                        CARBS <strong>{opt.carbs}g</strong>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
