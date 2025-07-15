'use client';

import RootLayout from '@/app/layout';
import Image from 'next/image';

export default function LocationPage() {
  return (
    <RootLayout>
    <div className="text-[#0b1d2a] min-h-screen px-6 md:px-16 py-20 space-y-16">
      {/* Page Title */}
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Location & Project Status</h1>
        <p className="text-[#0b1d2a]/80 text-lg leading-relaxed">
          A high-potential mineral concession in Ecuador, backed by a staged production strategy and JORC-compliant reporting.
        </p>
      </section>

      {/* Mining Plan Section */}
      <section className="max-w-4xl mx-auto space-y-6">
        <p>
          The Company has completed and delivered <strong>Plan De Desarrollo Minero (PDM)</strong> to ARCOM.
          ARCOM is the Mining Regulation and Control Agency responsible for granting and managing mining licences in Ecuador.
        </p>
        <p>
          VOHO has a <strong>two-staged plan</strong> moving into production.
          Firstly, as the gold is on the surface with minimal overburden stripping needed,
          after the construction of the initial Pilot Plant we shall construct further Small Scale Pilot Plants to generate immediate cash flow and gain a better understanding of the resource.
        </p>
        <p>
          Our second stage shall involve the construction of a <strong>large-scale processing plant</strong> to increase production.
          VOHO’s strategy will allow it to be substantially self-funding and not dependent on shareholders for additional funding.
        </p>

        {/* 📍 Optional Image: Processing Plant Diagram or Machine */}
        <div className="w-full flex justify-center my-8">
          {/* Replace with actual image later */}
          <div className="w-full max-w-xl h-64 bg-white/10 rounded-2xl flex items-center justify-center text-[#0b1d2a]/50 text-sm italic">
            Image: Pilot Plant or Equipment Here
          </div>
        </div>
      </section>

      {/* Resource Potential Section */}
      <section className="max-w-4xl mx-auto space-y-6">
        <p>
          Sabaleta test pitting to date is generally to a depth of six metres,
          and the current gold resources are based on this depth in an area covering approximately one third of the gold-mineralised terraces within the concession.
        </p>
        <p>
          The terrace profile is up to <strong>200 metres deep</strong>.
          Therefore, the total volume of gold-mineralised ore may be well in excess of <strong>one billion cubic metres</strong>,
          with potential for <strong>10 million ounces of gold</strong> in the concession.
        </p>
        <p>
          The exploration phase at Sabaleta has been successful in revealing several blocks of alluvial resources along the Valley of Camunbi River.
          The grade and volume indicate that mining of the deposit at today's gold price is highly viable.
        </p>
        <p>
          Further potential resources have been uncovered downstream from Sabaleta camp,
          which could <strong>double the present resource volume</strong>.
          Overburden depth remains manageable with a total section grade cut-off of <strong>0.15 g/m³</strong>.
        </p>
        <p>
          Testing revealed consistent data with characteristic <strong>nugget gold</strong> present throughout the alluvials.
        </p>

        {/* 📍 Optional Image: Gold Terrace or Riverbed Sample Map */}
        <div className="w-full flex justify-center my-8">
          {/* Replace with actual image later */}
          <div className="w-full max-w-xl h-64 bg-white/10 rounded-2xl flex items-center justify-center text-[#0b1d2a]/50 text-sm italic">
            Image: Sabaleta Terrace Map or Sample Results
          </div>
        </div>
      </section>

      {/* Geology Section */}
      <section className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold mb-2">Geology Update</h2>
        <p>
          <strong>Michel Rowland</strong>, Independent Technical Consultant, has provided a <strong>JORC Code</strong>-compliant technical report.
          This includes resource calculations and recommendations for the ongoing exploration program.
        </p>
        <p>
          To date, the resource results for the <strong>North and South Concession Areas</strong> (illustrated in the map)
          to a depth of 6 metres cover <strong>1,106 hectares</strong> and <strong>911 hectares</strong> respectively.
        </p>
        <p>
          There is a reasonable expectation that ounces in the inferred category may be elevated to Measured or Indicated status through further pitting.
        </p>

        {/* 📍 Optional Image: Map of North/South Concession Areas */}
        <div className="w-full flex justify-center my-8">
          {/* Replace with actual image later */}
          <div className="w-full max-w-xl h-64 bg-white/10 rounded-2xl flex items-center justify-center text-[#0b1d2a]/50 text-sm italic">
            Image: North & South Concession Map
          </div>
        </div>
      </section>
    </div>
    </RootLayout>
  );
}
