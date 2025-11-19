'use client';


export default function ProjectDetailsSection({ title, children }) {
  return (
    <section className="bg-white py-12 px-6 md:px-16 text-[#0b1d2a]">
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      <div className="text-lg leading-relaxed space-y-4">{children}</div>
    </section>
  );
}
