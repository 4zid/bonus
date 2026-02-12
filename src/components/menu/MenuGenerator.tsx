"use client";

import { useState } from "react";
import { dailyTarget } from "@/data/dieta";
import {
  generateFullMenu,
  regenerateSingleMeal,
} from "@/lib/menu-generator";
import type { GeneratedMenu } from "@/lib/types";

export default function MenuGenerator() {
  const [menu, setMenu] = useState<GeneratedMenu | null>(null);

  function handleGenerate() {
    setMenu(generateFullMenu());
  }

  function handleChangeMeal(index: number) {
    if (!menu) return;
    setMenu(regenerateSingleMeal(menu, index));
  }

  if (!menu) {
    return (
      <div className="card mb-10 flex flex-col items-center p-10 text-center">
        <div className="mb-1 text-2xl">🎲</div>
        <p className="mb-4 text-[13px] text-[#888]">
          Genera un menu aleatorio con las opciones de cada comida
        </p>
        <button
          onClick={handleGenerate}
          className="rounded-xl bg-[#0a0a0a] px-5 py-2.5 text-[13px] font-semibold text-white shadow-sm transition-all hover:bg-[#222] hover:shadow-md"
        >
          Generar Menu del Dia
        </button>
      </div>
    );
  }

  const { totals } = menu;
  const macros = [
    { label: "CALORIAS", value: totals.kcal, target: dailyTarget.kcal, unit: "kcal", color: "bg-green-500" },
    { label: "PROTEINA", value: totals.protein, target: dailyTarget.protein, unit: "g", color: "bg-blue-500" },
    { label: "CARBOS", value: totals.carbs, target: dailyTarget.carbs, unit: "g", color: "bg-orange-400" },
  ];

  return (
    <div className="animate-fade-in mb-10 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="label mb-1">generado</p>
          <h3 className="text-xl font-bold tracking-tight text-[#0a0a0a]">
            Menu del Dia
          </h3>
        </div>
        <button
          onClick={handleGenerate}
          className="rounded-xl border border-black/[0.08] bg-white px-3.5 py-2 font-mono text-[11px] font-medium text-[#888] shadow-sm transition-all hover:bg-[#fafafa] hover:text-[#0a0a0a]"
        >
          REGENERAR
        </button>
      </div>

      {/* Macro totals */}
      <div className="card p-5">
        <div className="grid grid-cols-3 gap-6">
          {macros.map((m) => {
            const pct = Math.min((m.value / m.target) * 100, 100);
            return (
              <div key={m.label}>
                <div className="flex items-baseline justify-between">
                  <span className="label">{m.label}</span>
                  <span className="font-mono text-[11px] text-[#bbb]">
                    {m.value}/{m.target}
                  </span>
                </div>
                <div className="mt-2 text-2xl font-bold tracking-tight text-[#0a0a0a]">
                  {m.value}
                  <span className="ml-0.5 text-xs font-normal text-[#bbb]">{m.unit}</span>
                </div>
                <div className="mt-2 h-1 overflow-hidden rounded-full bg-black/[0.04]">
                  <div
                    className={`h-full rounded-full ${m.color} animate-grow`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Generated meals */}
      <div className="space-y-2">
        {menu.meals.map((meal, idx) => (
          <div
            key={idx}
            className="card-sm flex items-start gap-3 p-5"
          >
            <span className="mt-0.5 text-lg">{meal.emoji}</span>
            <div className="min-w-0 flex-1">
              <div className="mb-1 flex items-center gap-2">
                <span className="label">{meal.mealTimeName}</span>
                <span className="rounded-md bg-green-500/10 px-1.5 py-0.5 font-mono text-[10px] font-bold text-green-600">
                  {meal.option.kcal}
                </span>
              </div>
              <p className="text-[13px] leading-relaxed text-[#444]">
                {meal.option.description}
              </p>
              <div className="mt-1.5 flex gap-3 font-mono text-[10px]">
                <span className="text-blue-500">
                  PROT <strong>{meal.option.protein}g</strong>
                </span>
                <span className="text-orange-500">
                  CARBS <strong>{meal.option.carbs}g</strong>
                </span>
              </div>
            </div>
            <button
              onClick={() => handleChangeMeal(idx)}
              className="shrink-0 rounded-lg border border-black/[0.06] px-2.5 py-1.5 font-mono text-[10px] font-medium text-[#888] transition-all hover:bg-[#f8f8f6] hover:text-[#0a0a0a]"
            >
              CAMBIAR
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
