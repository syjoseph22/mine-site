'use client';

import ProjectHeader from "@/app/components/ProjectHeader";
import ProjectInfoBar from "@/app/components/ProjectInfoBar";
import ProjectMapSection from "@/app/components/ProjectMapSection";
import ProjectDetailsSection from "@/app/components/ProjectDetailsSection";
import RootLayout from "@/app/layout";
import { Dot } from 'lucide-react';

export default function GuayzimiPage() {
  const highlights = [
    "Favorable hilltop topography",
    "Shallow, high-grade skarn mineralization",
    "Existing partially exploited pits with proven gold content",
    "Minimal development required to begin open-cut extraction",
  ];
  return (
    <RootLayout>
    <main className="bg-white">
      <ProjectHeader image="/guayzimi/bannerImg.png" title="Guayzimi Alto Project" />

      <ProjectInfoBar
        metal="Gold"
        type="Alluvial Mining"
        location="Zamora-Chinchipe Province, Ecuador"
      />

      <ProjectMapSection
        image="/guayzimi/landscapeCopy.png"
        description="The Guayzimi Alto project is located in the mineral-rich Zamora-Chinchipe province, an area known for its extensive gold-bearing formations and strong infrastructure access."
      />

      <ProjectDetailsSection title="Project Overview">
        <p>
          The Guayzimi Alto project represents a significant exploration opportunity
          with strong early-stage sampling results and extensive alluvial potential.
          The area benefits from established geological understanding and local support.
        </p>
      </ProjectDetailsSection>

      {/* Highlights Section */}
      <section className="bg-[#f8fafc] py-12 px-6 md:px-16 text-[#0b1d2a]">
      <div className="mx-auto bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 border-b-2 border-[#0b1d2a]/20 pb-2">
          A Low-Cost Opportunity
        </h2>
        <p className="text-lg mb-4">
          Guayzimi Alto offers a highly attractive, low-cost bulk mining opportunity due to:
        </p>
        <ul className="space-y-3">
          {highlights.map((item, index) => (
            <li key={index} className="flex items-start space-x-3">
              <Dot className="text-[#0b1d2a] flex-shrink-0 mt-1" size={20} />
              <span className="text-base md:text-lg">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
    </main>
    </RootLayout>
  );
}
