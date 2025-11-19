'use client';

export default function ProjectMapSection({ image, description }) {
  return (
    <>
    <hr className="border-t border-gray-300 my-12 w-full" />

    <section className="bg-white py-8 px-6 md:px-24 text-[#0b1d2a]">
      <div className="max-w-6xl mx-auto">

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 items-start">

          {/* LEFT COLUMN: Header + Text */}
          <div>
            <h2 className="text-4xl font-bold pb-1 border-b-[1.5px] border-[#0b1d2a] w-fit mb-4">
              Location
            </h2>
            <p className="text-lg md:text-xl leading-relaxed">
              {description}
            </p>
          </div>

          {/* RIGHT COLUMN: Map (spans both visual rows) */}
          <div className="flex justify-center md:justify-end">
            <img
              src={image}
              alt="Project Map"
              className="w-full max-w-md max-h-96 object-contain"
            />
          </div>

        </div>
      </div>
    </section>
    <hr className="border-t border-gray-300 my-12 w-full" />
    </>
  );
}
