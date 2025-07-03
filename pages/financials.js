'use client';

import RootLayout from '@/app/layout';

export default function FinancialOverview() {
  return (
    <RootLayout>
    <div className="bg-[#0b1d2a] text-white min-h-screen px-6 md:px-16 py-20 space-y-24">
      {/* Page Title */}
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Financial Overview</h1>
        <p className="text-white/80 text-lg leading-relaxed">
          A scalable, high-margin gold production model with clear revenue and expansion targets.
        </p>
      </section>

      <section className="max-w-4xl mx-auto gap-12 items-center">
        <div>
          <p className="text-white/80 leading-relaxed mb-4 text-center content-center">
            VOHO has completed a preliminary financial forecast in USD on what may be possible based on initial assumptions that may or may not eventuate. Upon completion of the first plant, VOHO will look to revise the preliminary financial forecast based on the outcomes of the initial production. The forecast does not include potential revenues from hard rock gold mining, Pt, Fe, Ti & Zr and rare earths and has not been subject to an independent audit. 
          </p>
          <img 
            className="max-w-md mx-auto"
            src='/financial_projection.JPG'
          />
          
        </div>
      </section>

      {/* Revenue Targets */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Revenue Projections</h2>
          <p className="text-white/80 leading-relaxed mb-4">
            VOHO aims to start production at <strong>1,000 oz/month</strong> of gold, generating an estimated <strong>$3M/month</strong> in revenue.
            With expansion, output is projected to reach <strong>10,000 oz/month</strong> or <strong>$30M/month</strong> using current gold prices.
          </p>
          <p className="text-white/80 leading-relaxed mb-4">
          The Company also plans to add further massive value by undertaking a comprehensive exploration program with the aim of delineating millions of ounces of gold within the project area.

          </p>
          <p className="text-white/80">
            The model does not include potential earnings from platinum, titanium, zircon, or rare earths, making this a highly conservative projection.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="/gold_bars_2.jpg"
            alt="Gold bars"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </div>
      </section>

      {/* Cost Efficiency */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center md:order-2">
          <img
            src="/images/mine-costs.jpg"
            alt="Mining Costs"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Low Operating Costs</h2>
          <p className="text-white/80 leading-relaxed mb-4">
            With no chemical usage, no crushing, and simple gravity separation, VOHO’s cost of production is estimated to be under <strong>$500/oz</strong>.
          </p>
          <p className="text-white/80">
            Closed-loop water systems and surface-access alluvial deposits reduce energy and infrastructure costs significantly.
          </p>
        </div>
      </section>

      {/* Future Upside */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Upside Potential</h2>
          <p className="text-white/80 leading-relaxed mb-4">
            Current JORC estimates identify <strong>859,350 oz of gold</strong>, but with further exploration, total potential may exceed <strong>10 million oz</strong> based on the volume of mineralized terraces.
          </p>
          <p className="text-white/80">
            Additional revenue streams from Platinum, Titanium, Zircon, and Rare Earths are being evaluated via the initial pilot production process.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="/images/gold-potential.jpg"
            alt="Gold Potential"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </div>
      </section>
    </div>
    </RootLayout>
  );
}
