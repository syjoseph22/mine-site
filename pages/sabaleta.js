'use client';

import ProjectHeader from '@/app/components/ProjectHeader';
import ProjectInfoBar from '@/app/components/ProjectInfoBar';
import ProjectMapSection from '@/app/components/ProjectMapSection';
import ProjectDetailsSection from '@/app/components/ProjectDetailsSection';
import InfoSection from '@/app/components/InfoSection';
import RootLayout from '@/app/layout';

export default function SabaletaPage() {
    return (
        <RootLayout>
            {/* Banner/Header */}
      <ProjectHeader
        image="/ecuador.jpg"
        title="Sabaleta Gold Project"
      />

      {/* Info Bar */}
      <ProjectInfoBar
        metal="Gold"
        type="Alluvial Mining"
        location="Esmeraldas Province, Ecuador"
      />

      {/* Map Section */}
      <ProjectMapSection
        image="/sabaleta/bwmap.png"
        description="The Sabaleta Gold Project is located along the Camunbi River valley in northern Ecuador. 
        This region is recognized for its extensive alluvial terraces hosting high-grade gold mineralization. 
        The project benefits from established access routes and supportive local communities."
      />
        <InfoSection />
      {/* Project Overview */}
      <ProjectDetailsSection title="Project Overview">
        <p>
          The Sabaleta Project has successfully completed its Mining Plan (Plan De Desarrollo Minero)
          and received approval from ARCOM, Ecuador’s Mining Regulation and Control Agency.
          The project’s unique geology allows for a staged development approach designed to minimize risk and
          generate early cash flow through small-scale operations before full-scale expansion.
        </p>
        <p>
          The initial pilot plant phase will target easily accessible surface gold,
          requiring minimal overburden removal. As operations progress, additional small-scale plants
          will be constructed to optimize recovery and expand output capacity.
        </p>
      </ProjectDetailsSection>

      {/* Resource Potential */}
      <ProjectDetailsSection title="Resource Potential">
        <p>
          Early exploration work has confirmed gold mineralization to an average depth of six meters
          within approximately one-third of the mineralized terraces. With terrace profiles extending
          up to 200 meters, the total potential gold-bearing volume could exceed one billion cubic meters —
          suggesting an overall gold potential of up to ten million ounces within the concession.
        </p>
        <p>
          Continued sampling and test pitting are expected to further refine the resource model and
          elevate inferred resources to measured and indicated categories.
        </p>
      </ProjectDetailsSection>

      {/* Geology Update */}
      <ProjectDetailsSection title="Geology Update">
        <p>
          Independent Technical Consultant Michel Rowland has provided a JORC Code-compliant technical report
          detailing resource estimates and recommendations for future exploration. 
          The study covers both North and South Concession Areas, encompassing over 2,000 hectares in total.
        </p>
        <p>
          Exploration results reveal consistent gold distribution throughout the alluvial system, with
          multiple mineralized blocks along the Camunbi River Valley. These findings indicate that
          mining the deposit under current gold market conditions remains highly viable.
        </p>
      </ProjectDetailsSection>

      {/* Strategy */}
      <ProjectDetailsSection title="Development Strategy">
        <p>
          VOHO’s phased development approach at Sabaleta aims to ensure sustainable growth
          and self-funding expansion. The pilot plant will establish initial production and cash flow,
          providing valuable operational insights and funding for the construction of a large-scale processing facility.
        </p>
        <p>
          This strategy minimizes shareholder dilution while accelerating VOHO’s transition from exploration
          to production — a model that aligns with the company’s long-term growth objectives in Ecuador’s
          emerging gold sector.
        </p>
      </ProjectDetailsSection>
        </RootLayout>
    );
} 