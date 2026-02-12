"use client";

import { useState } from "react";
import type { Section } from "@/lib/types";
import Sidebar from "./Sidebar";
import MobileNav from "./MobileNav";
import RutinaSection from "./sections/RutinaSection";
import DietaSection from "./sections/DietaSection";
import ProgresoSection from "./sections/ProgresoSection";
import ExtrasSection from "./sections/ExtrasSection";

export default function App() {
  const [section, setSection] = useState<Section>("rutina");

  return (
    <div className="grid-bg min-h-screen">
      <Sidebar active={section} onChange={setSection} />
      <MobileNav active={section} onChange={setSection} />

      <main className="md:ml-60">
        <div className="mx-auto max-w-3xl px-5 py-10 md:px-10">
          {section === "rutina" && <RutinaSection />}
          {section === "dieta" && <DietaSection />}
          {section === "progreso" && <ProgresoSection />}
          {section === "extras" && <ExtrasSection />}
        </div>
      </main>
    </div>
  );
}
