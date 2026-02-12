"use client";

import { useState } from "react";
import type { Section } from "@/lib/types";

const navItems: { key: Section; label: string; icon: string }[] = [
  { key: "rutina", label: "Rutina", icon: "💪" },
  { key: "dieta", label: "Dieta", icon: "🍜" },
  { key: "progreso", label: "Mi Progreso", icon: "📈" },
  { key: "extras", label: "Extras", icon: "🧂" },
];

interface MobileNavProps {
  active: Section;
  onChange: (s: Section) => void;
}

export default function MobileNav({ active, onChange }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Top bar */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-black/[0.06] bg-white/80 px-4 py-3 backdrop-blur-xl">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#0a0a0a] text-[11px] font-black text-white">
            F
          </div>
          <span className="text-sm font-semibold text-[#0a0a0a]">FitBulk</span>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-[#888] transition-colors hover:bg-black/[0.04]"
          aria-label="Menu"
        >
          {open ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </header>

      {/* Dropdown */}
      {open && (
        <div className="animate-fade-in fixed inset-x-0 top-[53px] z-40 border-b border-black/[0.06] bg-white/95 p-3 backdrop-blur-xl">
          <ul className="space-y-0.5">
            {navItems.map((item) => (
              <li key={item.key}>
                <button
                  onClick={() => {
                    onChange(item.key);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[13px] font-medium transition-all ${
                    active === item.key
                      ? "bg-[#0a0a0a] text-white"
                      : "text-[#888] hover:bg-black/[0.03] hover:text-[#0a0a0a]"
                  }`}
                >
                  <span className="text-sm">{item.icon}</span>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
