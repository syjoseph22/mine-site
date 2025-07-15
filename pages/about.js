'use client';

import RootLayout from '@/app/layout';

export default function AboutPage() {
  return (
    <RootLayout>
    <div className="text-[#0b1d2a] min-h-screen px-6 md:px-16 py-20 space-y-24">
      {/* Page Title */}
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About</h1>
        <p className="text-[#0b1d2a] text-lg leading-relaxed">
          A scalable, high-margin gold production model with clear revenue and expansion targets.
        </p>
      </section>

      {/* Volcan Holdings */}
      <section className="max-w-4xl mx-auto gap-12 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-center">Volcan Holdings Inc</h2>
          <p className="text-[#0b1d2a] leading-relaxed mb-4">
            Volcan Holdings Inc (“VOHO”) is an OTC Listed company. 
            Its current flagship asset is the mining rights to the Sabaleta Gold and Platinum Project 
            in Ecuador, South America, of which it has a 70% equity interest in whatever VOHO 
            mines on the project. Ecuador is a country with significant mining potential and 
            with a long history of gold discoveries. With the inception of the new mining laws, 
            the country is being opened up to mineral exploration and mining opportunities for 
            the resources community.
          </p>
          
        </div>
      </section>

      {/* Sabaleta Project */}
      <section className="max-w-4xl mx-auto gap-12 items-center">
        <h2 className="text-2xl font-semibold mb-4 text-center">Sabaleta Gold and Platinum Project</h2>
          <p className="text-[#0b1d2a] leading-relaxed mb-4">
            The Sabaleta exploration and mining concession covers an area of 3,380 hectares.
            In October 2006, Placer Mine SA started an aggressive exploration program. It was carried out on high terraces that were initially inaccessible and modern alluviums identified the presence of important economic resources in the area. 
            The exploration work included pitting and sampling of the Paleo terraces (100 to 200 metres over the current stream) and also sediments in the current Camumbi riverbed. The surface investigations covered approximately 1.000 hectares. 
          </p>
          <ul className='list-disc max-w-2xl mx-auto text-left mb-4'>
            <li className="text-[#0b1d2a] leading-relaxed mb-2" >
                Four terraces containing gold were detected. 
            </li>
            <li className="text-[#0b1d2a] leading-relaxed mb-2" >
                139 pits and trenches were excavated. 74 located on top of the upper terraces (T1, T2 and T3), 65 located on top of the terrace (T4), modern alluviums.
            </li>
            <li className="text-[#0b1d2a] leading-relaxed mb-2" >
                The first results of the exploration pit program confirmed the general location and tenor of the mineralization reported from the (2008) pitting and trenching program. 
            </li>
            <li className="text-[#0b1d2a] leading-relaxed mb-2" >
                Samples were taken and passed through a wash plant including a series of sluice boxes and a final step of gold panning. 
            </li>
            <li className="text-[#0b1d2a] leading-relaxed mb-2" >
                Gold recovered from each sample was weighted to determine gold grade per M3. 
            </li>
            <li className="text-[#0b1d2a] leading-relaxed mb-2" >
                Sampling was extended to (bed rock) wherever possible. 
            </li>
            <li className="text-[#0b1d2a] leading-relaxed mb-2" >
                Results show gold concentration ranging from 0.19 g/m3 (T-2 and T-3) up to 0.5 g/m3 in recent terraces (T-4).
            </li>
          </ul>
      </section>
    </div>
    </RootLayout>
  );
}
