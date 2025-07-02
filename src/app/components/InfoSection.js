import WideCard from "./WideCard";

export default function InfoSection() {
  const sections = [
    {
      title: "Financial Overview",
      content: "Targeting up to $30M in monthly revenue with scalable production from 1,000 to 10,000 oz of gold per month.",
      image: "/financial.jpg",
      link: "/financials",
      reverse: false,
    },
    {
        title: "Scalable Production Strategy",
        content: "VOHO’s modular Pilot Plant design enables rapid duplication and production scaling with minimal capex. Our phased approach starts with small-scale units to generate early cash flow, followed by a large-scale processing plant — making VOHO substantially self-funding.",
        image: "/mining.jpg",
        link: "/strategy",
        reverse: true
    },
    {
      title: "Strategic Location in Ecuador",
      content: "Sabaleta’s 3,380 hectare site is rich with alluvial gold, platinum, and rare earth minerals — ready to mine.",
      image: "/gold_bars.jpg",
      link: "/location",
      reverse: false,
    },
  ];

  return (
    <section className="bg-[#0b1d2a] py-24 px-4">
      {sections.map((s, i) => (
        <WideCard key={i} {...s} />
      ))}
    </section>
  );
}
