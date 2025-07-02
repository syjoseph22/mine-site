import AnimatedCard from "./AnimatedCard";

export default function SummarySection() {
  const items = [
    {
      title: "Financial Overview",
      content: "Initial 1,000 oz/month production scaling to 10,000 oz, targeting $30M/month in revenue."
    },
    {
      title: "Environmental Impact",
      content: "No chemicals or crushing; 95% water reuse. Low carbon footprint and surface disruption."
    },
    {
      title: "Location & Assets",
      content: "3,380-hectare Sabaleta project in Ecuador with 859,350 oz of gold already mapped."
    }
  ];

  return (
    <section className="py-20 bg-[#0b1d2a] flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl text-white font-bold mb-12">Why Invest in VOHO</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <AnimatedCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
