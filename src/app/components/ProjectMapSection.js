export default function ProjectMapSection({ image, description }) {
  return (
    <section className="bg-white py-10 px-6 md:px-16 text-[#0b1d2a]">
  <h2 className="text-3xl font-bold mb-6">Location</h2>
  <div className="flex flex-col md:flex-row gap-6 items-center">
    <img
      src={image}
      alt="Project Map"
      className="w-full md:max-w-sm rounded-xl shadow-md object-contain"
    />
    <p className="text-lg leading-relaxed md:flex-1">{description}</p>
  </div>
</section>

  );
}
