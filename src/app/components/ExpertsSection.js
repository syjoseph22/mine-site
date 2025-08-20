import ProfileCard from "./ProfileCard";
import Link from "next/link";
import experts from "../../../public/experts";

export default function ExpertsSection() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#0b1d2a] mb-6">Our Experts</h2>
        <p className="text-gray-600 mb-10">
          Learn more about the professionals driving our investment strategies.
        </p>

        {/* Mini Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
          {experts.slice(0,4).map((expert) => (
            <ProfileCard key={expert.slug} {...expert} />
          ))}
        </div>

        <Link
          href="/experts"
          className="inline-block px-6 py-3 bg-[#0b1d2a] text-white rounded-md font-medium hover:bg-[#0b1d2a]/90 transition"
        >
          View All Experts
        </Link>
      </div>
    </section>
  );
}
