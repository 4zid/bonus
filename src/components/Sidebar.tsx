"use client";

import type { Section } from "@/lib/types";

const navItems: { key: Section; label: string; icon: string }[] = [
  { key: "rutina", label: "Rutina", icon: "💪" },
  { key: "dieta", label: "Dieta", icon: "🍜" },
  { key: "progreso", label: "Mi Progreso", icon: "📈" },
  { key: "extras", label: "Extras", icon: "🧂" },
];

interface SidebarProps {
  active: Section;
  onChange: (s: Section) => void;
}

export default function Sidebar({ active, onChange }: SidebarProps) {
  return (
    <aside className="fixed left-0 top-0 hidden h-screen w-60 border-r border-black/[0.06] bg-white/80 backdrop-blur-xl md:flex md:flex-col">
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 py-6">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0a0a0a] text-xs font-black text-white">
          F
        </div>
        <div>
          <h1 className="text-sm font-semibold tracking-tight text-[#0a0a0a]">
            FitBulk
          </h1>
          <p className="font-mono text-[10px] tracking-wide text-[#888]">
            UPPER/LOWER + BULK
          </p>
        </div>
      </div>

      <div className="mx-4 border-t border-black/[0.06]" />

      {/* Nav */}
      <nav className="flex-1 px-3 py-4">
        <ul className="space-y-0.5">
          {navItems.map((item) => (
            <li key={item.key}>
              <button
                onClick={() => onChange(item.key)}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[13px] font-medium transition-all ${
                  active === item.key
                    ? "bg-[#0a0a0a] text-white shadow-sm"
                    : "text-[#888] hover:bg-black/[0.03] hover:text-[#0a0a0a]"
                }`}
              >
                <span className="text-sm">{item.icon}</span>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="px-6 py-5">
        <p className="font-mono text-[10px] tracking-wide text-[#bbb]">
          V2.0
        </p>
      </div>
    </aside>
  );
}
