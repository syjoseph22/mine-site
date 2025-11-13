import ProjectHeader from "@/app/components/ProjectHeader";
import ProjectInfoBar from "@/app/components/ProjectInfoBar";
import ProjectMapSection from "@/app/components/ProjectMapSection";
import ProjectDetailsSection from "@/app/components/ProjectDetailsSection";
import RootLayout from "@/app/layout";

export default function GuayzimiPage() {
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
    </main>
    </RootLayout>
  );
}
