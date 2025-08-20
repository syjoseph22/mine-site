import ProfileCard from "@/app/components/ProfileCard";
import RootLayout from "@/app/layout";
import experts from "../public/experts";

export default function ExpertsPage() {
  return (
    <RootLayout>
    <section className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-[#0b1d2a] mb-10">
          Meet Our Experts
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {experts.map((expert) => (
            <ProfileCard key={expert.slug} {...expert} />
          ))}
        </div>
      </div>
    </section>
    </RootLayout>
  );
}
