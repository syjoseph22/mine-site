'use client';

import RootLayout from '@/app/layout';
import Image from 'next/image';

export default function StrategyPage() {
  return (
    <RootLayout>
    <div className="text-[#0b1d2a] min-h-screen px-6 md:px-16 py-20 space-y-24">
      {/* Page Title */}
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">VOHO Strategy</h1>
        <p className="text-[#0b1d2a] text-lg leading-relaxed">
          A modular, phased production plan designed for rapid scaling, low risk, and strong early cash flow.
        </p>
      </section>

      {/* Section 1: Phased Rollout */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Phased Rollout Plan</h2>
          <p className="text-[#0b1d2a] leading-relaxed mb-4">
            VOHO is deploying a two-stage mining strategy. First, we launch a Pilot Plant to generate early revenue and validate yields.
            This stage minimizes risk while providing valuable geological insight.
          </p>
          <p className="text-[#0b1d2a]">
            In Phase Two, we rapidly scale using additional Pilot Plants followed by a large-scale processing facility.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="/images/rollout.jpg"
            alt="Phased Rollout"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </div>
      </section>

      {/* Section 2: Modular Design */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center md:order-2">
          <img
            src="/images/modular.jpg"
            alt="Modular Plant Design"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Modular Plant Design</h2>
          <p className="text-[#0b1d2a] leading-relaxed mb-4">
            Our processing units are compact, low-capex, and easy to deploy in the field. They use water-based separation, eliminating the need for chemicals or crushing.
          </p>
          <p className="text-[#0b1d2a]">
            This design enables fast replication, flexible scaling, and efficient upgrades as new resources are confirmed.
          </p>
        </div>
      </section>

      {/* Section 3: Self-Funding Model */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Self-Funding Growth Model</h2>
          <p className="text-[#0b1d2a] leading-relaxed mb-4">
            Initial cash flow from gold production allows us to reinvest into infrastructure, expansion, and exploration.
            This limits dependency on outside capital and reduces shareholder dilution.
          </p>
          <p className="text-[#0b1d2a]">
            This capital-efficient model ensures early profitability and long-term sustainability.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="/images/self-funding.jpg"
            alt="Self-Funding Model"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </div>
      </section>
    </div>
    </RootLayout>
  );
}
