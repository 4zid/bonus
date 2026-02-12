"use client";

import { kitBase, sauces } from "@/data/dieta";

export default function ExtrasSection() {
  return (
    <div className="animate-fade-in space-y-12">
      {/* Sauces */}
      <div>
        <p className="label mb-2">5 salsas esenciales</p>
        <h2 className="mb-5 text-2xl font-bold tracking-tight text-[#0a0a0a]">
          Salsas Asiaticas
        </h2>
        <div className="space-y-3">
          {sauces.map((sauce) => (
            <div key={sauce.name} className="card p-6">
              <div className="mb-3 flex items-center gap-2.5">
                <span className="text-xl">{sauce.emoji}</span>
                <h3 className="text-[15px] font-semibold text-[#0a0a0a]">
                  {sauce.name}
                </h3>
              </div>
              <div className="mb-3 rounded-xl bg-[#f8f8f6] px-4 py-3">
                <div className="label mb-1">ingredientes</div>
                <p className="text-[13px] leading-relaxed text-[#444]">
                  {sauce.ingredients}
                </p>
              </div>
              <div className="mb-3 rounded-xl bg-orange-500/5 border border-orange-500/10 px-4 py-3">
                <div className="label mb-1 !text-orange-500">preparacion</div>
                <p className="text-[13px] leading-relaxed text-[#666]">
                  {sauce.preparation}
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="label mt-0.5 shrink-0">para</span>
                <p className="text-[13px] text-[#888]">{sauce.use}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Kit Base */}
      <div>
        <p className="label mb-2">ingredientes esenciales</p>
        <h2 className="mb-5 text-2xl font-bold tracking-tight text-[#0a0a0a]">
          Kit Base de Salsas
        </h2>
        <div className="grid gap-2 sm:grid-cols-2">
          {kitBase.map((item) => (
            <div key={item.ingredient} className="card-sm p-5">
              <div className="text-[14px] font-semibold text-[#0a0a0a]">
                {item.ingredient}
              </div>
              <p className="mt-1 text-[13px] leading-relaxed text-[#888]">
                {item.use}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Weekly Schedule */}
      <div>
        <p className="label mb-2">calendario</p>
        <h2 className="mb-5 text-2xl font-bold tracking-tight text-[#0a0a0a]">
          Semana de Entrenamiento
        </h2>
        <div className="card overflow-hidden">
          <div className="grid grid-cols-7 divide-x divide-black/[0.04]">
            {["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"].map(
              (d, idx) => {
                const isTraining = [0, 1, 3, 4].includes(idx);
                const dayInfo =
                  idx === 0
                    ? "Upper A"
                    : idx === 1
                      ? "Lower A"
                      : idx === 3
                        ? "Upper B"
                        : idx === 4
                          ? "Lower B"
                          : "Rest";
                return (
                  <div
                    key={d}
                    className={`p-4 text-center ${
                      isTraining ? "bg-green-500/[0.04]" : ""
                    }`}
                  >
                    <div
                      className={`font-mono text-[11px] font-bold ${
                        isTraining ? "text-green-600" : "text-[#bbb]"
                      }`}
                    >
                      {d}
                    </div>
                    <div
                      className={`mt-1.5 text-[10px] ${
                        isTraining ? "font-medium text-green-600/70" : "text-[#ccc]"
                      }`}
                    >
                      {dayInfo}
                    </div>
                  </div>
                );
              },
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
