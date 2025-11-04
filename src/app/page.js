import Banner from "./components/Banner"
import SummarySection from "./components/SummarySection";
import InfoSection from "./components/InfoSection";
import ExpertsSection from "./components/ExpertsSection";
import WideCard from "./components/WideCard";

export default function Home() {
  const sections = [
    {
      title: "Sabaleta Project",
      content: "Targeting up to $30M in monthly revenue with scalable production from 1,000 to 10,000 oz of gold per month.",
      image: "/financial.jpg",
      link: "/sabaleta",
      reverse: false,
    },
    {
      title: "Guayzimi Project",
      content: "Targeting up to $30M in monthly revenue with scalable production from 1,000 to 10,000 oz of gold per month.",
      image: "/mining.jpg",
      link: "/sabaleta",
      reverse: true,
    }
  ];
  return (
    <>
      <Banner />
      <section className="py-24 px-4">
            {sections.map((s, i) => (
              <WideCard key={i} {...s} />
            ))}
          </section>
      <ExpertsSection />
    </>
  );
}
