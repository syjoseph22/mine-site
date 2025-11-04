export default function ProjectMapSection({ image, description }) {
  return (
    <section className="bg-white py-10 px-6 md:px-16 text-[#0b1d2a]">
      <h2 className="text-3xl font-bold mb-6">Location</h2>
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <img
          src={image}
          alt="Project Map"
          className="w-full md:w-1/2 rounded-xl shadow-md"
        />
        <p className="text-lg leading-relaxed md:w-1/2">{description}</p>
      </div>
    </section>
  );
}
